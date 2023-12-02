import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
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
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: "Professores",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-easel" size={size} color={color} />;
          },
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-heart" size={size} color={color} />;
          },
        }}
      />
    </Navigator>
  );
}
