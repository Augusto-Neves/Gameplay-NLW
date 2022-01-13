import { View, ActivityIndicator } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

export default function Loading() {
  return (
    <View>
      <ActivityIndicator
        style={styles.container}
        size="large"
        color={theme.colors.primary}
      />
    </View>
  );
}
