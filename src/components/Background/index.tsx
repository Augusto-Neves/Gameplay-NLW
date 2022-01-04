import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = {
  children: React.ReactNode;
};

export default function Background({ children }: Props) {
  const { secondary80, secondary100 } = theme.colors;
  return (
    <LinearGradient
      colors={[secondary80, secondary100]}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
}
