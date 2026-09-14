import React from 'react';
import { View, StyleSheet } from 'react-native';



// Exercício 6


export default function Exercicio6() {
  const colors = ['#0000FF', '#A020F0', '#0000FF', '#A020F0'];
  return (
    <View style={styles.container}>
      {colors.map((color, index) => (
        <View key={index} style={[styles.quadrado, {backgroundColor: color}]}/>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
  },
  quadrado: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
});