import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, Text, StyleSheet, Image } from 'react-native';

const DeceasedPetDetailsScreen = () => {
  const navigation = useNavigation();
  return <Pressable onPress={() => {
    navigation.navigate("ScreenAI10");
  }}><View style={styles.container}>
      <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
      <Text style={styles.petName}>Fluffy</Text>
      <Text style={styles.petDetails}>
        Age: 5 years {'\n'}
        Breed: Persian {'\n'}
        Color: White {'\n'}
        Date of passing: 01/01/2022 {'\n'}
        Cause of passing: Illness
      </Text>
    </View></Pressable>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20
  },
  petName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  petDetails: {
    fontSize: 18,
    textAlign: 'center'
  }
});
export default DeceasedPetDetailsScreen;