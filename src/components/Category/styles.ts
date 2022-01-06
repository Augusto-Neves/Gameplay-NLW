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
        backgroundColor: theme.colors.secondary40,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 7,
    },
    title: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.title700,
        fontSize: 15,
    },
    check: {
        width: 12,
        height: 12,
        backgroundColor: theme.colors.secondary100,
        alignSelf: "flex-end",
        marginRight: 7,
        borderColor: theme.colors.secondary50,
        borderWidth: 2,
        borderRadius: 4,
    },
    checked: {
        width: 10,
        height: 10,
        backgroundColor: theme.colors.primary,
        alignSelf: "flex-end",
        marginRight: 7,     
        borderRadius: 3,
    }
});