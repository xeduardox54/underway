import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useInputValue } from '../hooks/useInputValue';

export const ServiceForm = ({ onSubmit }) => {
  // Campos del formulario
  const dni = useInputValue('');
  const ubicacion = useInputValue('');
  const destino = useInputValue('');
  const material = useInputValue('');
  const precio = useInputValue('');

  // Controlar el evento Press del boton
  const handlePress = () => {
    // Crear el Json con los valores del formulario
    const values = {
      dni: dni.value,
      ubicacion: ubicacion.value,
      destino: destino.value,
      material: material.value,
      precio: precio.value,
    };

    // Enviar el JSON al componente padre
    onSubmit(values);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formTitleContainer}>
        <Text style={styles.formTitle}>Formulario de Servicio</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.formInputContainer}>
          <Text style={styles.formInputLabel}>DNI</Text>
          <TextInput
            onChangeText={dni.onChange}
            value={dni.value}
            style={styles.formInput}
            placeholder="Ingresa tu DNI"
          />
        </View>
        <View style={styles.formInputContainer}>
          <Text style={styles.formInputLabel}>Ubicación</Text>
          <TextInput
            onChangeText={ubicacion.onChange}
            value={ubicacion.value}
            style={styles.formInput}
            placeholder="Ingresa tu Ubicación"
          />
        </View>
        <View style={styles.formInputContainer}>
          <Text style={styles.formInputLabel}>Destino</Text>
          <TextInput
            onChangeText={destino.onChange}
            value={destino.value}
            style={styles.formInput}
            placeholder="Ingresa el Destino"
          />
        </View>
        <View style={styles.formInputContainer}>
          <Text style={styles.formInputLabel}>Material</Text>
          <TextInput
            onChangeText={material.onChange}
            value={material.value}
            style={styles.formInput}
            placeholder="Ingresa el tipo de material"
          />
        </View>
        <View style={styles.formInputContainer}>
          <Text style={styles.formInputLabel}>Precio</Text>
          <TextInput
            onChangeText={precio.onChange}
            value={precio.value}
            style={styles.formInput}
            placeholder="Ingresa el precio"
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={handlePress}
            style={styles.formSubmit}
            activeOpacity={0.8}>
            <Text style={styles.formSubmitText}>Crear Servicio</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 20,
  },
  formTitleContainer: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  formTitle: {
    fontSize: 25,
    textAlign: 'center',
  },
  formContainer: {
    padding: 20,
  },
  formInputContainer: {
    paddingBottom: 20,
  },
  formInput: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
  },
  formInputLabel: {
    color: 'gray',
  },
  formSubmit: {
    backgroundColor: '#000',
    padding: 10,
  },
  formSubmitText: {
    color: '#fff',
    textAlign: 'center',
  },
});
