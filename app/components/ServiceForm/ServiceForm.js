import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useInputValue } from '../../hooks/useInputValue';

export const ServiceForm = ({ onSubmit }) => {
  // Campos del formulario
  const foto = useInputValue('');
  const nombreCliente = useInputValue('');
  const imagenCarga = useInputValue('');
  const calificación = useInputValue('');
  const nombreCarga = useInputValue('');
  const ubicacionInicio = useInputValue('');
  const ubicacionDestino = useInputValue('');
  const precio = useInputValue('');
  const descripcionPedido = useInputValue('');

  // Controlar el evento Press del boton
  const handlePress = () => {
    // Crear el Json con los valores del formulario
    const values = {
      foto: foto.value,
      nombreCliente: nombreCliente.value,
      carga: imagenCarga.value,
      calificacion: calificación.value,
      Carga: nombreCarga.value,
      UbicacionInicio: ubicacionInicio.value,
      UbicacionDestino: ubicacionDestino.value,
      Precio: precio.value,
      DescripcionPedido: descripcionPedido.value,
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
          <Text style={styles.formInputLabel}>Nombre</Text>
          <TextInput
            onChangeText={nombreCliente.onChange}
            value={nombreCliente.value}
            style={styles.formInput}
            placeholder="Ingresa su nombre"
          />
        </View>
        <View style={styles.formInputContainer}>
          <Text style={styles.formInputLabel}>Foto</Text>
          <TextInput
            onChangeText={foto.onChange}
            value={foto.value}
            style={styles.formInput}
            placeholder="Ingresa el link de su foto"
          />
        </View>
        <View style={styles.formInputContainer}>
          <Text style={styles.formInputLabel}>Imagen Carga</Text>
          <TextInput
            onChangeText={imagenCarga.onChange}
            value={imagenCarga.value}
            style={styles.formInput}
            placeholder="Ingresa el link de su imagen"
          />
        </View>
        <View style={styles.formInputContainer}>
          <Text style={styles.formInputLabel}>Calificación</Text>
          <TextInput
            onChangeText={calificación.onChange}
            value={calificación.value}
            style={styles.formInput}
            placeholder="Ingresa su calificación"
          />
        </View>
        <View style={styles.formInputContainer}>
          <Text style={styles.formInputLabel}>Inicio</Text>
          <TextInput
            onChangeText={ubicacionInicio.onChange}
            value={ubicacionInicio.value}
            style={styles.formInput}
            placeholder="Ingresa el lugar de inicio"
          />
        </View>
        <View style={styles.formInputContainer}>
          <Text style={styles.formInputLabel}>Destino</Text>
          <TextInput
            onChangeText={ubicacionDestino.onChange}
            value={ubicacionDestino.value}
            style={styles.formInput}
            placeholder="Ingresa el lugar de destino"
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
        <View style={styles.formInputContainer}>
          <Text style={styles.formInputLabel}>Descripcion</Text>
          <TextInput
            onChangeText={descripcionPedido.onChange}
            value={descripcionPedido.value}
            style={styles.formInput}
            placeholder="Ingresa una pequeña descripción"
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
