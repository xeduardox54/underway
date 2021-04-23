import React, { Component, useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Perfil from '../Perfil/perfil';
import Star from '../../../img/estrella16.png';
import Dolar from '../../../img/dolar128.png';
import Dialog from 'react-native-dialog';
import { IconButton, Colors } from 'react-native-paper';

const API = 'http://192.168.0.143:3000';
function Item({
  nombreCliente,
  Carga,
  DescripcionPedido,
  UbicacionDestino,
  UbicacionInicio,
  Precio,
  calificacion,
}) {
  return (
    <View style={styles.item}>
      <View style={styles.item1}>
          <Text>{Carga}</Text>
          <Text>{DescripcionPedido}</Text>
          <Text>{UbicacionDestino}</Text>
          <Text>{UbicacionInicio}</Text>
          <Text>{Precio}</Text>
          <Text>{calificacion}</Text>
      </View>
    </View>
  );
}

export default function CargasDetails({route}) {
    const item = route.params.itemObject
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../img/background.jpg')}
          style={{
            flex: 1,
            resizeMode: 'cover',
            justifyContent: 'center',
          }}>
          <Perfil foto={item.foto} nombre={item.nombreCliente}/>
          <View style={styles.flatListContainer}>
              <Item 
                Carga={item.Carga}
                DescripcionPedido={item.DescripcionPedido}
                UbicacionDestino={item.UbicacionDestino}
                UbicacionInicio={item.UbicacionInicio}
                Precio={item.Precio}
                calificacion={item.calificacion}
              />
          </View>
        </ImageBackground>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    margin: 15,
    borderRadius: 20 / 2,
    height: '70%',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'skyblue',
    padding: 20,
    marginVertical: 6,
    marginHorizontal: 12,
    borderRadius: 20,
  },
  title: {
    fontSize: 25,
  },
  opciones: {
    textAlign: 'right',
    fontSize: 20,
  },
  image1: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(34,34,34,0.75)',
  },
  item: {
    flexDirection: 'column',
    marginHorizontal: 5,
  },
  item1: {
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    flexDirection: 'column',
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 20,
    color: 'white',
  },
  resumen: {
    fontSize: 12,
    paddingLeft: 10,
    paddingRight: 5,
    paddingBottom: 1,
    paddingTop: 0,
    textAlign: 'justify',
    height: 15,
    width: 270,
    color: 'white',
  },
  precio: {
    fontSize: 12,
    paddingLeft: 10,
    paddingRight: 5,
    paddingBottom: 1,
    paddingTop: 0,
    textAlign: 'justify',
    height: 15,
    width: 270,
    color: '#00FF00',
    fontWeight: 'bold',
  },
  detalle: {
    fontSize: 8,
    marginTop: 2,
    color: 'white',
    textAlign: 'center',
  },
  formSubmit: {
    marginHorizontal: 20,
    backgroundColor: '#000',
    padding: 10,
  },
  formSubmitText: {
    color: '#fff',
    textAlign: 'center',
  },
});
