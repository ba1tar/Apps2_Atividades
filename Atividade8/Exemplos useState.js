import { Button, TouchableOpacity, StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native';


// Exemplos de useState

// Exemplo 1 Contador

// export default function Contador() {
// const [contador, setContador] = useState(0);
// return (
// <View style={styles.container}>
// <Text style={styles.numero}>{contador}</Text>
// <Button title="+1"
// onPress={() => setContador(contador + 1)} />
// <Button title="-1"
// onPress={() => setContador(contador - 1)} />
// <Button title="Zerar"
// onPress={() => setContador(0)} />
// </View>
// );
// }

// Exemplo 2 TextInput controlado

// export default function Saudacao() {
// const [nome, setNome] = useState('');
// return (
// <View style={{ padding: 20 }}>
// <TextInput
// placeholder="Digite seu nome"
// value={nome}
// onChangeText={setNome}
// />
// <Text>
// {nome ? `Olá, ${nome}!` : 'Digite algo acima'}
// </Text>
// </View>
// );
// }

// Exemplo 3 Estado com objetos

// const [usuario, setUsuario] = useState({
// nome: '', email: '', idade: 0,
// });
// // ERRADO: muta o objeto, a tela não atualiza
// usuario.nome = 'Ana';
// setUsuario(usuario);
// // CERTO: copia tudo e troca só um campo
// setUsuario({ ...usuario, nome: 'Ana' });
// // Um handler para o formulário inteiro
// function atualizar(campo, valor) {
// setUsuario(ant => ({ ...ant, [campo]: valor }));
// }

// Exemplo 3 Estado com arrays

// const [tarefas, setTarefas] = useState([]);
// const adicionar = (texto) =>
// setTarefas(ant => [
// ...ant, { id: Date.now().toString(), texto },
// ]);
// const remover = (id) =>
// setTarefas(ant => ant.filter(t => t.id !== id));
// const alternar = (id) =>
// setTarefas(ant => ant.map(t =>
// t.id === id ? { ...t, feita: !t.feita } : t
// ));


