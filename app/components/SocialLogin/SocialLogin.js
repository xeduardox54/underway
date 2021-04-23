import React from 'react';
import { View, Image, Text } from 'react-native';
import Facebook from '../../../img/facebook.png';
import Google from '../../../img/google-mas.png';
import Github from '../../../img/github.png';

const SocialLogin = () => {
  return (
    <View style={{ marginBottom: 10 }}>
      <View>
        <Text style={{ color: 'black', textAlign: 'center', marginBottom: 5 }}>
          Más opciones de inicio de sesión:
        </Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={Facebook}
          style={{
            marginLeft: 5,
            height: 40,
            width: 40,
            marginRight: 30,
            borderRadius: 32,
            borderColor: '#9E9E9E',
            borderWidth: 2,
          }}
        />
        <Image
          source={Google}
          style={{
            marginRight: 30,
            height: 40,
            width: 40,
            borderRadius: 32,
            borderColor: '#9E9E9E',
            borderWidth: 2,
          }}
        />
        <Image
          source={Github}
          style={{
            borderRadius: 32,
            height: 40,
            width: 40,
            borderColor: '#9E9E9E',
            borderWidth: 2,
          }}
        />
      </View>
    </View>
  );
};

export default SocialLogin;
