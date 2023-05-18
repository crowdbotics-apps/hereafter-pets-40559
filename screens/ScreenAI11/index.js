import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Picker } from "react-native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [petType, setPetType] = useState("dog");

  const handleSave = () => {// handle save logic here
  };

  return <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} style={styles.petImage} />
      </View>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
        <TextInput style={styles.input} placeholder="Breed" value={breed} onChangeText={setBreed} />
        <Picker selectedValue={petType} onValueChange={itemValue => setPetType(itemValue)} style={styles.picker}>
          <Picker.Item label="Dog" value="dog" />
          <Picker.Item label="Cat" value="cat" />
          <Picker.Item label="Bird" value="bird" />
        </Picker>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Pressable onPress={() => {
          navigation.navigate("Untitled1");
        }}><Text style={styles.saveButtonText}>Save</Text></Pressable>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 50
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30
  },
  petImage: {
    width: 150,
    height: 150,
    borderRadius: 75
  },
  form: {
    flex: 1,
    justifyContent: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20
  },
  picker: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 20
  },
  saveButton: {
    backgroundColor: "#000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: "center"
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }
});
export default ProfileScreen;