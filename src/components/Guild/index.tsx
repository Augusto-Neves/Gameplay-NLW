import { TouchableOpacity, View, Text } from "react-native";
import GuildIcon from "../GuildIcon";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";

export type GuildProps = {
  id: number;
  name: string;
  icon: string | undefined;
  owner: boolean;
};

type Props = {
  onPress?: () => void;
  data: GuildProps;
};
export default function Guild({ onPress, data }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <GuildIcon icon={data.icon} />
      <View style={styles.content}>
        <View>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.type}>
            {data.owner ? "Administrador" : "Convidado"}
          </Text>
        </View>
      </View>
      <Feather name="chevron-right" size={24} color={theme.colors.heading} />
    </TouchableOpacity>
  );
}
