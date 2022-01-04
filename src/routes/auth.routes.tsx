import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import SignIn from "../screens/Signin";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  const options = {
    headerShown: false,
    contentStyle: { backgroundColor: "transparent" },
  };
  
  return (
    <Navigator screenOptions={options}>
      <Screen name="SingIn" component={SignIn} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
