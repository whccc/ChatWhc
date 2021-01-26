import React from "react";
import {
  SafeAreaView,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import Style from "../StylesScreen/ScreenRegisterStyle";
import Avatar from "../assets/Person.png";

export const ScreenRegister: React.FC<{}> = ({ navigation }) => {
  return (
    <SafeAreaView style={Style.Container}>
      <View style={Style.ContainerDataRegister}>
        <Image source={Avatar} style={Style.Img} />
        <TextInput style={Style.Input} placeholder="Nombres" />
        <TextInput style={Style.Input} placeholder="Usuario" />
        <TextInput style={Style.Input} placeholder="Clave" />
        <View style={Style.ContainerButton}>
          <TouchableOpacity style={Style.Button}>
            <Text style={Style.TextButton}>Crear</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
            style={Style.Button}
          >
            <Text style={Style.TextButton}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
