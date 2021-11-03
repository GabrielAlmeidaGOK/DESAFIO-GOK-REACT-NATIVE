import React, { useState } from "react";
import { TouchableOpacity, Modal, StyleSheet, Text, Pressable, View } from "react-native";

interface Props {
    visible: any
    transparent: any
    onRequestClose?: () => void
    add?: any
    edit?: any
}

const ModalView: React.FC<Props> = (
    {
    visible, 
    transparent, 
    onRequestClose,
    add,
    edit
    }) => {
  
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={transparent}
        visible={visible}
        onRequestClose={onRequestClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
           
            <TouchableOpacity
              style={[styles.button]}
              onPress={add}
            >
              <Text style={styles.textStyle}>Adicionar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button]}
              onPress={edit}
            >
              <Text style={styles.textStyle}>Editar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
     
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    flexDirection: 'row',
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 8,
    padding: 10,
    elevation: 2,
    backgroundColor: "#000",
    marginRight: 10,
    width: 120
  },
 
 
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default ModalView;