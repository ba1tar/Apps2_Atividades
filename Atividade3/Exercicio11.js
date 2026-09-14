import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



// Exercício 11


export default function Exercicio11() {
  const icons = ['🏠', '🔍', '👤'];
  return (
    <View style={styles.container}>
      {icons.map((icon, index) => (
        <View key={index} style={styles.iconWrapper}>
          <Text style={styles.icone}>{icon}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ecf0f1',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  iconWrapper: {
    padding: 10,
  },
  icone: {
    fontSize: 24,
  },
});