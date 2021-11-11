import React from 'react'
import { StyleSheet, View, SafeAreaView, FlatList, Image } from 'react-native'
import { Text } from 'native-base'
import {Typography, Colors} from '../styles'

import { Params } from '../models/Params'

import { Entypo, Foundation } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler'

interface ICard {
  onPress?: any
  data?: any
  name?: string
  avatar?: any
  hash? : any
}

export default function Container ({ onPress, data, }: ICard): JSX.Element {


  const renderItem = ({ name, avatar, hash}: any) => (
    <View style={styles.item}>
              
                <View style={styles.nameImage}>
                    <Image 
                        source={{uri: avatar}}
                        style={styles.image}
                    />
                    <View style={styles.nameContain}>
                        <View style={styles.containIcon}>
                        <TouchableOpacity style={{width: '100%'}} onPress={onPress}>
                            <Text style={styles.name}>{name}</Text>
                        </TouchableOpacity>
                        <Entypo name="chevron-small-right" size={40} color="black" style={{marginLeft: 20, marginTop: 5,  width: '20%'}}/>
                        <TouchableOpacity style={styles.icons} >
                           
                            <Foundation name="trash" size={25} color="black" stylße={styles.trash}/>
                        </TouchableOpacity>
                          
                        </View>
                    
                        <Text style={styles.arroba}>@{hash}</Text>
                    </View>
                </View>
          
          </View>   
  );
 
  return (
    

      <SafeAreaView style={styles.container}>

       <FlatList
          data={data} 
          keyExtractor={data => data.id}
          renderItem={renderItem}
        />

    </SafeAreaView>
    
  
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
    height: '100%',
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
      fontSize: Typography.FONT_SIZE_20,
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
      marginTop: 15,
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


