import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



// Exercício 9


export function Exercicio9() {
  return (
    <View style={styles9.container}>
      {[1, 2, 3, 4].map((n) => (
        <View key={n} style={styles9.card}>
          <Text>Card {n}</Text>
        </View>
      ))}
    </View>
  );
}
const styles9 = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },
  card: {
    width: '50%',
    height: 100,
    padding: 8,
  },
});