import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string;
  onPress?: () => void;
  activeOpacity?: number;
  disabled?: boolean;
};

export default function OrdinaryButton({
  title,
  onPress,
  activeOpacity,
  disabled,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={activeOpacity}
      disabled={disabled}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
