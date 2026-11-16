import { useState } from 'react';

export function useToggle(inicial = false) {
  const [valor, setValor] = useState(inicial);
  const alternar = () => setValor(v => !v);
  
  return [valor, alternar]; // devolve array, igual ao useState
}

// Exemplo 1

function Configuracoes() {
  const [notif, trocarNotif] = useToggle(true);
  const [aviao, trocarAviao] = useToggle();

  return (
    <View>
      <Switch 
        value={notif} 
        onValueChange={trocarNotif} 
      />
      <Switch 
        value={aviao} 
        onValueChange={trocarAviao} 
      />
    </View>
  );
}