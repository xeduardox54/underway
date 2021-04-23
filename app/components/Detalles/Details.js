import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { Rating } from 'react-native-ratings';

const image = {
  uri:
    'https://images.unsplash.com/photo-1504349730616-7b406f51abfc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
};

export default class Details extends Component {
  render() {
    const { params } = this.props.route;
    return (
      <ImageBackground
        source={{ uri: params.itemObject.carga }}
        style={styles.image}>
        <View style={{ backgroundColor: '#E7E7E7' }}>
          <Text style={styles.nom}>{params.itemObject.Carga}</Text>
        </View>
        <View style={styles.container}>
          <View
            style={{
              backgroundColor: 'white',
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              marginTop: 350,
              height: 400,
            }}>
            <View style={{ paddingTop: 5, alignItems: 'center' }}>
              <Image
                source={{ uri: params.itemObject.foto }}
                style={{
                  height: 140,
                  width: 140,
                  borderRadius: 100,
                  borderWidth: 4,
                  borderColor: '#29BEFF',
                }}
              />
              <Text style={styles.title}>
                {params.itemObject.nombreCliente}
              </Text>
              <Rating
                type="custom"
                ratingColor="#EBFF29"
                ratingBackgroundColor="#c8c7c8"
                ratingCount={5}
                imageSize={30}
                onFinishRating={params.itemObject.calificacion}
                style={{ paddingVertical: 10 }}
              />
            </View>
            <Text style={{ paddingStart: 10, fontSize: 13 }}>
              {params.itemObject.DescripcionPedido}
            </Text>
            <Text style={{ paddingStart: 10, fontSize: 13 }}>
              Partida: {params.itemObject.UbicacionInicio} - Destino:{' '}
              {params.itemObject.UbicacionDestino}
            </Text>
            <Text style={{ paddingStart: 10, fontSize: 13 }}>
              PEN {params.itemObject.Precio}
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  image1: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(34,34,34,0.75)',
  },
  title: {
    fontWeight: 'bold',
    flexDirection: 'column',
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 30,
    color: '#00B1FF',
    textAlign: 'center',
  },
  nom: {
    fontWeight: 'bold',
    flexDirection: 'column',
    paddingTop: 1,
    paddingLeft: 10,
    fontSize: 20,
    color: '#00B1FF',
    textAlign: 'center',
  },
  descripcion: {
    flexDirection: 'column',
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 15,
    color: 'black',
    textAlign: 'justify',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    height: 415,
    justifyContent: 'center',
    backgroundColor: 'rgba(34,34,34,0.75)',
  },
});
