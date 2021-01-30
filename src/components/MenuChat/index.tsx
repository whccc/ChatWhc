import React from 'react';
import Person from '../../assets/Person.png';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Style from './styles';
import { IUserData } from '../../Interfaces';
export const MenuChat: React.FC<{
  LogOutUserAsync: () => Promise<void>;
  JsonDataUser: IUserData;
}> = ({ LogOutUserAsync, JsonDataUser }) => {
  return (
    <View style={Style.Container}>
      <View style={Style.ContainerImg}>
        <Image
          style={Style.Img}
          source={{ uri: JsonDataUser.blobImageUser }}
          resizeMode={'cover'}
        />
        <Text style={{ color: '#ffff' }}>
          {JsonDataUser.strNameAndLastName}
        </Text>
      </View>
      <View style={Style.ContainerConnect}>
        <TouchableOpacity style={{ marginRight: 5 }}>
          <Icon name="persons" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={LogOutUserAsync}>
          <IconAntDesign name="logout" size={25} color="#ffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
