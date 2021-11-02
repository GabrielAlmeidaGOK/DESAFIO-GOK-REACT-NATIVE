import React, { useState, useEffect, useCallback } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Params } from '../../models/Params'
import {SafeAreaView, Text, StyleSheet, FlatList, View, Image, Linking} from 'react-native'
import {Colors, Typography} from '../../styles'
import { Entypo, Foundation, FontAwesome} from '@expo/vector-icons';
import Header from '../../components/SearchHeader'
import api from '../../api/api'


import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { fontWeight } from 'styled-system'


interface IRoute {
  params: { query: string }
 
  name: string
  key: string
}

export default function SearchScreen ({navigation}: any): JSX.Element {

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
       
        <Header 
          navigation={() => navigation.navigate('Search')}
        />
        <View style={styles.containerInput}>
          
          <Image
            source={require('../../../assets/images/search.png')}
            style={styles.ImageStyle}
          />
          <TextInput
            placeholder='Buscar um repositório...'
            style={styles.input}
          />

        <View style={styles.filter}>
          <Image
              source={require('../../../assets/images/filter_list.png')}
              style={styles.filterIcon}
          />  
        </View>
          

        </View>
       

        <FlatList
          data={star} 
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }: any) => (
            <View style={styles.item}>
                
                <View style={styles.nameImage}>
                    
                   
                        <View style={styles.containIcon}>
                          <TouchableOpacity  style={styles.containIcon} onPress={async () => await Linking.openURL(`${item.html_url}`)}>
                            <Text style={styles.title}>{item.name}</Text>
                          </TouchableOpacity>
                           
                           
                       
                            <Entypo name="chevron-small-right" size={40} color="black"/>
                           
                            <FontAwesome name="star" size={24} color="#FFC700" style={styles.star}/>
                        
                        </View>

                        <View style={styles.edit}>
                            <Text>#JavaScript</Text>
                            <Text>#Front End</Text>

                            <View style={styles.editIconContain}>  
                              <Image style={styles.editIcon} resizeMode='contain'source={require('../../../assets/images/edit.png')}/>
                            </View>
                  
                        </View>

                        <Text style={styles.name}>{item.description}</Text>

                        <View style={styles.languages}>

                          <View style={styles.containAtributes}>

                            <Image style={styles.imageContain} source={require('../../../assets/images/language.png')}/>
                            <Text style={styles.namelanguage}>{item.language}</Text>

                          </View>

                          <View style={styles.containAtributes}>

                            <Image style={styles.imageContain} source={require('../../../assets/images/star.png')}/>
                            <Text>{item.stargazers_count}</Text>

                          </View>

                          <View style={styles.containAtributes}>

                            <Image style={styles.imageContain} source={require('../../../assets/images/supervisor_account.png')}/>
                            <Text>{item.watchers}</Text>

                          </View>

                      {/*     <View style={styles.containAtributes}>

                            <Image style={styles.imageContain} source={require('../../../assets/images/access_time.png')}/>
                            <Text>{item.created_at}</Text>

                          </View> */}

                        </View>
                        
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

    containerInput: {
      justifyContent: 'center',
      flexDirection: 'row'
    },

    ImageStyle: {
      position: 'absolute',
      marginTop: 18,
      marginLeft: 10,
      left: 30,
      zIndex: 999
    },

    input: {
      backgroundColor: Colors.WHITE,
      width: '77%',
      height: 50,
      borderRadius: 8,
      alignSelf: 'flex-start',
      paddingLeft: 50,
      fontSize: Typography.FONT_SIZE_18
    },

    filter: {
      width: '10%',
      marginLeft: 10,
      borderRadius: 8,
      backgroundColor: Colors.WHITE,
      height: 50,
    },

    filterIcon: {
      marginLeft: 13,
      marginTop: 18
    },

    edit: {
      flexDirection: 'row',
      width: '100%',
      marginLeft: 20
    },

    editIcon: {
      marginLeft: 6,
      marginTop: 5, 
      width: 14,
      height: 14,

    },
    
    editIconContain: {
      borderRadius: 30,
      marginLeft: 20,
      backgroundColor: 'blue',
      width: 25,
      height: 25
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
      fontSize: Typography.FONT_SIZE_12,
        marginLeft: 20,
        marginTop: 10,
        fontWeight: 'bold',
        width: '100%'
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
        fontWeight: 'bold',
        width: '100%'
    },
    
    languages: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      height: 20,
      borderRadius: 12,
      marginLeft: 10,
      marginTop: 10
    },

    namelanguage: {
        fontSize: Typography.FONT_SIZE_14,
        color: Colors.SUB_TITLE,
        marginRight: 20,
        height: 40,
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
    },

    containAtributes: {
      flexDirection: 'row', 
      width: '30%',
    },

    imageContain: {
      marginTop: 3,
      marginRight: 10
    }
  
  });
  