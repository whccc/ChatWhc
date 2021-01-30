import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView
} from 'react-native';
import Style from '../StylesScreen/ScreenLoginStyle';
import Logo from '../assets/Logo.jpg';
import { IUser } from '../Interfaces';

export const ScreenLogin: React.FC<{
  navigation: any;
  LoginUserAsync: ({ strPassword, strUser }: IUser) => Promise<boolean>;
}> = ({ navigation, LoginUserAsync }) => {
  const [strUser, setStrUser] = useState('');
  const [strPassword, setStrPassword] = useState('');

  //===================
  // VALIDAE DATA FORM
  //===================
  const ValidateData = () => {
    if (strUser === '') {
      alert('Digite un usuario.');
      return false;
    }
    if (strPassword === '') {
      alert('Digite una contraseña');
      return false;
    }
    return true;
  };
  //====================
  // INICIAR SESIÓN APP
  //====================
  const InicioSesionAppAsync = async () => {
    if (!ValidateData()) {
      return;
    }
    const Success = await LoginUserAsync({ strUser, strPassword });
    if (!Success) {
      alert('Usario o clave incorrectos.');
    }
  };
  return (
    <SafeAreaView style={Style.Container}>
      <View style={Style.ContainerLogin}>
        <Image style={Style.Img} resizeMode={'contain'} source={Logo} />

        <View style={Style.ContainerDataLogin}>
          <TextInput
            style={Style.Input}
            value={strUser}
            placeholder="User"
            onChangeText={(e) => {
              setStrUser(e.trim());
            }}
          />
          <TextInput
            style={Style.Input}
            secureTextEntry={true}
            value={strPassword}
            placeholder="Password"
            onChangeText={(e) => {
              setStrPassword(e.trim());
            }}
          />
          <View style={Style.ContainerButton}>
            <TouchableOpacity
              style={Style.Button}
              onPress={InicioSesionAppAsync}
            >
              <Text style={Style.TextButton}>Iniciar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Style.Button}
              onPress={() => {
                navigation.navigate('Registro');
              }}
            >
              <Text style={Style.TextButton}>Registro</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
