import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { theme } from "../global/styles/theme";
import AppointmentCreate from "../screens/AppointmentsCreate";
import AppointmentDetails from "../screens/AppointmentsDetails";
import Home from "../screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  const options = {
    headerShown: false,
    contentStyle: { backgroundColor: theme.colors.secondary100 },
  };

  return (
    <Navigator screenOptions={options}>      
      <Screen name="Home" component={Home} />
      <Screen name="AppointmentsDetails" component={AppointmentDetails} />
      <Screen name="AppointmentsCreate" component={AppointmentCreate} />
    </Navigator>
  );
}
