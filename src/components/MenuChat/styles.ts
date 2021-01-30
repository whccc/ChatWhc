import { StyleSheet, Platform } from 'react-native';

const Style = StyleSheet.create({
  Container: {
    backgroundColor: '#48AF2F',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 24
  },
  ContainerImg: {
    flex: 1
  },
  Img: {
    width: 50,
    height: 50,
    borderRadius: 1000
  },
  ContainerConnect: {
    display: 'flex',
    flexDirection: 'row'
  }
});

export default Style;
