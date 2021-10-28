import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {Colors, Typography} from '../../styles'
import { AntDesign } from '@expo/vector-icons';


interface Props {
    source?: any
}

const SearchHeader: React.FC<Props> = ({
    source
}) =>  {
    return (
        <View style={styles.container}>
          
          <AntDesign name="arrowleft" size={30} color="black" style={styles.arrow}/>
          
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        height: 70,
        width: '100%',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        flexDirection: 'row'
    },

    avatar:{
      width: 50,
      height: 50,
      marginTop: 30,
    },

    arrow: {
      marginTop: 20,
      marginLeft: 30
    }
});

export default SearchHeader;
