import React from 'react';
import { View, StyleSheet } from 'react-native';



// Exercício 14


export default function Exercicio14() {
  return (
    <View style={styles.container}>
      {Array.from({ length: 9 }).map((_, i) => (
        <View key={i} style={styles.photo} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  photo: {
    width: '33.33%',
    aspectRatio: 1,
    backgroundColor: '#bdc3c7',
    borderWidth: 0.5,
    borderColor: '#fff',
  },
});