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
  const id = useInputValue(4);
  const foto = useInputValue('https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fes%2Fvectors%2Fperfil-hombre-usuario-casa-humana-42914%2F&psig=AOvVaw3jZNtHYSK3YN4xyxWwd1jW&ust=1619237888086000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMD7mazBk_ACFQAAAAAdAAAAABAJ');
  const nombreCliente = useInputValue('Eduardo');
  const carga = useInputValue('');
  const calificacion = useInputValue(5.5);
  const Carga = useInputValue('');
  const UbicacionInicio = useInputValue('');
  const UbicacionDestino = useInputValue('');
  const Precio = useInputValue('');
  const DescripcionPedido = useInputValue('');

  // Controlar el evento Press del boton
  const handlePress = () => {
    // Crear el Json con los valores del formulario
    const values = {
      id: id.value,
      foto: foto.value,
      nombreCliente: nombreCliente.value,
      carga: carga.value,
      calificacion: calificacion.value,
      Carga: Carga.value,
      UbicacionInicio: UbicacionInicio.value,
      UbicacionDestino: UbicacionDestino.value,
      Precio: Precio.value,
      DescripcionPedido: DescripcionPedido.value,
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
          <Text style={styles.formInputLabel}>Ubicación</Text>
          <TextInput
            onChangeText={UbicacionInicio.onChange}
            value={UbicacionInicio.value}
            style={styles.formInput}
            placeholder="Ingresa la ubicación"
          />
        </View>
        <View style={styles.formInputContainer}>
          <Text style={styles.formInputLabel}>Destino</Text>
          <TextInput
            onChangeText={UbicacionDestino.onChange}
            value={UbicacionDestino.value}
            style={styles.formInput}
            placeholder="Ingresa el Destino"
          />
        </View>
        <View style={styles.formInputContainer}>
          <Text style={styles.formInputLabel}>Material</Text>
          <TextInput
            onChangeText={Carga.onChange}
            value={Carga.value}
            style={styles.formInput}
            placeholder="Ingresa el tipo de material"
          />
        </View>
        <View style={styles.formInputContainer}>
          <Text style={styles.formInputLabel}>Precio</Text>
          <TextInput
            onChangeText={Precio.onChange}
            value={Precio.value}
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
