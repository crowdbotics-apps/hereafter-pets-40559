import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const PrivacyPolicyScreen = () => {
  return <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Privacy Policy</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Introduction</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod libero, vel facilisis sapien. Sed euismod euismod libero, vel
          facilisis sapien.
        </Text>
        <Text style={styles.title}>Information Collection and Use</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod libero, vel facilisis sapien. Sed euismod euismod libero, vel
          facilisis sapien.
        </Text>
        <Text style={styles.title}>Log Data</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod libero, vel facilisis sapien. Sed euismod euismod libero, vel
          facilisis sapien.
        </Text>
        <Text style={styles.title}>Cookies</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod libero, vel facilisis sapien. Sed euismod euismod libero, vel
          facilisis sapien.
        </Text>
        <Text style={styles.title}>Security</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod libero, vel facilisis sapien. Sed euismod euismod libero, vel
          facilisis sapien.
        </Text>
        <Text style={styles.title}>Changes to This Privacy Policy</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod libero, vel facilisis sapien. Sed euismod euismod libero, vel
          facilisis sapien.
        </Text>
      </View>
      <View style={styles.footer}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.logo} />
        <Text style={styles.footerText}>Copyright © 2021</Text>
      </View>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#1abc9c',
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  content: {
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 20
  },
  footer: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 10
  },
  footerText: {
    fontSize: 16,
    color: '#666'
  }
});
export default PrivacyPolicyScreen;