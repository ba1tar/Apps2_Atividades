function Configuracoes() {
  const [notif, trocarNotif] = useToggle(true);
  const [aviao, trocarAviao] = useToggle();

// Exemplo 1

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