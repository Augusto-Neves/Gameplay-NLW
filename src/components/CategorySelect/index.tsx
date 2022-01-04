import { ScrollView, Text } from "react-native";
import { categories } from "../../utils/categories";

import { styles } from "./styles";
export default function CategorySelect() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 40 }}
      style={styles.container}
    >
      
    </ScrollView>
  );
}
