// Exemplo 6 
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, Image, View } from 'react-native';

export default function Camera() {
  const [permission, requestPermission] = useCameraPermissions();
  const [foto, setFoto] = useState(null);
  const camera = useRef(null);

  if (!permission?.granted)
    return <Button title="Permitir câmera" onPress={requestPermission} />;

  async function tirarFoto() {
    const { uri } = await camera.current.takePictureAsync({ quality: 0.7 });
    setFoto(uri);
  }

  return (
    <View style={{ flex: 1 }}>
      <CameraView ref={camera} style={{ flex: 1 }} facing="back" />
      <Button title="Tirar foto" onPress={tirarFoto} />
      {foto && <Image source={{ uri: foto }} style={{ height: 160 }} />}
    </View>
  );
}