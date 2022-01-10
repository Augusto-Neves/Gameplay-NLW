import { Image } from "react-native";
import { styles } from "./styles";

type props = {
  icon: string | undefined;
};

export default function GuildIcon({ icon }: props) {
  const uri = icon;

  return <Image style={styles.image} source={{ uri }} resizeMode="cover" />;
}
