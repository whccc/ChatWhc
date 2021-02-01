import { useEffect, useState } from 'react';
import ConectionSocket from '../hooks/useSocketClient';
import { IJsonDataMessage } from '../Interfaces';

const useSocketEvent = () => {
  const [Socket, SetSocket] = useState<SocketIOClient.Socket | undefined>();
  const [objMessage, setMessage] = useState<IJsonDataMessage[]>([]);
  useEffect(() => {
    const Conection = async () => {
      let ConectionSocketIO = await ConectionSocket();
      SetSocket(ConectionSocketIO);
    };
    Conection();
  }, []);
  //==================
  // EMITIR MENSAJES
  //==================
  const EmitMessageHook = (TypeEvent: string, JsonData: {}) => {
    if (Socket !== undefined) {
      Socket.emit(TypeEvent, JsonData);
    }
  };
  //===================
  // ESCUCHAR MENSAJES
  //===================
  const OnMessageHook = (TypeEvent: string) => {
    if (Socket !== undefined) {
      Socket.on(TypeEvent, (Data: any) => {
        const DataJson = {
          id: objMessage.length + 1,
          TextMessage: Data.TextMessage,
          strUserName: Data.strUserName,
          blobImageUser: Data.blobImageUser,
          Direction: 'flex-start',
          backgroundColorContainer: '#f0b639',
          TypeMessage: Data.TypesMessage
        };
        setMessage((objMessage: IJsonDataMessage[]) => [
          ...objMessage,
          DataJson
        ]);
      });
    }
  };
  //=======================
  // ACTUALIZAR OBJMESSAGE
  //=======================
  const UpdateObjMessageHook = (Data: IJsonDataMessage) => {
    Data.id = objMessage.length + 1;
    setMessage((objMessage: IJsonDataMessage[]) => [...objMessage, Data]);
  };
  //==============
  // CLOSE SOCKET
  //==============
  const CloseSocket = () => {
    if (Socket !== undefined) {
      Socket.disconnect();
    }
  };

  return {
    Socket,
    objMessage,
    CloseSocket,
    EmitMessageHook,
    UpdateObjMessageHook,
    OnMessageHook
  };
};
export default useSocketEvent;
