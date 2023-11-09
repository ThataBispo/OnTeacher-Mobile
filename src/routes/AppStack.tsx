import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Landing } from "../pages/Landing";
import { GiveClasesses } from "../pages/GiveClasses";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Landing" component={Landing} />
        <Screen name="GiveClasses" component={GiveClasesses} />
      </Navigator>
    </NavigationContainer>
  );
}
