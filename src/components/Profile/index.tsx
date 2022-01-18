import { Text, TouchableOpacity, View, Alert } from "react-native";
import { useAuth } from "../../hooks/auth";
import Avatar from "../Avatar";

import { styles } from "./styles";

type Props = {
  onPress?: () => void;
};

export function Profile({ onPress }: Props) {
  const { user } = useAuth();
  
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <Avatar urlImage={user.avatar} />
      </TouchableOpacity>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.userName}>{user.firstName}</Text>
        </View>
        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}
