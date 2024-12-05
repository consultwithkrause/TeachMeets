import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExpertiseScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expertise Screen</Text>
      <Text style={styles.description}>This is the expertise screen where you can showcase your skills and knowledge.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
});

export default ExpertiseScreen;
