import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TeacherList } from "../pages/TeacherList";
import { Favorites } from "../pages/Favorites";

const { Navigator, Screen } = createBottomTabNavigator();

export function StudyTabs() {
  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },

        tabBarStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        tabBarIconStyle: {
          flex: 0,
          width: 20,
          justifyContent: "center",
        },

        tabBarLabelStyle: {
          fontFamily: "Archivo_700Bold",
          fontSize: 13,
          marginLeft: 16,
        },
        headerShown: false,
        tabBarInactiveBackgroundColor: "#fafafc",
        tabBarActiveBackgroundColor: "#ebebf5",
        tabBarInactiveTintColor: "#c1bccc",
        tabBarActiveTintColor: "#32264d",
      }}
    >
      <Screen name="TeacherList" component={TeacherList} />
      <Screen name="Favorites" component={Favorites} />
    </Navigator>
  );
}
