import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import Styles from './styles';

export const GaleryAndCamera: React.FC<{
  OpenImagePickerAsync: () => void;
  OpenCameraAsync: () => void;
}> = ({ OpenCameraAsync, OpenImagePickerAsync }) => {
  return (
    <View style={Styles.Container}>
      <TouchableOpacity
        style={Styles.ContainerButton}
        onPress={OpenCameraAsync}
      >
        <View style={Styles.ContainerData}>
          <IconAntDesign name="camera" size={30} color="#2F484F" />
          <Text>Camara</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.ContainerButton}
        onPress={OpenImagePickerAsync}
      >
        <View style={Styles.ContainerData}>
          <IconEntypo name="folder-images" size={30} color="#2F484F" />
          <Text>Galeria</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
