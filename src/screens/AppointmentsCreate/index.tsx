import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import Background from "../../components/Background";
import Header from "../../components/Header";
import ListHeader from "../../components/ListHeader";
import CategorySelect from "../../components/CategorySelect";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import GuildIcon from "../../components/GuildIcon";
import SmallInput from "../../components/Smallinput";

export default function AppointmentCreate() {
  const [category, setCategory] = useState(0);

  function handleCategorySelected(categoryId: number) {
    return categoryId === category ? setCategory(0) : setCategory(categoryId);
  }

  return (
    <Background>
      <Header title="Agendar Partida" />

      <View style={styles.label}>
        <ListHeader title="Categoria" />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelected}
        hasCheckBox
      />

      <View style={styles.form}>
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.select}>
            {
              // <View style={styles.image} />
              <GuildIcon />
            }

            <View style={styles.selectBody}>
              <Text style={styles.bodyTitle}>Selecione um Servidor</Text>
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
      </View>
    </Background>
  );
}
