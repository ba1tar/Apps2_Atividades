import React from 'react';
import { View, StyleSheet } from 'react-native';



// Exercício 5


export default function Exercicio5() {
  return (
    <View style={styles.container}>
      <View style={[styles.quadrados, { height: 50, backgroundColor: '#e74c3c' }]} />
      <View style={[styles.quadrados, { height: 100, backgroundColor: '#2ecc71' }]} />
      <View style={[styles.quadrados, { height: 75, backgroundColor: '#3498db' }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 40,
  },
  quadrados: {
    width: 100,
  },
});