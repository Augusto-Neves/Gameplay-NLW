import { Image } from "react-native";
import { styles } from "./styles";

export default function GuildIcon() {
  const uri = "https://cdn.icon-icons.com/icons2/3053/PNG/512/discord_alt_macos_bigsur_icon_190237.png";
  return (
    <Image
      style={styles.image} 
      source={{uri}}
      resizeMode="cover"
    />
  );
}
