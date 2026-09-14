import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';



// Exercício 20


const FIELDS = ['Nome', 'Senha', 'Email'];

export default function Exercicio20() {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        {FIELDS.map((label) => (
          <View key={label} style={styles.row}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} />
          </View>
        ))}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Container pai para preencher a tela inteira e centralizar o formulário
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  // Largura definida para evitar que o formulário estique demais
  container: {
    width: '100%',
    maxWidth: 400,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    width: 90,
    textAlign: 'right',
    marginRight: 12,
    fontSize: 14,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#dcdde1',
    borderRadius: 6,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#3498db',
    height: 44,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});