import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';



// Exercício 8


export default function Exercicio8() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar} />
      <Text style={styles.nome}>Kevin Steve</Text>
      <Text style={styles.bio}>Vocaslista e multinstrumentalista da banda Tame Impala</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#9e9393',
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  bio: {
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'center',
  },
});