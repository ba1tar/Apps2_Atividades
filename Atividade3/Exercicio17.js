import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';



// Exercício 17


const METRICS = [
  { icon: '📦', value: '240', label: 'Pedidos' },
  { icon: '💰', value: 'R$ 14.0k', label: 'Vendas' },
  { icon: '⭐', value: '2,8', label: 'Avaliação' },
  { icon: '👥', value: '2.0k', label: 'Usuários' },
];

export default function Exercicio17() {
  return (
    <View style={styles.container}>
      {METRICS.map((m, index) => (
        <View key={index} style={styles.cardWrapper}>
          <View style={styles.card}>
            <Text style={styles.icon}>{m.icon}</Text>
            <Text style={styles.value}>{m.value}</Text>
            <Text style={styles.label}>{m.label}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
    backgroundColor: '#f5f6fa',
  },
  cardWrapper: {
    width: '50%',
    padding: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    height: 120,
    justifyContent: 'center',
  },
  icon: {
    fontSize: 24,
    marginBottom: 6,
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 12,
    color: '#7f8c8d',
  },
});