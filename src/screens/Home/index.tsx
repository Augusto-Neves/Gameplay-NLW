import {
  useNavigation,
  CommonActions,
  useFocusEffect,
} from "@react-navigation/native";
import { useState, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import Appointments, { AppointmentsProps } from "../../components/Appointments";
import Background from "../../components/Background";
import ButtonAdd from "../../components/ButtonAdd";
import CategorySelect from "../../components/CategorySelect";
import ListDivider from "../../components/ListDivider";
import ListHeader from "../../components/ListHeader";
import { Profile } from "../../components/Profile";
import { styles } from "./styles";
import { COLLECTION_APPOINTMENT } from "../../configs/database";
import Loading from "../../components/Loading";
import SignOutModal from "../../components/SignoutModal";
import { useAuth } from "../../hooks/auth";

export default function Home() {
  const { signOut } = useAuth();
  const [category, setCategory] = useState(0);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState<AppointmentsProps[]>([]);
  const [openModalView, setOpenModalView] = useState(false);

  function handleOpenModalView() {
    setOpenModalView(true);
  }
  function handleCloseModalView() {
    setOpenModalView(false);
  }

  function handleCategorySelected(categoryId: number) {
    return categoryId === category ? setCategory(0) : setCategory(categoryId);
  }

  function handleAppointmentsDetails(guildSelected: AppointmentsProps) {
    navigation.dispatch(
      CommonActions.navigate({
        name: "AppointmentsDetails",
        params: { guildSelected },
      })
    );
  }

  function handleAppointmentsCreate() {
    navigation.dispatch(CommonActions.navigate({ name: "AppointmentsCreate" }));
  }

  async function loadAppointments() {
    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENT);
    const newAppointment: AppointmentsProps[] = storage
      ? JSON.parse(storage)
      : [];

    if (category) {
      setAppointments(
        newAppointment.filter((item) => item.category === category)
      );
    } else {
      setAppointments(newAppointment);
    }
    setLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      loadAppointments();
    }, [category])
  );
  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Profile onPress={handleOpenModalView} />
          <ButtonAdd activeOpacity={0.7} onPress={handleAppointmentsCreate} />
        </View>

        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelected}
        />

        <View style={styles.content}>
          {loading ? (
            <Loading />
          ) : (
            <>
              <ListHeader
                title="Partidas Agendas"
                subtitle={`Total ${appointments.length}`}
              />
              <FlatList
                style={styles.matches}
                data={appointments}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                  <Appointments
                    data={item}
                    onPress={() => handleAppointmentsDetails(item)}
                  />
                )}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider />}
                contentContainerStyle={{ paddingBottom: 27 }}
              />
            </>
          )}
        </View>
        <SignOutModal visible={openModalView} onPress={handleCloseModalView}>
          <View style={styles.signOutConteiner}>
            <Text style={styles.signOutText}>Deseja sair do</Text>
            <Text style={styles.logoWhite}>Game</Text>
            <Text style={styles.logoRed}>Play</Text>
            <Text style={styles.interrogation}>?</Text>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.denyButton}
              activeOpacity={0.7}
              onPress={handleCloseModalView}
            >
              <Text style={styles.text}>Não</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.confirmButton}
              activeOpacity={0.7}
              onPress={signOut}
            >
              <Text style={styles.text}>Sim</Text>
            </TouchableOpacity>
          </View>
        </SignOutModal>
      </View>
    </Background>
  );
}
