import io from 'socket.io-client';
import { URL_SOCKET } from '../VariablesDeEntorno';

const ConectionSocket = () => {
  let socket = io(`${URL_SOCKET}`, {
    query: {
      'my-key': 'my-value'
    }
  });
  return socket;
};

export default ConectionSocket;
