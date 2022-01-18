import {
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
} from "react-native";
import Background from "../Background";
import { styles } from "./styles";

type Props = ModalProps & {
  children: React.ReactNode;
  onPress?: () => void;
};
export default function SignOutModal({ children, onPress, ...rest }: Props) {
  return (
    <Modal
      animationType="fade"
      transparent
      style={styles.container}
      statusBarTranslucent
      {...rest}
    >
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.bar} />
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
