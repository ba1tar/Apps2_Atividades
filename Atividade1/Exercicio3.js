import { View, Text, Image } from 'react-native';

//Exercício 3

export default function App() {
return (
<View >
<Text>Texto no app</Text>
<Image source={require('./foto.jpg')} />
</View>
);
}