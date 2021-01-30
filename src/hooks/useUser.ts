import axios from 'axios';
import { URL_API } from '../VariablesDeEntorno';
import AsyncStorage from '@react-native-community/async-storage';
import { useState } from 'react';
import { IUser, IUserData } from '../Interfaces';

//===========================================
// HOOK PARA EL MANEJO DEL ESTADO DE UN USER
//===========================================
const useUser = () => {
  const [JsonDataUser, setJsonDataUser] = useState<IUserData | null>(null);
  //==================================================
  //FUNCION PARA CREAR UN USUARIO POR MEDIO DE LA API
  //==================================================
  const CreateUserHookAsync = async ({
    blobImageUser,
    strNames,
    strUser,
    strPassword
  }: IUser) => {
    //=====================================
    //ENVIO DE LA DATA DEL USUARIO A CREAR
    //=====================================
    const Result = await axios.post(`${URL_API}/user`, {
      blobImageUser,
      strNameAndLastName: strNames,
      strUser,
      strPassword
    });
    if (Result.status === 200) {
      return true;
    }
    return false;
  };

  //=====================
  //  INICIAR SESIÓN APP
  //=====================
  const LoginUserAsync = async ({
    strUser,
    strPassword
  }: IUser): Promise<boolean> => {
    const Result = await axios.post(`${URL_API}/user/login`, {
      strUser,
      strPassword
    });
    if (Result.status === 200) {
      if (Result.data.Success) {
        await AsyncStorage.setItem(
          'DataUserAPP',
          JSON.stringify(Result.data.DataUser)
        );
        setJsonDataUser(Result.data.DataUser);
      }
    }
    return Result.data.Success;
  };

  //=============
  // LOGOUT USER
  //=============
  const LogOutUserAsync = async () => {
    await AsyncStorage.removeItem('DataUserAPP');
    setJsonDataUser(null);
  };

  return {
    CreateUserHookAsync,
    JsonDataUser,
    LoginUserAsync,
    LogOutUserAsync
  };
};

export default useUser;
