import { ScrollView } from "react-native";
import { categories } from "../../utils/categories";
import Category from "../Category";

import { styles } from "./styles";

type Props = {
  categorySelected: number;
  setCategory: (categoryId: number) => void;
};
export default function CategorySelect({
  categorySelected,
  setCategory,
}: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 40 }}
      style={styles.container}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </ScrollView>
  );
}
