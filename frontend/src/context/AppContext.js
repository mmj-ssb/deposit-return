import { createContext, useState } from 'react'

export const ApiContext = createContext({ api: window.__ENV.REACT_APP_API })

export const DepositablesContext = createContext({ depositables: {} })

export const AppContextProvider = props => {
  const [api, setApi] = useState(window.__ENV.REACT_APP_API)
  const [depositables, setDepositables] = useState(null)

  return (
    <ApiContext.Provider value={{ api, setApi }}>
      <DepositablesContext.Provider value={{ depositables, setDepositables }}>
        {props.children}
      </DepositablesContext.Provider>
    </ApiContext.Provider>
  )
}
