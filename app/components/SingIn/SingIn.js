import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import IMG from '../../../img/fondo.jpg';
import DARK from '../../../img/dark.jpg';
import SocialLogin from '../SocialLogin/SocialLogin';

const { width } = Dimensions.get('window');
const aspectRatio = 590 / 1125;
const height = width * aspectRatio * 0.61;

const showAlert = () => {
  Alert.alert(
    'REGISTRAR',
    'Lo sentimos, vista en creación',
    [{ text: 'Ok', onPress: () => console.log('Ok Pressed') }],
    { cancelable: false },
  );
};

export default class SingIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userValue: '',
      passwordValue: '',
      message: '',
      count: 0,
    };
  }

  changeTextUserInput = text => {
    this.setState({ userValue: text });
  };
  changeTextPasswordInput = text => {
    this.setState({ passwordValue: text });
  };

  onPress = () => {
    this.setState({ message: '' });
    if (
      this.state.userValue == 'Fabrizio' &&
      this.state.passwordValue == '123'
    ) {
      this.props.navigation.navigate('Pedidos');
    } else if (
      this.state.userValue == 'Rodrigo' ||
      this.state.passwordValue == '1234'
    ) {
      this.props.navigation.navigate('Underway');
    } else if (this.state.userValue == '' || this.state.passwordValue == '') {
      this.setState({ message: 'Complete los campos vacios' });
    } else {
      this.setState({ message: 'Las credenciales no son correctas' });
    }
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#202020' }}>
        <View style={{ backgroundColor: 'white' }}>
          <View style={{ overflow: 'hidden' }}>
            <Image
              source={IMG}
              style={{ width, height, borderBottomLeftRadius: 80 }}
            />
          </View>
        </View>
        <View style={{ flex: 1, overflow: 'hidden' }}>
          <Image
            source={DARK}
            style={{ ...StyleSheet.absoluteFillObject, width, height: 500 }}
          />
          <View
            style={{
              borderRadius: 80,
              borderTopLeftRadius: 0,
              backgroundColor: 'white',
              flex: 1,
            }}>
            <View>
              <View style={{ padding: 5 }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 30,
                    fontFamily: 'Raleway-Bold',
                    color: '#008BFF',
                    textAlign: 'center',
                    marginTop: 20,
                  }}>
                  ¡Bienvenido a UNDERWAY!
                </Text>
                <Text
                  style={{ textAlign: 'center', marginTop: 15, fontSize: 15 }}>
                  Tu mejor opción para de cargas
                </Text>

                <View style={{ alignItems: 'flex-start', padding: 10 }}>
                  <Text style={{ marginStart: 10, marginTop: 15, fontSize: 15 }}>
                    Correo:
                  </Text>
                  <TextInput
                    ref={input => {
                      this.textUser = input;
                    }}
                    placeholder={'Correo'}
                    style={styles.input}
                    onChangeText={text => this.changeTextUserInput(text)}
                  />
                  <Text style={{ marginStart: 10, marginTop: 15, fontSize: 15 }}>
                    Contraseña:
                  </Text>
                  <TextInput
                    ref={input => {
                      this.textPassword = input;
                    }}
                    placeholder={'Contraseña'}
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={text => this.changeTextPasswordInput(text)}
                  />
                </View>

                <View style={{ alignItems: 'center', marginTop: 15 }}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                      {' '}
                      Iniciar Sesion{' '}
                    </Text>
                  </TouchableOpacity>

                  <Text style={styles.alert}>{this.state.message}</Text>

                  <SocialLogin />
                  <TouchableOpacity onPress={showAlert}>
                    <Text style={{ color: '#0094EA', fontWeight: 'bold' }}>
                      {' '}
                      Registrarse{' '}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ height: 1, backgroundColor: '#202020' }} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    margin: 1,
    width: 120,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#0094EA',
  },
  alert: {
    textAlign: 'center',
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
  },
  input: {
    width: 365,
    height: 44,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#008BFF',
    marginBottom: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});
