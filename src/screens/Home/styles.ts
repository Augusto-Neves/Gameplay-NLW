import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: getStatusBarHeight() + 26,
    marginBottom: 22,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    marginTop: 42,
  },
  matches: {
    marginTop: 24,
    marginLeft: 24,
  },
  signOutConteiner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  signOutText: {
    textAlign: "center",
    paddingVertical: 27,
    fontFamily: theme.fonts.title500,
    fontSize: 24,
    color: theme.colors.heading,
  },
  logoWhite: {
    marginLeft: 9,
    fontSize: 24,
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
  },
  logoRed: {
    fontSize: 24,
    color: theme.colors.primary,
    fontFamily: theme.fonts.title700,
  },
  interrogation: {
    fontSize: 24,
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  denyButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 160,
    height: 56,
    borderWidth: 1,
    borderColor: theme.colors.secondary30,
    borderRadius: 8,
  },
  confirmButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primary,
    width: 160,
    height: 56,
    borderRadius: 8,
  },
  text: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
  },
});
