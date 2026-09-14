import React from 'react';
import { View, StyleSheet } from 'react-native';



// Exercício 3


export default function Exercicio3() {
  return (
    <View style={styles.container}>
      <View style={styles.quadrado} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quadrado: {
    width: 150,
    height: 150,
    backgroundColor: 'red',
  },
});