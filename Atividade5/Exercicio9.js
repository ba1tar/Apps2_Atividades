import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

// Exercício 9

export default function App() {
  const [mensagem, setMensagem] = useState(false);


  return (
    <View>
      <Text>
        {mensagem}
      </Text>
      <Button title="Mostrar" onPress={() => {mensagem == "" ? setMensagem("Olá, Mundo!") : setMensagem("")}}/>
    </View>
  );
}
