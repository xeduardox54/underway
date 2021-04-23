import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { color } from 'react-native-reanimated';

export default function Perfil({foto,nombre}) {
  return (
    <View style={styles.Top}>
      <Image
        source={{
          uri: foto
        }}
        style={styles.image}
      />
      <Text style={styles.usuario}>{nombre}</Text>
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
