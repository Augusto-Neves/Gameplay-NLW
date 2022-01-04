import { TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";

type Props = {
  onPress?: () => void;
  activeOpacity?: number;
};

export default function ButtonAdd({ onPress, activeOpacity }: Props) {
  const { heading } = theme.colors;
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={activeOpacity}
      onPress={onPress}
    >
      <MaterialCommunityIcons name="plus" size={24} color={heading} />
    </TouchableOpacity>
  );
}
