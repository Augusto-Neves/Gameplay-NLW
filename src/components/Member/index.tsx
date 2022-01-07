import { View, Text } from "react-native";
import { theme } from "../../global/styles/theme";
import Avatar from "../Avatar";
import { styles } from "./styles";

export type MemberProps = {
  id: number;
  username: string;
  avatar_url: string;
  status: string;
};

type Props = {
  data: MemberProps;
};

export default function Member({ data }: Props) {
  const { on, primary, others } = theme.colors;
  const isOnline = data.status === "online";
  const isOffline = data.status === "offline";
  const isBusy = data.status === "indisponível";

  const backgroundBulletColor = (status: string) => {
    if (status === "online") {
      return on;
    } else if (status === "offline") {
      return others;
    } else if (status === "indisponível") {
      return primary;
    }
  };
  return (
    <View style={styles.container}>
      <Avatar urlImage={data.avatar_url} />
      <View>
        <Text style={styles.title}>{data.username}</Text>
        <View style={styles.status}>
          <View
            style={[
              styles.bullet,
              { backgroundColor: backgroundBulletColor(data.status) },
            ]}
          />
          {isOnline ? <Text style={styles.nameStatus}>Disponível</Text> : null}
          {isOffline ? <Text style={styles.nameStatus}>Offline</Text> : null}
          {isBusy ? <Text style={styles.nameStatus}>Indisponível</Text> : null}
        </View>
      </View>
    </View>
  );
}
