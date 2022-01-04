import { View } from "react-native";
import ButtonAdd from "../../components/ButtonAdd";
import CategorySelect from "../../components/CategorySelect";
import { Profile } from "../../components/Profile";
import { styles } from "./styles";
export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd activeOpacity={0.7} />
        </View>
        <View>
          <CategorySelect />
        </View>
      </View>
    </>
  );
}
