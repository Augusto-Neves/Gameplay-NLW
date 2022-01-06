import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    width: 104,
    height: 120,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: 100,
    height: 116,
    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 15,
  },
  check: {
    position: "absolute",
    top: 7,
    right: 7,
    width: 12,
    height: 12,
    backgroundColor: theme.colors.secondary100,    
    borderColor: theme.colors.secondary50,
    borderWidth: 2,
    borderRadius: 4,
  },
  checked: {
    position: "absolute",
    top: 7,
    right: 7,
    width: 10,
    height: 10,
    backgroundColor: theme.colors.primary,    
    borderRadius: 3,
  },
});
