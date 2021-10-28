import React, { useState, useEffect, useCallback } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Params } from '../../models/Params'
import {SafeAreaView, Text, StyleSheet, FlatList, View} from 'react-native'
import {Colors, Typography} from '../../styles'
import { Entypo, Foundation, FontAwesome} from '@expo/vector-icons';
import Header from '../../components/SearchHeader'
import api from '../../api/api'
import { backgroundColor } from 'styled-system'


interface IRoute {
  params: { query: string }
 
  name: string
  key: string
}

export default function SearchScreen (): JSX.Element {

    const { params }: IRoute = useRoute()
  const { navigate } = useNavigation()
  const [query, setQuery] = useState(params.query)
  const [star, setStar] = useState<Params[]>([])
  const [organization, setOrganization] = useState<Params | null>(null)
  

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function getStarredRepos() {
        
      const response = await api.get(`/users/${query}/starred`);

      setStar(response.data);
   
    }

    getStarredRepos();
  }, []);

 
  return (
    <SafeAreaView style={styles.container}>
       
        <Header />
        <FlatList
        data={star} 
        
        renderItem={({ item }: any) => (
            <View style={styles.item}>
                
                <View style={styles.nameImage}>
                    
                   
                        <View style={styles.containIcon}>
                
                            <Text style={styles.name}>{item.name}</Text>
                            
                       
                            <Entypo name="chevron-small-right" size={40} color="black"/>
                           
                            <FontAwesome name="star" size={24} color="#FFC700" style={styles.star}/>
                        
                        </View>
                        <Text style={styles.name}>{item.description}</Text>
                   
                </View>
        
            </View>   
        
        )}
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
   
    },
  
    item: {
      backgroundColor: Colors.WHITE,
      alignSelf: 'center',
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
      flexDirection: 'column',
      width: '90%',
      marginTop: 20
    },
  
    image: {
        width: 70,
        height: 70,
        borderRadius: 40,
        marginTop: 15
    },
  
    name: {
        fontSize: Typography.FONT_SIZE_14,
        marginLeft: 20,
        marginTop: 10,
        width: '100%'
    },
  
    arroba: {
      fontSize: Typography.FONT_SIZE_21,
      marginLeft: 20,
      width: '40%'
    },
  
    nameContain: {
        flexDirection: 'column'
    },
  
    containIcon:{
        flexDirection: 'row',
        width: '85%'
    },
  
    icons: {
        flexDirection: 'row',
        marginTop: 10,
        alignContent: 'flex-end',
        justifyContent: 'space-between',
   
    },
  
    star: {
        backgroundColor: Colors.STAR,
        borderRadius: 12,
        textAlign: 'center',
        textAlignVertical: 'center',
        width: 40,
        height: 40
    },
  
    org: {
        marginTop: 15
    }
  
  });
  