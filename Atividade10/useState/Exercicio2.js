import { useState } from 'react'; 
import { View, Text, TextInput } from 'react-native'; 

// Exercício 2

export default function App() { 
  const [nome, setNome] = useState(''); 

  return ( 
    <View> 
      <TextInput onChangeText={setNome} /> 
      <Text>Olá, {nome}!</Text> 
    </View> 
  );
}