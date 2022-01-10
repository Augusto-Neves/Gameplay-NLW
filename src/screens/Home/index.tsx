import { useNavigation, CommonActions } from "@react-navigation/native";
import { useState } from "react";
import { FlatList, View } from "react-native";
import Appointments from "../../components/Appointments";
import Background from "../../components/Background";
import ButtonAdd from "../../components/ButtonAdd";
import CategorySelect from "../../components/CategorySelect";
import ListDivider from "../../components/ListDivider";
import ListHeader from "../../components/ListHeader";
import { Profile } from "../../components/Profile";
import { styles } from "./styles";

export default function Home() {
  const [category, setCategory] = useState(0);
  const navigation = useNavigation();
  const appointments = [
    {
      id: 1,
      guild: {
        id: 1,
        name: "Guild 1",
        icon: "https://cdnb.artstation.com/p/assets/images/images/021/422/255/large/t-j-geisen-lol-icon-rendered-v001.jpg?1571640551",
        owner: true,
      },
      category: 1,
      date: "22/06 às 18:00h",
      description: " Descrição do evento, blá, blá, blá",
    },
    {
      id: 2,
      guild: {
        id: 2,
        name: "Guild 2",
        icon: "https://storage.qoo-static.com/game/17607/KGhkiIABcwb0ZdwWMfGGBsHCb6gQbQNX.jpg",
        owner: false,
      },
      category: 2,
      date: "22/06 às 19:30h",
      description: " Descrição do evento, blá, blá, blá",
    },
    {
      id: 3,
      guild: {
        id: 3,
        name: "Guild 3",
        icon: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46b63d3c-ae67-464c-9a37-670829b2a157/d9smcgt-01ef8663-e594-40f2-80d0-14155ade6354.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2YjYzZDNjLWFlNjctNDY0Yy05YTM3LTY3MDgyOWIyYTE1N1wvZDlzbWNndC0wMWVmODY2My1lNTk0LTQwZjItODBkMC0xNDE1NWFkZTYzNTQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.a6mLnKwLqVXaXF0ExD7lxnjOT_MQ6oFySrrxeIx0Ey0",
        owner: false,
      },
      category: 4,
      date: "22/06 às 20:30h",
      description: " Descrição do evento, blá, blá, blá",
    },
    {
      id: 4,
      guild: {
        id: 4,
        name: "Guild 4",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjTS4DylH-vnik_jTH797RgCawmWAGpWwyjA&usqp=CAU",
        owner: true,
      },
      category: 3,
      date: "15/06 às 14:30h",
      description: " Descrição do evento, blá, blá, blá",
    },
    {
      id: 5,
      guild: {
        id: 5,
        name: "Guild 5",
        icon: "https://dropsdejogos.uai.com.br/wp-content/uploads/sites/10/2020/10/among-scaled-1280x720.jpg",
        owner: false,
      },
      category: 3,
      date: "15/06 às 15:30h",
      description: " Descrição do evento, blá, blá, blá",
    },
    {
      id: 6,
      guild: {
        id: 6,
        name: "Guild 6",
        icon: "https://i.pinimg.com/474x/1f/a7/6f/1fa76f88ca43dcae6e6cdce5d4a86327.jpg",
        owner: false,
      },
      category: 3,
      date: "20/06 às 16:30h",
      description: " Descrição do evento, blá, blá, blá",
    },
    {
      id: 7,
      guild: {
        id: 7,
        name: "Guild 7",
        icon: "https://img.ibxk.com.br/2020/09/15/15165322735070.jpg",
        owner: true,
      },
      category: 3,
      date: "25/06 às 18:30h",
      description: " Descrição do evento, blá, blá, blá",
    }
  ];

  function handleCategorySelected(categoryId: number) {
    return categoryId === category ? setCategory(0) : setCategory(categoryId);
  }

  function handleAppointmentsDetails() {
    navigation.dispatch(
      CommonActions.navigate({ name: "AppointmentsDetails" })
    );
  }

  function handleAppointmentsCreate() {
    navigation.dispatch(CommonActions.navigate({ name: "AppointmentsCreate" }));
  }

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd activeOpacity={0.7} onPress={handleAppointmentsCreate} />
        </View>

        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelected}
        />

        <View style={styles.content}>
          <ListHeader title="Partidas Agendas" subtitle="Total 6" />
          <FlatList
            style={styles.matches}
            data={appointments}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <Appointments data={item} onPress={handleAppointmentsDetails} />
            )}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider />}
            contentContainerStyle={{ paddingBottom: 27 }}
          />
        </View>
      </View>
    </Background>
  );
}
