import { Image, View } from "react-native";
import { styles } from "./styles";
import DiscordSvg from "../../assets/discord.svg";

type props = {
  guildId?: string;
  iconId?: string;
};

const { CDN_IMAGE } = process.env;

export default function GuildIcon({ iconId, guildId }: props) {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

  return (
    <View style={styles.container}>
      {iconId ? (
        <Image style={styles.image} source={{ uri }} resizeMode="cover" />
      ) : (
        <DiscordSvg width={40} height={40} />
      )}
    </View>
  );
}
