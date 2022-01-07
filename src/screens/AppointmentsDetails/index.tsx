import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
import Background from "../../components/Background";
import Header from "../../components/Header";
import { Fontisto } from "@expo/vector-icons";

import { styles } from "./styles";
import Banner from "../../assets/banner.png";
import { theme } from "../../global/styles/theme";
import ListHeader from "../../components/ListHeader";
import Member from "../../components/Member";
import ListDivider from "../../components/ListDivider";
import ButtonIcon from "../../components/ButtonIcon";

export default function AppointmentDetails() {
  const members = [
    {
      id: 1,
      username: "John Dee",
      avatar_url: "https://randomuser.me/api/portraits/men/81.jpg",
      status: "online",
    },
    {
      id: 2,
      username: "Marie",
      avatar_url: "https://randomuser.me/api/portraits/women/56.jpg",
      status: "offline",
    },
    {
      id: 3,
      username: "Jayckee",
      avatar_url: "https://randomuser.me/api/portraits/men/3.jpg",
      status: "indisponível",
    },
  ];
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <TouchableOpacity activeOpacity={0.7}>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </TouchableOpacity>
        }
      />
      <ImageBackground source={Banner} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>League of Legends</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3" />

      <FlatList
        style={styles.memberList}
        data={members}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
      />
      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" activeOpacity={0.7} />
      </View>
    </Background>
  );
}
