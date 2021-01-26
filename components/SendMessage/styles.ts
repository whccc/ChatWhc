import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  Container: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  ContainerInput: {
    flex: 1,
  },
  Input: {
    minHeight: 20,
    maxHeight: 100,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
    color: "#fff",
  },
  ContainerSend: {
    padding: 10,
    alignSelf: "flex-end",
  },
});

export default Style;
