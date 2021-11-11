import React, { createContext, ReactChild, useEffect, useState } from 'react'
import { getStorage, saveUSER, SaveDelete } from '../utils/storage'
import { Params } from '../models/Params'


interface ISave {
  userGit: Params[]
  saved: (usr: Params) => Promise<void>
  deleteSave: (usr: Params) => Promise<void>
}

export const Context = createContext<ISave>({} as ISave) 

interface ISavedProps {
  children: ReactChild
}

export function Saved ({ children }: ISavedProps): JSX.Element {
  const [userGit, setUserGit] = useState<Params[]>([])

  //Puxar informações
  const get = async (): Promise<void> => {
    const response = await getStorage()
    setUserGit(response)
  }

  //Salvar informações
  const saved = async (usr: Params): Promise<void> => {
    setUserGit(state => [...state, usr])
    await saveUSER(usr)
  }

  //Excluir informações
  const deleteSave = async (usr: Params): Promise<void> => {
    setUserGit(state => state.filter(val => val.id !== usr.id))
    await SaveDelete(usr)
  }

  useEffect(() => {
    get() 
  }, [])

  return (
    <Context.Provider value={{ userGit, saved, deleteSave }}>
      {children}
    </Context.Provider>
  )
}