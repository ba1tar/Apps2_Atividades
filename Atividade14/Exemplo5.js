// Exemplo 5 
import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import { router } from 'expo-router';

export function useNotificacoes() {
  useEffect(() => {
    const recebida = Notifications.addNotificationReceivedListener(
      (n) => console.log('Chegou:', n.request.content.title)
    );
    const tocada = Notifications.addNotificationResponseReceivedListener(
      (resposta) => {
        const { url } = resposta.notification.request.content.data;
        if (url) router.push(url); // abre a tela certa
      }
    );
    return () => { recebida.remove(); tocada.remove(); }; // limpeza
  }, []);
}