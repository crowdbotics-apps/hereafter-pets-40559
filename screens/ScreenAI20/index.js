import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Screen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.profileImage} />
        <Text style={styles.profileName}>John Doe</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Terms and Conditions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI21");
      }}><Text style={styles.buttonText}>Change Password</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI22");
      }}><Text style={styles.buttonText}>Support/ Send Feedback</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Delete Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default Screen;