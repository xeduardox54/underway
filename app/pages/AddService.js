import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Truck from '../../img/form-image.jpg';
import { ServiceForm } from '../components/ServiceForm';

export const AddService = ({navigation,route}) => {
  // Datos del formulario. values es el JSON
  const onSubmit = values => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Formulario" }],
    });
    route.params.datos.value.push(values)
    console.log(route.params.datos.value);
    navigation.popToTop()
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={Truck} style={styles.image} />
      </View>
      <View style={styles.formContainer}>
        <ServiceForm onSubmit={onSubmit} />
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
