import { View, Text, Image, ActivityIndicator, Alert } from "react-native";
import IllustrationImg from "../../assets/illustration.png";
import ButtonIcon from "../../components/ButtonIcon";
import Background from "../../components/Background";
import { useAuth } from "../../hooks/auth";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
export default function SignIn() {
  const { loading, signIn } = useAuth();

  async function handleSingIn() {
    try {
      await signIn();
    } catch {
      Alert.alert("Erro", "Erro ao fazer login, tente novamente");
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />
        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {"\n"}e organize suas {"\n"}
            jogatinas
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {"\n"}favoritos com seus amigos
          </Text>

          {loading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <ButtonIcon
              title="Entrar com Discord"
              activeOpacity={0.7}
              onPress={handleSingIn}
            />
          )}
        </View>
      </View>
    </Background>
  );
}
