// Exemplo 3 
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import Constants from 'expo-constants';

if (!Device.isDevice) return;
const projectId = Constants.expoConfig?.extra?.eas?.projectId;
const { data: token } = await Notifications.getExpoPushTokenAsync({ projectId });
// token = "ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]"