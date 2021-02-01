import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MenuChat } from '../components/MenuChat';
import { ContainerMessage } from '../components/MessageChat';
import { SendMessage } from '../components/SendMessage';
import { View, SafeAreaView, Text } from 'react-native';
import { IUserData, IJsonDataMessage } from '../Interfaces';
import useSockectEvent from '../hooks/useSocketEvent';
import { AutoScrollFlatList } from 'react-native-autoscroll-flatlist';
import Style from '../StylesScreen/ScreenChatStyle';

export const ScreenChat: React.FC<{
  navigation: any;
  LogOutUserAsync: () => Promise<void>;
  JsonDataUser: IUserData;
}> = ({ navigation, LogOutUserAsync, JsonDataUser }) => {
  const {
    Socket,
    CloseSocket,
    EmitMessageHook,
    objMessage,
    UpdateObjMessageHook,
    OnMessageHook
  } = useSockectEvent();
  const Flatlist = useRef(null);
  //=============
  //DATA MESSAGE
  //==============
  useEffect(() => {
    if (Socket === undefined) {
      return;
    }
    //==========================================
    // EMITIENDO MENSAJE USUARIO INICIANDO CHAT
    //==========================================
    Socket.emit('NewMember', {
      strUserName: JsonDataUser.strNameAndLastName,
      TextMessage: `Se unio ${JsonDataUser.strNameAndLastName}`,
      blobImageUser: JsonDataUser.blobImageUser,
      TypesMessage: 'Text'
    });
    //==================================
    // ESCUCHANDO NUEVOS EVENTOS SOCKET
    //==================================
    OnMessageHook('NewMember');
    OnMessageHook('NewMessage');
    /*Socket.on('NewMember', (Data: any) => {
      const DataJson = {
        id: JsonMessage.length + 1,
        TextMessage: Data.TextMessage,
        strUserName: Data.strUserName,
        blobImageUser: Data.blobImageUser,
        Direction: 'flex-start',
        backgroundColorContainer: '#f0b639',
        TypeMessage: Data.TypesMessage
      };
      setJsonMessage((JsonMessage: any) => [...JsonMessage, DataJson]);
    });
    Socket.on('NewMessage', (Data: any) => {
      const DataJson = {
        id: JsonMessage.length + 1,
        TextMessage: Data.TextMessage,
        strUserName: Data.strUserName,
        blobImageUser: Data.blobImageUser,
        Direction: 'flex-start',
        backgroundColorContainer: '#51BFF0',
        TypeMessage: Data.TypesMessage
      };
      setJsonMessage((JsonMessage: any) => [...JsonMessage, DataJson]);
    });*/
    return () => {
      CloseSocket();
    };
  }, [Socket]);

  return (
    <SafeAreaView style={Style.Container}>
      <View>
        <MenuChat
          LogOutUserAsync={LogOutUserAsync}
          JsonDataUser={JsonDataUser}
        />
        <Text>{objMessage.length.toString()}</Text>
      </View>
      <View style={Style.ContainerChat}>
        <AutoScrollFlatList
          ref={Flatlist}
          threshold={20}
          data={objMessage}
          renderItem={({ item }) => {
            return <ContainerMessage {...item} />;
          }}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View style={Style.ContainerSendMessage}>
        <SendMessage
          EmitMessageHook={EmitMessageHook}
          JsonDataUser={JsonDataUser}
          UpdateObjMessageHook={UpdateObjMessageHook}
        />
      </View>
    </SafeAreaView>
  );
};
