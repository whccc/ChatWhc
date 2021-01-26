import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  Container: {
    maxWidth: "80%",
    position: "relative",
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    flexWrap: "wrap",
  },
  Text: { color: "#ffff" },
  Img: {
    width: 50,
    height: 50,
    marginRight: 5,
  },
  ContainerMessage: {
    padding: 10,
    elevation: 2,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  TextPersonMessage: {
    color: "#ddd",
    fontSize: 10,
  },
});

export default Style;
