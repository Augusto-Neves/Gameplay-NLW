import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import Appointments from "../../components/Appointments";
import ButtonAdd from "../../components/ButtonAdd";
import CategorySelect from "../../components/CategorySelect";
import ListHeader from "../../components/ListHeader";
import { Profile } from "../../components/Profile";
import { styles } from "./styles";
export default function Home() {
  const [category, setCategory] = useState(0);
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
  ];

  function handleCategorySelected(categoryId: number) {
    return categoryId === category ? setCategory(0) : setCategory(categoryId);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd activeOpacity={0.7} />
      </View>
      <View>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelected}
        />
        <View style={styles.content}>
          <ListHeader title="Partidas Agendas" subtitle="Total 6" />
          <FlatList
            data={appointments}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <Appointments data={item}/>}
          />
        </View>
      </View>
    </View>
  );
}
