import { View, TouchableOpacity, Text } from "react-native";
import { categories } from "../../utils/categories";

import GuildIcon from "../GuildIcon";

import { styles } from "./styles";
import PlayerSVG from "../../assets/player.svg";
import { theme } from "../../global/styles/theme";

export type GuildProps = {
  id: number;
  name: string;
  owner: boolean;
};
export type AppointmentsProps = {
  id: number;
  guild: GuildProps;
  category: number;
  date: string;
  description: string;
};
type Props = {
  data: AppointmentsProps;
  onPress?: () => void;
};
export default function Appointments({ data, onPress }: Props) {
  const [category] = categories.filter((item) => item.id === data.category);
  const { owner } = data.guild;
  const { primary, on } = theme.colors;
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <GuildIcon />
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.guild.name}</Text>
            <Text style={styles.category}>{category.title}</Text>
          </View>

          <View style={styles.playersInfo}>
            <PlayerSVG fill={owner ? on : primary} />
            <Text
              style={[styles.players, { color: owner ? on : primary }]}
            >{owner ? "Anfitrião" : "Visitante" }</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
