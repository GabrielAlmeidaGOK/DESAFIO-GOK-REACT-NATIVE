import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {Colors, Typography} from '../../styles'

// create a component
const Header: React.FC = () =>  {
    return (
        <View style={styles.container}>
            <Image 
              source={require('../../../assets/images/header.png')}
              style={styles.image}
              resizeMode='contain'
            />

            <TouchableOpacity style={styles.button} /* onPress={() => navigation.navigate('Users')} */>
                <Text style={styles.textButton}>Adicionar novo</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        height: 100,
        width: '100%',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        flexDirection: 'row'
    },

    image:{
      width: '40%',
      marginTop: 30,
    },

    button: {
        width: '45%',
        height: 35,
        borderRadius: 20,
        marginTop: 30,
        marginLeft: 45,
        backgroundColor: Colors.BUTTON
    },

    textButton: {
        color: Colors.BUTTON_TEXT,
        fontSize: Typography.FONT_SIZE_16,
        marginTop: 5,
        textAlign: 'center',
    }
});

export default Header;
