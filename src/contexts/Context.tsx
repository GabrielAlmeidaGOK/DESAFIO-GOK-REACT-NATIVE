import React, { createContext, ReactChild, useState } from 'react'

import { Params } from '../models/Params'


interface ISave {
  organizations: Params[]
}

export const Context = createContext<ISave>({} as ISave) 

interface ISavedProps {
  children: ReactChild
}

export function Saved ({ children }: ISavedProps): JSX.Element {
  const [organizations, setOrganizations] = useState<Params[]>([])



  return (
    <Context.Provider value={{ organizations }}>
      {children}
    </Context.Provider>
  )
}
