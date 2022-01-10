import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Background from "../../components/Background";
import Header from "../../components/Header";
import ListHeader from "../../components/ListHeader";
import CategorySelect from "../../components/CategorySelect";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import GuildIcon from "../../components/GuildIcon";
import SmallInput from "../../components/Smallinput";
import TextArea from "../../components/TextArea";
import OrdinaryButton from "../../components/Button";
import ModalView from "../../components/ModalView";
import Guilds from "../Guilds";
import { GuildProps } from "../../components/Guild";

export default function AppointmentCreate() {
  const [category, setCategory] = useState(0);
  const [openModalView, setOpenModalView] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  function handleOpenModalView() {
    setOpenModalView(true);
  }
  function handleCloseModalView() {
    setOpenModalView(false);
  }

  function handleGuildSelected(guildSelected: GuildProps) {
    setOpenModalView(false);
    setGuild(guildSelected);
  }

  function handleCategorySelected(categoryId: number) {
    setCategory(categoryId);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Background>
        <Header title="Agendar Partida" />
        <ScrollView>
          <View style={styles.label}>
            <ListHeader title="Categoria" />
          </View>

          <CategorySelect
            categorySelected={category}
            setCategory={handleCategorySelected}
            hasCheckBox
          />

          <View style={styles.form}>
            <TouchableOpacity activeOpacity={0.7} onPress={handleOpenModalView}>
              <View style={styles.select}>
                {guild.icon ? (
                  <GuildIcon icon={guild.icon} />
                ) : (
                  <View style={styles.image} />
                )}

                <View style={styles.selectBody}>
                  <Text style={styles.bodyTitle}>
                    {guild.name ? guild.name : "Selecione um Servidor"}
                  </Text>
                </View>

                <Feather
                  name="chevron-right"
                  size={24}
                  color={theme.colors.heading}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.field}>
              <View>
                <Text style={styles.label}>Dia e Mês</Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>

              <View>
                <Text style={styles.label}>Hora e Minuto</Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Descrição</Text>
              <Text style={styles.textMax}>Max 100 caracteres</Text>
            </View>
            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />

            <View style={styles.footer}>
              <OrdinaryButton title="Agendar" />
            </View>
          </View>
        </ScrollView>
      </Background>
      <ModalView visible={openModalView} onPress={handleCloseModalView}>
        <Guilds handleGuildSelected={handleGuildSelected} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}
