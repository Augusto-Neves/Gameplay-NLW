import { View, FlatList } from "react-native";
import Guild, { GuildProps } from "../../components/Guild";
import ListDivider from "../../components/ListDivider";
import { styles } from "./styles";

type Props = {
  handleGuildSelected: (guild: GuildProps) => void;
};

export default function Guilds({ handleGuildSelected }: Props) {
  const guilds = [
    {
      id: 1,
      name: "Guild 1",
      icon: "https://cdnb.artstation.com/p/assets/images/images/021/422/255/large/t-j-geisen-lol-icon-rendered-v001.jpg?1571640551",
      owner: true,
    },
    {
      id: 2,
      name: "Guild 2",
      icon: "https://storage.qoo-static.com/game/17607/KGhkiIABcwb0ZdwWMfGGBsHCb6gQbQNX.jpg",
      owner: false,
    },
    {
      id: 3,
      name: "Guild 3",
      icon: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46b63d3c-ae67-464c-9a37-670829b2a157/d9smcgt-01ef8663-e594-40f2-80d0-14155ade6354.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2YjYzZDNjLWFlNjctNDY0Yy05YTM3LTY3MDgyOWIyYTE1N1wvZDlzbWNndC0wMWVmODY2My1lNTk0LTQwZjItODBkMC0xNDE1NWFkZTYzNTQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.a6mLnKwLqVXaXF0ExD7lxnjOT_MQ6oFySrrxeIx0Ey0",
      owner: false,
    },
    {
      id: 4,
      name: "Guild 4",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjTS4DylH-vnik_jTH797RgCawmWAGpWwyjA&usqp=CAU",
      owner: true,
    },
    {
      id: 5,
      name: "Guild 5",
      icon: "https://dropsdejogos.uai.com.br/wp-content/uploads/sites/10/2020/10/among-scaled-1280x720.jpg",
      owner: false,
    },
    {
      id: 6,
      name: "Guild 6",
      icon: "https://i.pinimg.com/474x/1f/a7/6f/1fa76f88ca43dcae6e6cdce5d4a86327.jpg",
      owner: false,
    },
    {
      id: 7,
      name: "Guild 7",
      icon: "https://img.ibxk.com.br/2020/09/15/15165322735070.jpg",
      owner: true,
    },
  ];
  return (
    <View style={styles.container}>
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
    </View>
  );
}
