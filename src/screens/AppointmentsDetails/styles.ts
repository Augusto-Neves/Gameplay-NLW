import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  banner: {
    width: "100%",
    height: 234,
    marginBottom: 30,
  },
  bannerContent: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    marginBottom: 30,
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 28,
    color: theme.colors.heading,
  },
  subtitle: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.heading,
  },  
  memberList: {
    marginTop: 27,
    marginLeft: 24,
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 27,
    marginBottom: getBottomSpace(),
  },
});
