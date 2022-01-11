import { useFonts } from "expo-font";
import { StatusBar, LogBox } from "react-native";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";

//Components
import AppLoading from "expo-app-loading";
import { Routes } from "./src/routes";
import Background from "./src/components/Background";
import { AuthProvider } from "./src/hooks/auth";

// LogBox.ignoreLogs([
//   "You are not currently signed in to Expo on your development machine.",
// ])

export default function App() {
  const [fontsLoaded] = useFonts({
    Rajdhani_500Medium,
    Rajdhani_700Bold,
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>
  );
}
