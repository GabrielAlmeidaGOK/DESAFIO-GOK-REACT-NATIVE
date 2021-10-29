import React, { useState, useEffect, useCallback } from 'react'
import { Box, Divider, Input, Spinner, Text } from 'native-base'
import { useNavigation, useRoute } from '@react-navigation/native'
import { searchUsers } from '../../api/api-search';
import { Params } from '../../models/Params'
import {View, StyleSheet} from 'react-native'
import Container from '../../components/Container'

import Header from '../../components/Header'

interface IRoute {
  params: { query: string }
  name: string
  key: string
}

export default function SearchScreen ({navigation} : any): JSX.Element {
  const { params }: IRoute = useRoute()

  const { navigate } = useNavigation()
  const [query, setQuery] = useState(params.query)

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [organization, setOrganization] = useState<Params | null>(null)

  const handleSearch = async (): Promise<void> => {
    setLoading(true)
    setError(false)
    setOrganization(null)

    try {
      const response = await searchUsers(query)

      if (response === null) {
        setOrganization(null)
      } else {
        setOrganization(response)
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

 
  const handle = (): void => {
    navigate('Starred', {
      query,
      organization
    })

    setQuery('')
  }
  useEffect(() => {
    handleSearch() 

  }, [])

  const Dados = useCallback((): JSX.Element => {
    //Carregamento dos dados
   

    if (organization != null) {
      return (
        <Container organization={organization} onPress={handle}/>
      )
    }

    return (
      <Box flex={0.8} justifyContent='center' alignItems='center'>
       
        <Text textAlign='center'>Oops! Não encontramos organizações com este nome.</Text>
      </Box>
    )
  }, [loading, error, organization])

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
