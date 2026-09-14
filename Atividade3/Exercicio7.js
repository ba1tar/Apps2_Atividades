import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';



// Exercício 7


export default function Exercicio7() {
  const items = ['Início', 'Buscar', 'Perfil', 'Configuracão'];
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <TouchableOpacity key={index} style={styles.item}>
          <Text style={styles.texto}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 80,
    backgroundColor: '#A020F0',
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    borderRightWidth: 1,
    borderRightColor: '#550808',
  },
  texto: {
    color: '#faf7f7',
    fontSize: 14,
  },
});