import React from 'react';
import { Image, ScrollView, StyleSheet, ToastAndroid, View } from 'react-native';
import Truck from '../../img/form-image.jpg';
import { ServiceForm } from '../components/ServiceForm/ServiceForm';

const API = 'http://192.168.0.143:3000';

export const AddService = ({ navigation, route }) => {
  // Datos del formulario. values es el JSON
  const onSubmit = async values => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    };

    await fetch(`${API}/pedidos/`, requestOptions)
      .then(res => res.json())
      .then(
        result => {
          ToastAndroid.showWithGravityAndOffset(
            'Se agrego el servicio',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
          );
          navigation.navigate('Underway');
        },
        error => {
          ToastAndroid.showWithGravityAndOffset(
            'Algo salio mal',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
          );
        },
      );
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={Truck} style={styles.image} />
      </View>
      <View style={styles.formContainer}>
        <ScrollView>
          <ServiceForm onSubmit={onSubmit} />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    color: '#000',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  formContainer: {
    flex: 4,
  },
});
