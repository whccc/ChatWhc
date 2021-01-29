import React from 'react';
import Person from '../../assets/Person.png';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Style from './styles';
export const MenuChat = () => {
  return (
    <View style={Style.Container}>
      <View style={Style.ContainerImg}>
        <Image style={Style.Img} source={Person} resizeMode={'contain'} />
        <Text style={{ color: '#ffff' }}>Wilson Herney Castro Cabrera</Text>
      </View>
      <View style={Style.ContainerConnect}>
        <TouchableOpacity>
          <Icon name="persons" size={30} color="#ffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
