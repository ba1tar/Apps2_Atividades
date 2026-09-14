import React from 'react';
import { View, StyleSheet } from 'react-native';



// Exercício 2
export default function Exercicio2() {
  return (
    <View style={styles.container}>
      <View style={[styles.quadrado, { backgroundColor: 'red' }]} />
      <View style={[styles.quadrado, { backgroundColor: 'green' }]} />
      <View style={[styles.quadrado, { backgroundColor: 'blue' }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  quadrado: {
    width: 100,
    height: 100,
  },
});