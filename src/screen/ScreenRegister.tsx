import React, { useState } from 'react';
import {
  SafeAreaView,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import Style from '../StylesScreen/ScreenRegisterStyle';
import useUser from '../hooks/useUser';
import * as ImagePicker from 'expo-image-picker';
import { GaleryAndCamera } from '../components/GaleryAndCamera';
import { ModalComponent } from '../components/Modal';

export const ScreenRegister: React.FC<{ navigation: any }> = ({
  navigation
}) => {
  const [strNames, setStrNames] = useState('');
  const [strUser, setStrUser] = useState('');
  const [strPassword, setStrPassword] = useState('');
  const [blnShowModal, setBlnShowModal] = useState(false);
  const [ImageUri, setImageUri] = useState({
    Uri: '',
    Base64: ''
  });
  //HOOK
  const { CreateUserHookAsync } = useUser();
  //==========================================
  //VALIDANDO DATA DEL FORMULARIO DEL USUARIO
  //==========================================
  const ValidateData = () => {
    if (ImageUri.Uri === '') {
      alert('Seleccione una foto.');
      return false;
    }
    if (strNames === '') {
      alert('Digite su nombre.');
      return false;
    }
    if (strUser === '') {
      alert('Digite su usuario.');
      return false;
    }
    if (strPassword === '') {
      alert('Digite su contraseña.');
      return false;
    }

    return true;
  };
  //===============
  // MANEJO CAMARA
  //===============
  const OpenCameraAsync = async () => {
    let CameraAsync = await ImagePicker.launchCameraAsync({
      base64: true
    });
    if (!CameraAsync.cancelled) {
      setImageUri({
        Uri: CameraAsync.uri,
        Base64: CameraAsync.base64 === undefined ? '' : CameraAsync.base64
      });
      setBlnShowModal(false);
    }
  };
  //==================================
  // MANEJANDO IMAGEN GALERIA USUARIO
  //==================================
  const OpenImagePickerAsync = async () => {
    let GaleryAsync = await ImagePicker.launchImageLibraryAsync({
      base64: true
    });
    if (!GaleryAsync.cancelled) {
      setImageUri({
        Uri: GaleryAsync.uri,
        Base64: GaleryAsync.base64 === undefined ? '' : GaleryAsync.base64
      });
      setBlnShowModal(false);
    }
  };
  //==============================================
  //ENVIO DE DATA PARA CREARLO EN LA BASE DE DATOS
  //==============================================
  const CreateUserAsync = async () => {
    if (!ValidateData()) {
      return;
    }
    const JsonDataUser = {
      blobImageUser: ImageUri.Base64,
      strNames,
      strUser,
      strPassword
    };
    if (await CreateUserHookAsync(JsonDataUser)) {
      alert('Usuario creado con éxito.');
      setStrNames('');
      setStrUser('');
      setStrPassword('');
      setImageUri({ Uri: '', Base64: '' });
    } else {
      alert('Error en el servidor.');
    }
  };
  return (
    <SafeAreaView style={Style.Container}>
      <View style={Style.ContainerDataRegister}>
        <TouchableOpacity
          onPress={() => {
            setBlnShowModal(true);
          }}
        >
          <Image
            source={{
              uri:
                ImageUri.Uri === ''
                  ? 'https://gravatar.com/avatar/af020c667a3bd539b1ec582b322f7379?s=400&d=robohash&r=x'
                  : ImageUri.Uri
            }}
            style={Style.Img}
          />
        </TouchableOpacity>
        <TextInput
          style={Style.Input}
          onChangeText={(e) => setStrNames(e.trim())}
          value={strNames}
          placeholder="Nombres"
        />
        <TextInput
          style={Style.Input}
          onChangeText={(e) => setStrUser(e.trim())}
          value={strUser}
          placeholder="Usuario"
        />
        <TextInput
          style={Style.Input}
          placeholder="Clave"
          value={strPassword}
          secureTextEntry={true}
          onChangeText={(e) => setStrPassword(e.trim())}
        />
        <View style={Style.ContainerButton}>
          <TouchableOpacity style={Style.Button} onPress={CreateUserAsync}>
            <Text style={Style.TextButton}>Crear</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}
            style={Style.Button}
          >
            <Text style={Style.TextButton}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ModalComponent
        show={blnShowModal}
        CloseModal={() => {
          setBlnShowModal(false);
        }}
      >
        <GaleryAndCamera
          OpenImagePickerAsync={OpenImagePickerAsync}
          OpenCameraAsync={OpenCameraAsync}
        />
      </ModalComponent>
    </SafeAreaView>
  );
};
