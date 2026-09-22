import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

// Exercício 11

function Card({titulo, corFundo}) {
  const styles = StyleSheet.create({
    container: {backgroundColor: corFundo}
  })


  return (
    <View style = {styles.container}>
      <Text>{titulo}</Text>
    </View>
  );
}


export default function App() {
  return(
    <View>
      <Card titulo="Olá, Mundo!" corFundo="#4B0082"/>
    </View>
  );
}
