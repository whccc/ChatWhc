import { StyleSheet, Platform } from 'react-native';

const Style = StyleSheet.create({
  Container: {
    paddingTop: Platform.OS === 'ios' ? 0 : 100,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  ContainerLogin: {
    overflow: 'hidden',
    width: '100%',
    maxWidth: 600
  },
  Img: {
    height: 120,
    width: 120,
    marginBottom: 10,
    alignSelf: 'center',
    borderRadius: 100
  },
  ContainerDataLogin: {
    width: '100%',
    padding: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  Input: {
    borderColor: '#2F484F',
    borderWidth: 1,
    width: '90%',
    borderRadius: 20,
    marginBottom: 5,
    padding: 10
  },
  ContainerButton: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10
  },
  Button: {
    backgroundColor: '#2F484F',
    display: 'flex',
    width: 100,
    marginRight: 1,
    padding: 5,
    borderRadius: 20
  },
  TextButton: {
    color: '#ffff',
    textAlign: 'center'
  }
});

export default Style;
