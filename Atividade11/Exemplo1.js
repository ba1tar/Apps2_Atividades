// Exemplo 1
function Configuracoes() {
const [notif, trocarNotif] = useToggle(true);
const [aviao, trocarAviao] = useToggle();
return (
<View>
<Switch value={notif} onValueChange={trocarNotif} />
<Switch value={aviao} onValueChange={trocarAviao} />
</View>
);
}
