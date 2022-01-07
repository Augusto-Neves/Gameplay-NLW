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
        icon: null,
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
        icon: null,
        owner: false,
      },
      category: 2,
      date: "22/06 às 19:30h",
      description: " Descrição do evento, blá, blá, blá",
    },
    {
      id: 3,
      guild: {
        id: 2,
        name: "Guild 2",
        icon: null,
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
        icon: null,
        owner: true,
      },
      category: 3,
      date: "22/06 às 21:30h",
      description: " Descrição do evento, blá, blá, blá",
    },
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
          />
        </View>
      </View>
    </Background>
  );
}
