import useAxios from 'axios-hooks'
import { useContext, useState } from 'react'

import { ApiContext } from '../context/AppContext'
import { API } from '../configurations'
import Actions from './Actions'
import Voucher from './Voucher'

function Depositer () {
  const { api } = useContext(ApiContext)

  const [deposited, setDeposited] = useState([])
  const [checkedOut, setCheckedOut] = useState(false)

  const [{ loading, error }, execute] = useAxios({ method: 'POST' }, { manual: true, useCache: false })

  const registerDeposit = type => setDeposited([...deposited, [type, Date.now()]])
  const registerCheckout = () => {
    execute({
      data: {
        timestamp: Date.now(),
        deposited: deposited
      },
      url: `${api}${API.REGISTER_CHECKOUT}`
    }).then(response => {
      if (response.status === 201) {
        setCheckedOut(true)
      }
    })
  }

  return (
    <div className="grid mt-8">
      <div className="col-3" />
      <div className="col-3">
        {!checkedOut && <Actions registerDeposit={registerDeposit} registerCheckout={registerCheckout} />}
      </div>
      <div className="col-3">
        <Voucher deposited={deposited} />
      </div>
      <div className="col-3" />
    </div>
  )
}

export default Depositer
