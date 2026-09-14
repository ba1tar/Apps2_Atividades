import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



// Exercício 12


export default function Exercicio12() {
  return (
    <View style={styles.card}>
      <View style={styles.image} />
      <Text style={styles.title}>Calça Baggy</Text>
      <Text style={styles.price}>R$ 280,00</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 180,
    borderRadius: 12,
    backgroundColor: '#fff',
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 140,
    borderRadius: 8,
    backgroundColor: '#dfe6e9',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#27ae60',
  },
});