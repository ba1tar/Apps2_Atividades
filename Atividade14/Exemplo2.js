// Exemplo 2
import * as Notifications from 'expo-notifications';
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true, shouldShowList: true,
    shouldPlaySound: true, shouldSetBadge: false,
  }),
});
export async function agendarLembrete() {
  await Notifications.setNotificationChannelAsync('default', {
    name: 'Lembretes',
    importance: Notifications.AndroidImportance.HIGH,
  });
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== 'granted') return;

  await Notifications.scheduleNotificationAsync({
    content: { title: 'Hora de estudar', body: 'Revise o módulo 2.' },
    trigger: { type: 'timeInterval', seconds: 5 },
  });
}