import useAxios from 'axios-hooks'
import { useContext, useEffect, useState } from 'react'

import 'primereact/resources/themes/lara-light-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { ApiContext, DepositablesContext } from './context/AppContext'
import { API, STATUS } from './configurations'
import Depositer from './components/Depositer'

function App () {
  const { api } = useContext(ApiContext)
  const { setDepositables } = useContext(DepositablesContext)

  const [ready, setReady] = useState(false)

  const [{ loading, error, data }] = useAxios(`${api}${API.GET_DEPOSITABLES}`, { useCache: false })

  useEffect(() => {
    if (!loading && !error && data !== undefined) {
      setDepositables(data)
      setReady(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, error, data])

  return (
    <>
      <div className="flex justify-content-end flex-wrap">
        <i
          className="pi pi-circle-fill"
          style={{ fontSize: '2rem', color: loading ? STATUS.loading : error ? STATUS.error : STATUS.positive }}
        />
      </div>
      {ready && <Depositer />}
    </>
  )
}

export default App
