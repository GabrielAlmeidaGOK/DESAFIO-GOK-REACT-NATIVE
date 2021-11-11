import React, { useState, useEffect, useCallback, useContext } from 'react'
import { Box, Divider, Input, Spinner, Text } from 'native-base'
import { useNavigation, useRoute } from '@react-navigation/native'
import { searchUsers } from '../../api/api-search';
import { Params } from '../../models/Params'
import {View, StyleSheet} from 'react-native'
import Container from '../../components/Container'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/Header'
import {Context} from '../../contexts/Context'
interface IRoute {
  params: { query: string }
  name: string
  key: string
}

export default function SearchScreen ({navigation} : any): JSX.Element {
  
  const { params }: IRoute = useRoute()

  const { userGit, saved, deleteSave } = useContext(Context)

  const { navigate } = useNavigation()
  const [query, setQuery] = useState(params.query)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [users, setUser] = useState<Params | null>(null)

  const handleSearch = async (): Promise<void> => {
    setLoading(true)
    setError(false)
    setUser(null)

    try {
      const response = await searchUsers(query)
   
      if (response === null) {
        setUser(null)
      } else {
        setUser(response)
        await AsyncStorage.setItem('users', JSON.stringify(response));
        /* console.log(response)   */    
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }


  const fetch = async () => {
    try {
      const data = await AsyncStorage.getItem('users');
      if (data !== null) {
        console.log(data);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

 
  const handle = (): void => {
    navigate('Starred', {
      query,
      users
    })

    setQuery('')
  }
  useEffect(() => {
    handleSearch() 
    fetch()
  }, [])

  const Dados = useCallback((): JSX.Element => {
    //Carregamento dos dados
   

    if (users != null) {
      return (
       
        <Container 
          onPress={handle}
          data={users}
          name={users.login}
          avatar={users.avatar_url}
          hash={users.login}
        />
    
       
      )
    }
   
    return (
      <Box flex={0.8} justifyContent='center' alignItems='center'>
       
        <Text textAlign='center'>Oops! Não encontramos organizações com este nome.</Text>
      </Box>
    )
  }, [loading, error, users])

  return (
    <View>
      <Header
        onPress={() => navigation.navigate('Home')}
      />

      <View style={styles.list}>
          <Dados/>
      </View>
  
    </View>
  )
}


const styles = StyleSheet.create({


  list: {
      alignSelf: 'center',
      marginTop: 40
  }
});
