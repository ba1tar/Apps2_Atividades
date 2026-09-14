import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



// Exercício 19


const EVENTS = [
  { id: '1', title: 'Início das Aulas', side: 'left' },
  { id: '2', title: 'Primeiro Teste', side: 'right' },
  { id: '3', title: 'Primeira Prova', side: 'left' },
];

export default function Exercicio19() {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      {EVENTS.map((event) => (
        <View
          key={event.id}
          style={[
            styles.eventRow,
            { flexDirection: event.side === 'left' ? 'row' : 'row-reverse' },
          ]}
        >
          <View style={styles.eventContent}>
            <Text style={[styles.eventText, { textAlign: event.side === 'left' ? 'right' : 'left' }]}>
              {event.title}
            </Text>
          </View>
          <View style={styles.dot} />
          <View style={styles.spacer} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    position: 'relative',
  },
  line: {
    position: 'absolute',
    left: '50%',
    top: 0,
    bottom: 0,
    width: 2,
    backgroundColor: '#bdc3c7',
  },
  eventRow: {
    alignItems: 'center',
    marginVertical: 16,
  },
  eventContent: {
    flex: 1,
    paddingHorizontal: 10,
  },
  eventText: {
    fontSize: 13,
  },
  dot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#800080',
  },
  spacer: {
    flex: 1,
  },
});