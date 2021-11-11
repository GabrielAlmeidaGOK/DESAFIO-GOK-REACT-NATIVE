import AsyncStorage from '@react-native-async-storage/async-storage'
import { Params } from '../models/Params'


const STORAGE = '@save' //Chave AsyncStorage

//Puxar informações salvas
const getStorage = async (): Promise<Params[]> => {
  const save = await AsyncStorage.getItem(STORAGE)

  let saveUser: Params[] = []

  if (save != null) {
    saveUser = JSON.parse(save)
  }

  return saveUser
}

//Jogar informações para o cache
const saveUSER = async (org: Params): Promise<void> => {
  const save = await AsyncStorage.getItem(STORAGE)

  let saveUser: Params[] = []

  if (save != null) {
    saveUser = JSON.parse(save)
  }

  const existe = saveUser.includes(org)

  if (!existe) {
    saveUser.push(org)
  }

  await AsyncStorage.setItem(STORAGE, JSON.stringify(saveUser))
}

//Excluir conteúdo da memória
const SaveDelete = async (org: Params): Promise<void> => {
  const save = await AsyncStorage.getItem(STORAGE)

  let saveUser: Params[] = []

  if (save != null) {
    saveUser = JSON.parse(save)
  }

  const newArray = saveUser.filter(saveUser => saveUser.id !== org.id)

  await AsyncStorage.setItem(STORAGE, JSON.stringify(newArray))
}

export { getStorage, saveUSER, SaveDelete }