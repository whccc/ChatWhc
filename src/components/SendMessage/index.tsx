import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, TextInput } from 'react-native';
import Style from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IUserData } from '../../Interfaces';
export const SendMessage: React.FC<{
  EmitMessageHook: (TypeEvent: string, {}) => void;
  JsonDataUser: IUserData;
  UpdateObjMessageHook: (DataJson: any) => void;
}> = ({ EmitMessageHook, JsonDataUser, UpdateObjMessageHook }) => {
  const [strText, setStrText] = useState('');
  //===============
  //ENVIAR MENSAJE
  //===============
  const SendMessage = () => {
    EmitMessageHook('NewMessage', {
      strUserName: JsonDataUser.strNameAndLastName,
      TextMessage: strText.trim(),
      blobImageUser: JsonDataUser.blobImageUser,
      TypesMessage: 'Text'
    });
    const DataJson = {
      TextMessage: strText,
      strUserName: 'Tu',
      blobImageUser: JsonDataUser.blobImageUser,
      Direction: 'flex-end',
      backgroundColorContainer: '#48AF2F',
      TypeMessage: 'Text'
    };
    UpdateObjMessageHook(DataJson);
    setStrText('');
  };

  return (
    <View style={Style.Container}>
      <View style={Style.ContainerInput}>
        <TextInput
          style={Style.Input}
          multiline={true}
          placeholderTextColor="#ffff"
          placeholder="Mensaje..."
          selectionColor={'#ffff'}
          value={strText}
          onChangeText={(Value) => setStrText(Value)}
        />
      </View>
      <View style={Style.ContainerSend}>
        <View>
          <TouchableOpacity onPress={SendMessage}>
            <Icon name="send" size={30} color="#ffff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
