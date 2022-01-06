import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity, View, Text } from "react-native";
import { SvgProps } from "react-native-svg";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

type Props = {
  title: string;
  icon: React.FC<SvgProps>;
  hasCheckBox?: boolean;
  checked?: boolean;
  onPress?: () => void;
};

export default function Category({
  title,
  icon: Icon,
  checked = false,
  hasCheckBox = false,
  onPress,
}: Props) {
  const { secondary40, secondary50, secondary70, secondary85 } = theme.colors;
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <LinearGradient
          colors={[checked ? secondary85 : secondary50, secondary40]}
          style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
        >
          {hasCheckBox && (
            <View style={checked ? styles.checked : styles.check} />
          )}
          <Icon width={48} height={48} />
          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient>
  );
}
