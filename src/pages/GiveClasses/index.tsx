import { View, ImageBackground } from "react-native";
import giveClassesBgImage from "../../assets/images/give-classes-background.png";
import { styles } from "./styles";

export function GiveClasesses() {
  return (
    <View style={styles.container}>
      <ImageBackground source={giveClassesBgImage}></ImageBackground>
    </View>
  );
}
