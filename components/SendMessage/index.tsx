import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, TextInput } from "react-native";
import Style from "./styles";
export const SendMessage = () => {
  return (
    <View style={Style.Container}>
      <View style={Style.ContainerInput}>
        <TextInput
          style={Style.Input}
          multiline={true}
          placeholderTextColor="#ffff"
          placeholder="Mensaje..."
          selectionColor={"#ffff"}
        />
      </View>
      <View style={Style.ContainerSend}>
        <View>
          <Icon name="send" size={30} color="#ffff" />
        </View>
      </View>
    </View>
  );
};
