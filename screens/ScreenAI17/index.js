import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Screen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.userContainer}>
          <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.userImage} />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>John Doe</Text>
            <Text style={styles.userAddress}>123 Main St, Anytown USA</Text>
          </View>
        </View>
        <View style={styles.petContainer}>
          <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.petImage} />
          <Text style={styles.petName}>Fluffy</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI18");
        }}><Text style={styles.buttonText}>Select date and time</Text></Pressable>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between"
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20
  },
  userInfo: {
    flex: 1
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold"
  },
  userAddress: {
    fontSize: 16,
    color: "#666"
  },
  petContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  petImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20
  },
  petName: {
    fontSize: 18,
    fontWeight: "bold"
  },
  button: {
    backgroundColor: "#6C63FF",
    padding: 20,
    borderRadius: 10,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }
});
export default Screen;