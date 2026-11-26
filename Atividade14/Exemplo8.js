// Exemplo 8
import { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Linking, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function Mapa() {
  const [posicao, setPosicao] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErro('Precisamos da sua localização para mostrar o mapa.');
          return;
        }
        const { coords } = await Location.getCurrentPositionAsync();
        setPosicao({ latitude: coords.latitude, longitude: coords.longitude });
      } catch (e) {
        setErro('Não foi possível obter sua posição. Verifique se o GPS está ligado.');
      }
    })();
  }, []);

  if (erro)
    return (
      <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
        <Text>{erro}</Text>
        <Button title="Abrir ajustes" onPress={() => Linking.openSettings()} />
      </View>
    );

  if (!posicao) return <ActivityIndicator />;

  return (
    <MapView
      style={{ flex: 1 }}
      showsUserLocation
      initialRegion={{ ...posicao, latitudeDelta: 0.01, longitudeDelta: 0.01 }}
    >
      <Marker coordinate={posicao} title="Você está aqui" />
    </MapView>
  );
}