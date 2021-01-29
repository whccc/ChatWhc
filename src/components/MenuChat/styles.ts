import { StyleSheet, Platform } from 'react-native';

const Style = StyleSheet.create({
  Container: {
    backgroundColor: '#48AF2F',
    padding: 5,
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
    flex: 1,
    alignItems: 'flex-start'
  },
  Img: {
    width: 50,
    height: 50
  },
  ContainerConnect: {
    flex: 1,
    alignItems: 'flex-end'
  }
});

export default Style;
