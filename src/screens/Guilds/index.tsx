import { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import Guild, { GuildProps } from "../../components/Guild";
import ListDivider from "../../components/ListDivider";
import Loading from "../../components/Loading";
import { api } from "../../services/api";
import { styles } from "./styles";

type Props = {
  handleGuildSelected: (guild: GuildProps) => void;
};

export default function Guilds({ handleGuildSelected }: Props) {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchGuilds() {
    const response = await api.get("/users/@me/guilds");
    setGuilds(response.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchGuilds();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={guilds}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Guild data={item} onPress={() => handleGuildSelected(item)} />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          ListHeaderComponent={() => <ListDivider />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 50, paddingTop: 104 }}
          style={styles.guilds}
        />
      )}
    </View>
  );
}
