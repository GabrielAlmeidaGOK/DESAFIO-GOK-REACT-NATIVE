import React, { useState, useEffect, useContext } from 'react'
import { Alert, Linking, StyleSheet, View, SafeAreaView, FlatList, Image } from 'react-native'

import { Params } from '../models/Params'
import { AntDesign } from '@expo/vector-icons';

interface ICard {
    organization: Params
    onPress?: any
  }

export default function Container ({ organization }: ICard): JSX.Element {



  return (        
                  
    <Image 
        source={{uri: organization.avatar_url}}
        style={styles.image}
    />
  )

}



const styles = StyleSheet.create({
 

 
  image: {
      width: 70,
      height: 70,
      borderRadius: 40,
      backgroundColor: 'red',
      marginTop: 15
  },

  
});


