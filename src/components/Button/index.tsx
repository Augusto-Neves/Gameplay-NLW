import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string;
  onPress?: () => void;
  activeOpacity?: number;
};

export default function OrdinaryButton({ title, onPress, activeOpacity }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={activeOpacity}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
