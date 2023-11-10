import { View, ImageBackground, Text, TouchableOpacity } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import giveClassesBgImage from "../../assets/images/give-classes-background.png";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function GiveClasesses() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveClassesBgImage}
        style={styles.content}
      >
        <Text style={styles.title}>Quer dar aulas?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Text>
      </ImageBackground>

      <TouchableOpacity style={styles.okButton}>
        <Text style={styles.okButtonText}>Vamos lá</Text>
      </TouchableOpacity>
    </View>
  );
}
