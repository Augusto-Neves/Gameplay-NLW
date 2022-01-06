import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity, View, Text } from "react-native";
import { SvgProps } from "react-native-svg";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

type Props = {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
  onPress?: () => void;
};

export default function Category({
  title,
  icon: Icon,
  checked = false,
  onPress,
}: Props) {
  const { secondary50, secondary70 } = theme.colors;
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <View style={[styles.content, { opacity: checked ? 1 : 0.5  }]}>
          <View style={checked ? styles.checked : styles.check} />
          <Icon width={48} height={48} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
}
