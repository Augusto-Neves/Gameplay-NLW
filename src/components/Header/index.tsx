import { ReactNode } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
  title: string;
  action?: ReactNode;
};
export default function Header({ title, action }: Props) {
  const navigation = useNavigation();
  const { secondary100, secondary40, heading } = theme.colors;

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <LinearGradient
      colors={[secondary100, secondary40]}
      style={styles.container}
    >
      <TouchableOpacity onPress={handleGoBack} activeOpacity={0.7}>
        <Feather name="arrow-left" size={24} color={heading} />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      {action ? <View>{action}</View> : <View style={{ width: 24 }}></View>}
    </LinearGradient>
  );
}
