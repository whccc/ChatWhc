import { StyleSheet, Dimensions, Platform } from "react-native";

const Height = Dimensions.get("window").height / 3;
const Style = StyleSheet.create({
  Container: {
    maxHeight: Platform.OS == "web" ? "600px" : "auto",
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },

  ContainerChat: {
    flex: 1,
    backgroundColor: "#ddd",
    padding: 20,
  },
  ContainerSendMessage: {
    backgroundColor: "#48AF2F",
  },
});

export default Style;
