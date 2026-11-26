// EXEMPLO 7 
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function LeitorQR() {
  const [permission, requestPermission] = useCameraPermissions();
  const [lido, setLido] = useState(null);

  if (!permission?.granted)
    return <Button title="Permitir câmera" onPress={requestPermission} />;

  return (
    <View style={{ flex: 1 }}>
      <CameraView
        style={{ flex: 1 }}
        barcodeScannerSettings={{ barcodeTypes: ['qr'] }}
        onBarcodeScanned={lido ? undefined : ({ data }) => setLido(data)}
      />
      {lido && <Text>Conteúdo: {lido}</Text>}
      {lido && <Button title="Ler outro" onPress={() => setLido(null)} />}
    </View>
  );
}
