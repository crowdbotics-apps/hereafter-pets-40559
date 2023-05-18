import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.profileImage} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.petImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.services}>
        <Text style={styles.servicesTitle}>Services Available</Text>
        <View style={styles.servicesList}>
          <TouchableOpacity style={styles.service}>
            <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={styles.serviceImage} />
            <Text style={styles.serviceTitle}>Service 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.service}>
            <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={styles.serviceImage} />
            <Text style={styles.serviceTitle}>Service 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.service}>
            <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={styles.serviceImage} />
            <Text style={styles.serviceTitle}>Service 3</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.catalogButton}>
          <Text style={styles.catalogButtonText}>Catalog</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sideMenu}>
        <TouchableOpacity style={styles.sideMenuItem}>
          <Text style={styles.sideMenuItemText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sideMenuItem}>
          <Text style={styles.sideMenuItemText}>Home Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sideMenuItem}>
          <Text style={styles.sideMenuItemText}>Schedule Service</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sideMenuItem}>
          <Text style={styles.sideMenuItemText}>Product List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sideMenuItem}>
          <Text style={styles.sideMenuItemText}>Memorial Wall</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sideMenuItem}>
          <Text style={styles.sideMenuItemText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sideMenuItem}>
          <Text style={styles.sideMenuItemText}>Send Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sideMenuItem}>
          <Text style={styles.sideMenuItemText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  petImage: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  services: {
    flex: 1,
    justifyContent: 'center'
  },
  servicesTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  servicesList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  service: {
    alignItems: 'center'
  },
  serviceImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  catalogButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'center'
  },
  catalogButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  sideMenu: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: '70%',
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  },
  sideMenuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: 641,
    height: 60
  },
  sideMenuItemText: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default HomeScreen;