import React from 'react';
import { Text, View, Image } from 'react-native';
import Style from './styles';
import Person from '../../assets/Person.png';
export const ContainerMessage: React.FC<{
  TextMessage: string;
  Direction: string;
  backgroundColorContainer: string;
  strUserName: string;
  blobImageUser: string;
}> = ({
  TextMessage,
  Direction,
  backgroundColorContainer,
  strUserName,
  blobImageUser
}) => {
  return (
    <View
      style={{
        alignSelf: Direction,
        ...Style.Container
      }}
    >
      <Image
        style={Style.Img}
        source={{ uri: blobImageUser }}
        resizeMode={'cover'}
      />
      <View
        style={{
          ...Style.ContainerMessage,
          backgroundColor: `${backgroundColorContainer}`
        }}
      >
        <Text style={Style.TextPersonMessage}>{strUserName}</Text>
        <Text style={Style.Text}>{TextMessage}</Text>
      </View>
    </View>
  );
};
