import React from 'react';
import { Modal, StyleSheet, View, TouchableOpacity } from 'react-native';
import IconFontAweson from 'react-native-vector-icons/FontAwesome';

export const ModalComponent: React.FC<{
  children: React.ReactNode;
  show: boolean;
  CloseModal: () => void;
}> = ({ children, show, CloseModal }) => {
  return (
    <View style={styles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={show}>
        <View style={styles.centeredView}>
          <View style={styles.ViewData}>
            <View style={styles.ViewCloseModal}>
              <TouchableOpacity onPress={CloseModal}>
                <IconFontAweson name="close" color="#2F484F" size={25} />
              </TouchableOpacity>
            </View>
            {children}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.5)'
  },
  ViewData: {
    borderWidth: 1,
    backgroundColor: '#ffff',
    borderRadius: 10,
    padding: 10,
    position: 'relative'
  },
  ViewCloseModal: {
    alignItems: 'flex-end',
    borderBottomColor: '#2F484F',
    borderBottomWidth: 0.5,
    marginBottom: 5
  }
});
