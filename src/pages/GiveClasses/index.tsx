import { ImageBackground, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import giveClassesBgImage from "../../assets/images/give-classes-background.png";
import { styles } from "./styles";

export function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

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

      <TouchableOpacity onPress={handleNavigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Vamos lá</Text>
      </TouchableOpacity>
    </View>
  );
}
