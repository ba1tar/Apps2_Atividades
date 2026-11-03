import { Button, TouchableOpacity, StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native';


// Exemplos de useEffect

// Exemplo 1 Buscar dados de uma API

// function ListaUsuarios() {
// const [usuarios, setUsuarios] = useState([]);
// const [carregando, setCarregando] = useState(true);
// useEffect(() => {
// async function carregar() {
// const resposta = await fetch(URL_API);
// const dados = await resposta.json();
// setUsuarios(dados);
// setCarregando(false);
// }
// carregar();
// }, []);
// if (carregando) return <ActivityIndicator />;
// return <Lista dados={usuarios}

// Exemplo 2 Efeito que depende de um valor

// function DetalhePost({ postId }) {
// const [post, setPost] = useState(null);
// useEffect(() => {
// setPost(null); // limpa enquanto carrega
// fetch(`${API}/posts/${postId}`)
// .then(r => r.json())
// .then(setPost);
// }, [postId]); // roda de novo se postId mudar
// if (!post) return <ActivityIndicator />;
// return <Text>{post.title}</Text>;
// }

// Exemplo 3 Função de limpeza (cleanup)

// function Cronometro() {
// const [segundos, setSegundos] = useState(0);
// useEffect(() => {
// const id = setInterval(() => {
// setSegundos(s => s + 1);
// }, 1000);
// return () => clearInterval(id); // limpeza
// }, []);
// return <Text>{segundos}s</Text>;
// }
// // Mesmo padrão com listeners:
// // const sub = Keyboard.addListener(...);
// // return () => sub.remove();

// Exemplo 4 Busca com debounce

// function BuscaProdutos() {
// const [termo, setTermo] = useState('');
// const [resultados, setResultados] = useState([]);
// useEffect(() => {
// if (termo.length < 3) return;
// const timer = setTimeout(async () => {
// const r = await fetch(`${API}/search?q=${termo}`);
// const dados = await r.json();
// setResultados(dados.products);
// }, 500);
// return () => clearTimeout(timer); // cancela
// }, [termo]);
// return <TextInput value={termo} onChangeText={setTermo} />;
// }    
