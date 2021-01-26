import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
} from "react-native";
import Style from "../StylesScreen/ScreenLoginStyle";
import Logo from "../assets/Logo.jpg";
export const ScreenLogin = ({ navigation }) => {
  return (
    <SafeAreaView style={Style.Container}>
      <View style={Style.ContainerLogin}>
        <Image style={Style.Img} resizeMode={"contain"} source={Logo} />

        <View style={Style.ContainerDataLogin}>
          <TextInput style={Style.Input} placeholder="User" />
          <TextInput style={Style.Input} placeholder="Password" />
          <View style={Style.ContainerButton}>
            <TouchableOpacity
              style={Style.Button}
              onPress={() => {
                navigation.navigate("Chat");
              }}
            >
              <Text style={Style.TextButton}>Iniciar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Style.Button}
              onPress={() => {
                navigation.navigate("Registro");
              }}
            >
              <Text style={Style.TextButton}>Registro</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
