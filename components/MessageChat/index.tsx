import React from "react";
import { Text, View, Image } from "react-native";
import Style from "./styles";
import Person from "../../assets/Person.png";
export const ContainerMessage: React.FC<{
  TextMessage: string;
  Direction: string;
  backgroundColorContainer: string;
}> = ({ TextMessage, Direction, backgroundColorContainer }) => {
  return (
    <View
      style={{
        alignSelf: Direction,
        ...Style.Container,
      }}
    >
      <Image style={Style.Img} source={Person} resizeMode={"contain"} />
      <View
        style={{
          ...Style.ContainerMessage,
          backgroundColor: `${backgroundColorContainer}`,
        }}
      >
        <Text style={Style.TextPersonMessage}>
          Wilson Herney Castro Cabrear
        </Text>
        <Text style={Style.Text}>{TextMessage}</Text>
      </View>
    </View>
  );
};
