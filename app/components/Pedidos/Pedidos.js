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
import Star from '../../../img/estrella16.png';
import Dolar from '../../../img/dolar128.png';
import Map from '../../../img/MAPA.png';
import Dialog from 'react-native-dialog';
import { IconButton, Colors } from 'react-native-paper';
const image = {
  uri:
    'https://images.unsplash.com/photo-1506306460327-3164753b74c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
};

function Item({
  nombreCliente,
  Carga,
  foto,
  DescripcionPedido,
  UbicacionDestino,
  UbicacionInicio,
  Precio,
  calificacion,
}) {
  const [visible, setVisible] = useState(false);

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleDelete = () => {
    setVisible(false);
  };
  return (
    <View style={styles.item}>
      <View style={styles.item1}>
        <View style={{ paddingTop: 15 }}>
          <Image
            source={{ uri: foto }}
            style={{
              height: 55,
              width: 60,
              borderRadius: 40,
              borderWidth: 4,
              borderColor: '#FFf',
            }}
          />
          <Text style={styles.detalle}>{nombreCliente}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Image source={Star} style={{ marginStart: 8 }} />
            <Text style={{ marginStart: 5, color: '#fff', fontWeight: 'bold' }}>
              {calificacion}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.title}>{Carga}</Text>
          <Text numberOfLines={3} style={styles.resumen}>
            {DescripcionPedido}
          </Text>
          <Text style={styles.resumen}>
            Desde: {UbicacionInicio} - Hasta: {UbicacionDestino}
          </Text>
          <Text style={styles.precio}>PEN: {Precio} </Text>
        </View>
        <IconButton
          style={{ marginTop: 20, marginStart: 15 }}
          icon={Dolar}
          color={Colors.green500}
          size={35}
          onPress={showDialog}
        />
        <Dialog.Container visible={visible}>
          <Dialog.Title style={{ textAlign: 'center' }}>{Carga}</Dialog.Title>
          <Dialog.Description>{DescripcionPedido}</Dialog.Description>
          <Dialog.Description>S/.{Precio}</Dialog.Description>
          <Dialog.Description>Ingrese su Oferta</Dialog.Description>
          <Dialog.Button label="Cancelar" onPress={handleCancel} />
          <Dialog.Button label="Enviar Oferta" onPress={handleDelete} />
          <Dialog.Input />
        </Dialog.Container>
      </View>
    </View>
  );
}

export default class Pedidos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textValue: 0,
      count: 0,
      items: [],
      error: null,
    };
  }

  onPress = () => {
    this.setState({ message: '' });
    this.props.navigation.navigate('Mapas');
  };

  async componentDidMount() {
    await fetch('http://192.168.50.39:3000/pedidos')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            items: result,
          });
        },
        error => {
          this.setState({
            error: error,
          });
        },
      );
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground source={image} style={styles.image1}>
        <View style={styles.container}>
          <FlatList
            data={this.state.items.length > 0 ? this.state.items : []}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => navigate('Details', { itemObject: item })}>
                  <Item
                    nombreCliente={item.nombreCliente}
                    Carga={item.Carga}
                    foto={item.foto}
                    DescripcionPedido={item.DescripcionPedido}
                    UbicacionInicio={item.UbicacionInicio}
                    UbicacionDestino={item.UbicacionDestino}
                    Precio={item.Precio}
                    calificacion={item.calificacion}
                  />
                </TouchableOpacity>
              );
            }}
            keyExtractor={item => item.id}
          />
          <View
            style={{
              backgroundColor: 'rgba(34,34,34,0.75)',
              height: 60,
              alignItems: 'center',
            }}>
            <IconButton
              style={{ marginStart: 10, height: 40 }}
              icon={Map}
              color={Colors.red500}
              size={35}
              onPress={this.onPress}
            />
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
});
