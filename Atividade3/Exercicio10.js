import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';



// Exercício 10


export default function Exercicio10() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Meu App</Text>
      </View>
      <ScrollView style={styles.content}>
        {Array.from({ length: 20 }).map((_, i) => (
          <Text key={i} style={styles.item}>Item {i + 1}</Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    backgroundColor: '#800080',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#c5c0c0',
  },
})