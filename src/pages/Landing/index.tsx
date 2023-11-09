import { View, Image } from "react-native";
import landingImg from "../../assets/images/landing.png";
import { styles } from "./styles";

export function Landing() {
  return (
    <View style={styles.container}>
      <Image source={landingImg} />
    </View>
  );
}
