import { View, TouchableOpacity, Text } from "react-native";
import { categories } from "../../utils/categories";

import GuildIcon from "../GuildIcon";

import { styles } from "./styles";
import PlayerSVG from "../../assets/player.svg";
import CalendarSVG from "../../assets/calendar.svg";
import { theme } from "../../global/styles/theme";
import { GuildProps } from "../Guild";
import { LinearGradient } from "expo-linear-gradient";

export type AppointmentsProps = {
  id: string;
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
  const { primary, on, secondary50, secondary70 } = theme.colors;
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <LinearGradient
          style={styles.guildIconContainer}
          colors={[secondary50, secondary70]}
        >
          <GuildIcon iconId={data.guild.icon} guildId={data.guild.id}/>
        </LinearGradient>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.guild.name}</Text>            
            <Text style={styles.category}>{category.title}</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSVG />
              <Text style={styles.date}>{data.date}</Text>
            </View>

            <View style={styles.playersInfo}>
              <PlayerSVG fill={owner ? on : primary} />
              <Text style={[styles.player, { color: owner ? on : primary }]}>
                {owner ? "Anfitrião" : "Visitante"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
