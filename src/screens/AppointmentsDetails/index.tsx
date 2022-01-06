import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import Background from "../../components/Background";
import Header from "../../components/Header";
import { Fontisto } from "@expo/vector-icons";

import { styles } from "./styles";
import Banner from "../../assets/banner.png";
import { theme } from "../../global/styles/theme";

export default function AppointmentDetails() {
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <TouchableOpacity activeOpacity={0.7}>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </TouchableOpacity>
        }
      />
      <ImageBackground source={Banner} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>League of Legends</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>
    </Background>
  );
}
