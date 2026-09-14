import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';



// Exercício 16


const DATA = [
  { id: '1', name: 'Teclado', price: 'R$ 499,90' },
  { id: '2', name: 'Mouse Gamer', price: 'R$ 800,00' },
  { id: '3', name: 'Mousepad', price: 'R$ 140,90' },
];

export default function Exercicio16() {
  return (
    <FlatList
      data={DATA}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <View style={styles.photo} />
          <View style={styles.info}>
            <Text style={styles.name}>{item.name}</Text>
          </View>s
          <Text style={styles.price}>{item.price}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#dfe6e9',
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 15,
    fontWeight: '500',
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#27ae60',
  },
});