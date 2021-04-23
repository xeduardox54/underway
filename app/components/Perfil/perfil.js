import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { color } from 'react-native-reanimated';

export default function Perfil() {
  return (
    <View style={styles.Top}>
      <Image
        source={{
          uri:
            'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/08/fotos-perfil-whatsapp_16.jpg?itok=fl2H3Opv',
        }}
        style={styles.image}
      />
      <Text style={styles.usuario}>Nombre_Usuario</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Top: {
    height: 70,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    padding: 20,
    marginVertical: 6,
    marginHorizontal: 12,
    borderRadius: 20,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 400 / 2,
    borderWidth: 3,
    borderColor: 'gray',
  },
  usuario: {
    color: 'white',
    marginHorizontal: 10,
    fontSize: 25,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowRadius: 8,
  },
});
