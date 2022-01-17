import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Alert,
  Share,
  Platform,
} from "react-native";
import * as Linking from "expo-linking";
import { useRoute } from "@react-navigation/native";
import { Fontisto } from "@expo/vector-icons";

import Background from "../../components/Background";
import Header from "../../components/Header";
import ListHeader from "../../components/ListHeader";
import Member, { MemberProps } from "../../components/Member";
import ListDivider from "../../components/ListDivider";
import ButtonIcon from "../../components/ButtonIcon";
import { AppointmentsProps } from "../../components/Appointments";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import Banner from "../../assets/banner.png";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

type RouteParams = {
  guildSelected: AppointmentsProps;
};

type GuildWidgetProps = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
  presence_count: number;
};

export default function AppointmentDetails() {
  const route = useRoute();
  const { guildSelected } = route.params as RouteParams;
  const [widget, setWidget] = useState<GuildWidgetProps>(
    {} as GuildWidgetProps
  );
  const [loading, setLoading] = useState(true);

  const presenceCount = () => {
    const presence = widget.presence_count;
    if (presence) {
      return presence;
    } else {
      return 0;
    }
  };

  async function fetchGuildWidget() {
    try {
      const response = await api.get(
        `/guilds/${guildSelected.guild.id}/widget.json`
      );
      setWidget(response.data);
    } catch {
      Alert.alert(
        "Ops! Ative o Widget do Discord para ver os membros.",
        "Se você for dono (ou administrador) do servidor, ative o Widget nas configurações do servidor no Discord, ou peça a um deles, e tente novamente."
      );
    } finally {
      setLoading(false);
    }
  }

  function handleShareInvitation() {
    const message =
      Platform.OS === "ios"
        ? `Junte-se ao servidor ${guildSelected.guild.name}`
        : widget.instant_invite;

    Share.share({
      message,
      url: widget.instant_invite,
    });
  }

  function handleOpenGuild() {
    Linking.openURL(widget.instant_invite);
  }

  useEffect(() => {
    fetchGuildWidget();
  }, []);
  return (
    <>
      <Header
        title="Detalhes"
        action={
          widget.instant_invite ? (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={handleShareInvitation}
            >
              <Fontisto name="share" size={24} color={theme.colors.primary} />
            </TouchableOpacity>
          ) : (
            <></>
          )
        }
      />

      <Background>
        <ImageBackground source={Banner} style={styles.banner}>
          <View style={styles.bannerContent}>
            <Text style={styles.title}>{guildSelected.guild.name}</Text>
            <Text style={styles.subtitle}>{guildSelected.description}</Text>
          </View>
        </ImageBackground>
        {loading ? (
          <View style={styles.container}>
            <Loading />
          </View>
        ) : (
          <>
            <ListHeader
              title="Jogadores"
              subtitle={`Total ${presenceCount()}`}
            />

            <FlatList
              style={styles.memberList}
              data={widget.members}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => <Member data={item} />}
              ItemSeparatorComponent={() => <ListDivider />}
            />
          </>
        )}

        <View style={styles.footer}>
          {widget.instant_invite != null && (
            <ButtonIcon
              title={"Entrar no servidor"}
              activeOpacity={0.7}
              onPress={handleOpenGuild}
            />
          )}
        </View>
      </Background>
    </>
  );
}
