import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
      width: "72%",
      height: 1,
      backgroundColor: theme.colors.secondary40,
      marginVertical: 21,
      marginHorizontal: 25,      
      alignSelf: "flex-end",
  },
});
