import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CalendarScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Calendar</Text>
      </View>
      <View style={styles.calendar}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.calendarImage} />
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height: 80,
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  calendar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  calendarImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain'
  }
});
export default CalendarScreen;