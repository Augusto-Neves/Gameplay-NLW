import { Image } from "react-native";
import { styles } from "./styles";

export default function GuildIcon() {
  const uri =
    "https://cdnb.artstation.com/p/assets/images/images/021/422/255/large/t-j-geisen-lol-icon-rendered-v001.jpg?1571640551";
  return <Image style={styles.image} source={{ uri }} resizeMode="cover" />;
}
