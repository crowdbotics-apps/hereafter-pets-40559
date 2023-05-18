import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const TermsAndConditionsScreen = () => {
  return <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Terms and Conditions</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Introduction</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod libero, ac malesuada velit bibendum vel. Sed euismod euismod
          libero, ac malesuada velit bibendum vel.
        </Text>
        <Text style={styles.title}>Acceptance of Terms</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod libero, ac malesuada velit bibendum vel. Sed euismod euismod
          libero, ac malesuada velit bibendum vel.
        </Text>
        <Text style={styles.title}>Intellectual Property</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod libero, ac malesuada velit bibendum vel. Sed euismod euismod
          libero, ac malesuada velit bibendum vel.
        </Text>
        <Text style={styles.title}>Disclaimer</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod libero, ac malesuada velit bibendum vel. Sed euismod euismod
          libero, ac malesuada velit bibendum vel.
        </Text>
        <Text style={styles.title}>Governing Law</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod libero, ac malesuada velit bibendum vel. Sed euismod euismod
          libero, ac malesuada velit bibendum vel.
        </Text>
        <Text style={styles.title}>Contact Us</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod libero, ac malesuada velit bibendum vel. Sed euismod euismod
          libero, ac malesuada velit bibendum vel.
        </Text>
      </View>
      <View style={styles.footer}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.logo} />
        <Text style={styles.footerText}>© 2021 Terms and Conditions</Text>
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
  text: {
    fontSize: 16,
    marginBottom: 20
  },
  footer: {
    backgroundColor: '#f2f2f2',
    padding: 20,
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
export default TermsAndConditionsScreen;