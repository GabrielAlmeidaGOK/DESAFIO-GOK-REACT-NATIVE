import React, { useState } from "react";
import { TouchableOpacity, Modal, StyleSheet, Text, TextInput, View, Image } from "react-native";

import {Colors, Typography} from '../../styles'

interface Props {
    visible?: any
    transparent?: any
    onRequestClose?: () => void
    onChangeText?: any
    save?: any
    cancel?: any
}

const ModalEdit: React.FC<Props> = (
    {
    visible, 
    transparent, 
    onRequestClose,
    onChangeText,
    save,
    cancel
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
                <Text style={styles.title}>Editar tags</Text>

                <View style={styles.ContainInput}>
                        <Image
                            source={require('../../../assets/images/search.png')}
                            style={styles.image}
                        />

                        <TextInput 
                            onChangeText={onChangeText} 
                            style={styles.input}
                        />
                        

                </View>
                    <View style={styles.contain}>
                        <Text style={styles.textContain}>Sugestões</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={save}>
                        <Text style={styles.textStyle2}>Salvar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2} onPress={cancel}>
                        <Text style={styles.textStyle}>Cancelar</Text>
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
    height: 450,
    width: 343,
    borderRadius: 20,
    padding: 35,
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
    borderRadius: 20,
    marginTop: 10,
    width: '100%',
    padding: 10,
    elevation: 2,
    backgroundColor: Colors.BLACK,
    marginRight: 10,
  },

  button2: {
    borderRadius: 20,
    marginTop: 10,
    width: '100%',
    padding: 10,
    elevation: 2,
    backgroundColor: Colors.WHITE,
    marginRight: 10,
  },

  title: {
    color: Colors.BLACK,
    fontWeight: "bold",
    fontSize: Typography.FONT_SIZE_20
  },
 
  textStyle: {
    color: Colors.BLACK,
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: Typography.FONT_SIZE_20
  },

  textStyle2: {
    color: Colors.WHITE,
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: Typography.FONT_SIZE_20
  },

  ContainInput: {
    height: 40,
    flexDirection: 'row',
  },
  
  input: {
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    borderColor: Colors.BORDER,
    borderWidth: 1,
    marginTop: 30,
    paddingLeft: 45,
    height: 50,
    width: '100%'
  },

  image: {
      position: 'absolute',
      marginTop: 45,
      marginLeft: 20,
      zIndex: 999
  },

  contain: {
      backgroundColor: Colors.WHITE,
      elevation: 3,
      marginTop: 50,
      height: 160,
      borderRadius: 8,
      width: '100%'
  },

  textContain: {
      color: Colors.SUB_TITLE,
      fontSize: Typography.FONT_SIZE_17,
      marginTop: 20,
      marginLeft: 20
  }
});

export default ModalEdit;