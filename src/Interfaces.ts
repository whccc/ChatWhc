export interface IUser {
  blobImageUser?: string;
  strNames?: string;
  strUser?: string;
  strPassword?: string;
}

export interface IUserData {
  blobImageUser: string;
  strNameAndLastName: String;
  strUser?: string;
  stPassword?: string;
}

export interface IJsonDataMessage {
  id: number;
  TextMessage: string;
  strUserName: string;
  blobImageUser: string;
  Direction: string;
  backgroundColorContainer: string;
  TypeMessage: string;
}
