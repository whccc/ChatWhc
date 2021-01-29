import axios from "axios";
import { URL_API } from "../VariablesDeEntorno";

interface IUser {
  blobImageUser: string;
  strNames: string;
  strUser: string;
  strPassword: string;
}
//===========================================
// HOOK PARA EL MANEJO DEL ESTADO DE UN USER
//===========================================
const useUser = () => {
  //==================================================
  //FUNCION PARA CREAR UN USUARIO POR MEDIO DE LA API
  //==================================================
  const CreateUserHookAsync = async ({
    blobImageUser,
    strNames,
    strUser,
    strPassword,
  }: IUser) => {
    //=====================================
    //ENVIO DE LA DATA DEL USUARIO A CREAR
    //=====================================
    const Result = await axios.post(`${URL_API}/user`, {
      blobImageUser,
      strNameAndLastName: strNames,
      strUser,
      strPassword,
    });
    if (Result.status === 200) {
      return true;
    }
    return false;
  };

  return { CreateUserHookAsync };
};

export default useUser;
