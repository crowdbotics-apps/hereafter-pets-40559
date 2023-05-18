import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const CameraOptionsScreen = () => {
  const [image, setImage] = useState('https://tinyurl.com/42evm3m3');

  const handleChoosePhoto = () => {// code to choose photo from local storage
  };

  const handleTakePhoto = () => {// code to take photo with phone camera
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Choose an option to upload a photo</Text>
      <TouchableOpacity style={styles.button} onPress={handleChoosePhoto}>
        <Image source={{
        uri: image
      }} style={styles.image} />
        <Text style={styles.buttonText}>Choose from Library</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleTakePhoto}>
        <Image source={{
        uri: image
      }} style={styles.image} />
        <Text style={styles.buttonText}>Take a Photo</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: '80%'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10
  },
  image: {
    width: 30,
    height: 30
  }
});
export default CameraOptionsScreen;