import React, { useState, useEffect, useCallback } from 'react'
import { Box, Input, Spinner, Text, FlatList, Divider, Button } from 'native-base'
import { View, Image, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import {Typography, Colors} from '../../styles'

import { Params } from '../../models/Params'



export default function HomeScreen (): JSX.Element {
  const { navigate } = useNavigation()

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [query, setQuery] = useState('')

  const [users, setUsers] = useState<Params[]>([])

 
  const handleSearch = (): void => {
    navigate('Search', {
      query
    })

    setQuery('')
  }

  const getUsers = async (): Promise<void> => {
    try {
      const response: any = await getUsers()

      setUsers(response)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }


  useEffect(() => {
    getUsers() // eslint-disable-line
  }, [])



   


  return (
    <Box bg='background.50' paddingX={5} paddingY={10} flex={1}>
       <SafeAreaView style={styles.safe}>

        <Image 
            source={require('../../../assets/images/image.png')}  
            width={100} 
            height={100} 
            resizeMode='contain'
        />

        </SafeAreaView>
        <Text style={styles.text}>Buscar usuário</Text>

        <Text style={styles.subtitle}>Crie sua conta através do seu usuário do GitHub</Text>

        <View style={{flexDirection:'row', alignSelf: 'center'}}>

            <TextInput 
                placeholder='@username'
                style={styles.input}
                value={query}
                onChangeText={setQuery}
                onSubmitEditing={handleSearch}
            />
            
            <Image 
                style={styles.inputStyle}
                source={require('../../../assets/images/account.png')}
            /> 

        </View>
          


<TouchableOpacity style={styles.button} onPress={() => handleSearch()}>
    <Text style={styles.textButton}>Cadastrar</Text>
</TouchableOpacity>
<Text style={styles.private}>Termos de política e privacidade</Text>


   

    </Box>
  )
}


const styles = StyleSheet.create({
  container: {
      flex:1,
      justifyContent:'center'
  },

  safe: {
      alignSelf: 'center',
      alignContent: 'center',
  },

  text: {
      fontSize: Typography.FONT_SIZE_21,
      fontWeight: 'bold',
      color: Colors.TEXT,
      marginTop: 70,
      marginLeft: 35
  },

  subtitle: {
      fontSize: Typography.FONT_SIZE_18,
      color: Colors.SUB_TITLE,
      width:'70%',
      marginLeft: 35,
      marginTop: 15
  },


  inputStyle: {
      width: 24,
      height: 24,
      marginTop: 45,
      marginLeft: 10,
      position: 'absolute'
  },

  input: {
      borderRadius: 8,
      borderColor: Colors.BORDER,
      borderWidth: 1,
      alignSelf: 'center',
      width: '85%',
      height: 50,
      marginTop: 30,
      paddingLeft: 40
  },

  button:{
      width: '80%',
      backgroundColor: Colors.TEXT,
      height: 50,
      alignSelf: 'center',
      borderRadius: 24,
      marginTop: 30
  },

  textButton: {
      color: Colors.BUTTON_TEXT,
      textAlign:'center',
      marginTop: 12,
      fontSize: Typography.FONT_SIZE_18,
  },

  private:{
      color: Colors.PRIVATE,
      fontSize: Typography.FONT_SIZE_20,
      textAlign: 'center',
      marginTop: 90,
      bottom: 0
  }
})
