// contexts/AuthContext.js
import { createContext, useContext, useState } from 'react'; 

// Exercício 15

const AuthContext = createContext(); 

export function AuthProvider({ children }) { 
  const [usuario, setUsuario] = useState(null); 
  const login = (nome) => setUsuario({ nome }); 
  const logout = () => setUsuario(null); 

  return ( 
    <AuthContext.Provider value={{ usuario, login, logout }}> 
      {children} 
    </AuthContext.Provider> 
  ); 
} 

export function useAuth() { 
  const ctx = useContext(AuthContext); 
  if (!ctx) throw new Error('useAuth deve ser usado dentro de AuthProvider'); 
  return ctx; 
} 

// screens/LoginScreen.js
import { useState } from 'react'; 
import { View, TextInput, Button } from 'react-native'; 
import { useAuth } from '../contexts/AuthContext'; 

export default function LoginScreen() { 
  const { login } = useAuth(); 
  const [nome, setNome] = useState(''); 

  return ( 
    <View> 
      <TextInput value={nome} onChangeText={setNome} /> 
      <Button title="Entrar" onPress={() => login(nome)} /> 
    </View> 
  ); 
} 

// screens/HomeScreen.js
import { View, Text, Button } from 'react-native'; 
import { useAuth } from '../contexts/AuthContext'; 

export default function HomeScreen() { 
  const { usuario, logout } = useAuth(); 

  return ( 
    <View> 
      <Text>Bem-vindo, {usuario.nome}</Text> 
      <Button title="Sair" onPress={logout} /> 
    </View> 
  ); 
} 

// App.js
import { AuthProvider, useAuth } from './contexts/AuthContext'; 
import LoginScreen from './screens/LoginScreen'; 
import HomeScreen from './screens/HomeScreen'; 

function Rotas() { 
  const { usuario } = useAuth(); 
  return usuario ? <HomeScreen /> : <LoginScreen />; 
} 

export default function App() { 
  return ( 
    <AuthProvider> 
      <Rotas /> 
    </AuthProvider> 
  ); 
}