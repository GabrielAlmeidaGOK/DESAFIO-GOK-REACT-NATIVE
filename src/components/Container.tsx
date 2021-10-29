import React, { useState, useEffect, useContext } from 'react'
import { Alert, Linking, StyleSheet, View, SafeAreaView, FlatList, Image } from 'react-native'
import { Button, Box, Divider, Text, Pressable } from 'native-base'
import {Typography, Colors} from '../styles'
import Header from '../components/Header'
import { Params } from '../models/Params'

import { Entypo, Foundation } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler'

interface ICard {
  organization: Params
  onPress?: any
}

export default function Container ({ organization, onPress}: ICard): JSX.Element {



  return (
    

      <SafeAreaView style={styles.container}>

       <FlatList
          data={[{name: 'a'}, {name: 'b'}, {name: 'c'}]} 
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }: any) => (
            <View style={styles.item}>
              
                <View style={styles.nameImage}>
                    <Image 
                        source={{uri: organization.avatar_url}}
                        style={styles.image}
                    />
                    <View style={styles.nameContain}>
                        <View style={styles.containIcon}>
                        <TouchableOpacity style={{width: '100%'}} onPress={onPress}>
                            <Text style={styles.name}>{organization.login}</Text>
                        </TouchableOpacity>
                        <View style={styles.icons}>
                            <Entypo name="chevron-small-right" size={40} color="black" style={{marginLeft: 20}}/>
                            <Foundation name="trash" size={25} color="black" style={styles.trash}/>
                        </View>
                          
                        </View>
                    
                        <Text style={styles.arroba}>@{organization.login}</Text>
                    </View>
                </View>
          
          </View>   
          )}
        />

    </SafeAreaView>
    
   /*  <Pressable
      onPress={openBrowser}
      bg='white.50'
      borderRadius={10}
      px={2}
      py={4}
      w='87%'
      shadow={2}
      flexDirection='row'
      justifyContent='space-between'
    >
      <Image
        source={{uri: `${organization.avatar_url}`}}
        width={20}
        height={20}
        borderRadius={10}
        alt={`${organization.login}`}
      />

      <Divider width={5} bg='white.50' />

      <Box width={0} flexGrow={1}>
        <Text color='blue.50'>
          {organization.login}
        </Text>

        <Text color='grey.50'>
          {organization.description ?? ''}
        </Text>

      
      </Box>
    </Pressable> */
  )

}



const styles = StyleSheet.create({

  list: {
    alignSelf: 'center',
    marginTop: 40
  },

  container: {
    flex: 1,
    justifyContent: 'center',
 
  },

  item: {
    backgroundColor: Colors.WHITE,
    width: 400,
    height: 220,
    borderRadius: 12,
    padding: 20,
    marginVertical: 8,
    elevation: 2
  },

  title: {
    fontSize: 32,
  },

  nameImage: {
    flexDirection: 'row',
    marginTop: 20
  },

  image: {
      width: 70,
      height: 70,
      borderRadius: 40,
      marginTop: 15
  },

  name: {
      fontSize: Typography.FONT_SIZE_21,
      marginLeft: 20,
      marginTop: 10,
      width: '100%'
  },

  arroba: {
    fontSize: Typography.FONT_SIZE_16,
    marginLeft: 20,
    width: '50%'
  },

  nameContain: {
      flexDirection: 'column'
  },

  containIcon:{
      flexDirection: 'row'
  },

  icons: {
      flexDirection: 'row',
      marginTop: 10,
      alignContent: 'flex-end',
      justifyContent: 'space-between',
    
  },

  trash: {
      backgroundColor: Colors.CONTAIN_TRASH,
      borderRadius: 20,
      textAlign: 'center',
      textAlignVertical: 'center',
      width: 40,
      height: 40,
      marginLeft: 30
  },

  org: {
      marginTop: 15
  }

});


