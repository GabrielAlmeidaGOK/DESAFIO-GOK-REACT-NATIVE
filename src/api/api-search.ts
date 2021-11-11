//Endpoint para busca
import { Params } from '../models/Params'
import AsyncStorage from '@react-native-async-storage/async-storage';
const URL = 'https://api.github.com'


const searchUsers = async (username: string): Promise<Params | null> => {
  const response = await fetch(`${URL}/users/${username}`)

  const data: Params = await response.json()

  if (data.message != null) {
    return null
  } else {
    return data
  }
}

export {searchUsers} 
