import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';

const UserProfileScreen = () => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [petType, setPetType] = useState('');
  return <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
        <TextInput style={styles.input} placeholder="Breed" value={breed} onChangeText={setBreed} />
        <View style={styles.dropdownContainer}>
          <Text style={styles.dropdownLabel}>Type of Pet:</Text>
          <TouchableOpacity style={styles.dropdownButton} onPress={() => console.log('Dropdown pressed')}>
            <Text style={styles.dropdownButtonText}>{petType || 'Select'}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.saveButton} onPress={() => console.log('Save pressed')}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  dropdownLabel: {
    marginRight: 10
  },
  dropdownButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    flex: 1
  },
  dropdownButtonText: {
    color: '#555'
  },
  saveButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
export default UserProfileScreen;