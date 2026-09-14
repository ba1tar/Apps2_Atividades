import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



// Exercício 15


export default function Exercicio15() {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.avatar} />
        <Text style={styles.name}>Kevin Steve</Text>
      </View>
      <Text style={styles.postText}>Fazendo uma música nova!</Text>
      <View style={styles.postImage} />
      <View style={styles.actions}>
        <Text style={styles.actionText}>❤️ Curtir</Text>
        <Text style={styles.actionText}>💬 Comentar</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    margin: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#95a5a6',
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  postText: {
    fontSize: 14,
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 180,
    backgroundColor: '#dfe6e9',
    borderRadius: 8,
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ecf0f1',
    paddingTop: 8,
  },
  actionText: {
    fontSize: 14,
    color: '#636e72',
  },
});