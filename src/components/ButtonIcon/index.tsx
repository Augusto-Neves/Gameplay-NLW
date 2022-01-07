import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import DiscordImg from "../../assets/discord.png";

type Props = {
  title: string;
  onPress?: () => void;
  activeOpacity?: number;
};

export default function ButtonIcon({ title, onPress, activeOpacity }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={activeOpacity}
    >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
