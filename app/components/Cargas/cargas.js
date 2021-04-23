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
const ListEmpty = () => {
  return (
    <View style={styles.item}>
      <Text style={{ textAlign: 'center', color: 'white', fontSize: 25 }}>
        Sin cargas publicadas
      </Text>
    </View>
  );
};

export default class Cargas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textValue: 0,
      count: 0,
      items: [],
      error: null,
    };
  }
  async componentDidMount() {
    await fetch(`${API}/pedidos`)
      .then(res => res.json())
      .then(
        result => {
          console.warn('result', result);
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
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../img/background.jpg')}
          style={{
            flex: 1,
            resizeMode: 'cover',
            justifyContent: 'center',
          }}>
          <Perfil foto={'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/08/fotos-perfil-whatsapp_16.jpg?itok=fl2H3Opv'} nombre={""}/>
          <View style={styles.flatListContainer}>
            <FlatList
              data={this.state.items.length > 0 ? this.state.items : []}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity 
                    onPress={
                      ()=>this.props.navigation.navigate(
                        'Details',
                        {itemObject:item}
                        )
                    }>
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
              ListEmptyComponent={ListEmpty}
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Formulario')}
              style={styles.formSubmit}
              activeOpacity={0.8}>
              <Text style={styles.formSubmitText}>Publicar</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
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
