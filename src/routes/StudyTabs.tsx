import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Heart, Student } from "phosphor-react-native";
import { Favorites } from "../pages/Favorites";
import { TeacherList } from "../pages/TeacherList";

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
          justifyContent: "space-between",
        },
        tabBarIconStyle: {
          flex: 0,
          width: 20,
          justifyContent: "center",
        },

        // tabBarLabelStyle: {
        //   fontFamily: "Archivo_700Bold",
        //   fontSize: 13,
        //   marginLeft: 16,
        // },
        tabBarShowLabel: false,
        headerShown: false,
        // tabBarInactiveBackgroundColor: "#fafafc",
        // tabBarActiveBackgroundColor: "#ebebf5",
        tabBarInactiveTintColor: "#c1bccc",
        tabBarActiveTintColor: "#32264d",
      }}
    >
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Student
                size={size}
                color={focused ? "#8257e5" : color}
                weight={focused ? "fill" : "light"}
              />
            );
          },
        }}
      />

      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Heart
              size={size}
              color={focused ? "#8257e5" : color}
              weight={focused ? "fill" : "light"}
            />
          ),
        }}
      />
    </Navigator>
  );
}
