import { View, Text, Image, StatusBar } from "react-native";
import { styles } from "./styles";
import IllustrationImg from "../../assets/illustration.png";
import ButtonIcon from "../../components/ButtonIcon";
import { useNavigation, CommonActions } from "@react-navigation/native";

export default function SignIn() {
  const navigation = useNavigation();

  function handleSingIn() {
    navigation.dispatch(
      CommonActions.navigate({
        name: "Home",
      })
    );
  }

  return (
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

        <ButtonIcon
          title="Entrar com Discord"
          activeOpacity={0.7}
          onPress={handleSingIn}
        />
      </View>
    </View>
  );
}
