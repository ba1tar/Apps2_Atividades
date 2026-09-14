import React from 'react';
import { View, StyleSheet } from 'react-native';



// Exercício 4


export default function Exercicio4() {
  return (
    <View style={styles.container}>
      <View style={[styles.quadrado, { backgroundColor: '#e74c3c' }]} />
      <View style={[styles.quadrado, { backgroundColor: '#2ecc71' }]} />
      <View style={[styles.quadrado, { backgroundColor: '#3498db' }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  quadrado: {
    width: 80,
    height: 80,
  },
});