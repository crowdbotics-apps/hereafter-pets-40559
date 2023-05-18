import { Pressable } from "react-native";
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
const items = [{
  id: 1,
  name: 'Item 1',
  price: '$10',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: 2,
  name: 'Item 2',
  price: '$20',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: 3,
  name: 'Item 3',
  price: '$30',
  image: 'https://tinyurl.com/42evm3m3'
}];

const CatalogScreen = () => {
  return <View style={styles.container}>
      {items.map(item => <View key={item.id} style={styles.itemContainer}>
          <Image source={{
        uri: item.image
      }} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price}</Text>
          <TouchableOpacity style={styles.button}>
            <Pressable><Text style={styles.buttonText}>See Details</Text></Pressable>
          </TouchableOpacity>
        </View>)}
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10
  },
  itemContainer: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  price: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 14
  }
});
export default CatalogScreen;