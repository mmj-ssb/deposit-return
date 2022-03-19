import { Fragment, useContext } from 'react'
import { Card } from 'primereact/card'

import { DepositablesContext } from '../context/AppContext'

function Voucher ({ deposited }) {
  const { depositables } = useContext(DepositablesContext)

  const depositedInfo = Object.entries(depositables).map(([type, { value }]) =>
    <Fragment key={type}>
      <div className="text-2xl">{`${type.toUpperCase()}  (${value} NOK)`}</div>
      <p>Deposited: {deposited.filter(depositEvent => depositEvent[0] === type).length}</p>
    </Fragment>
  )

  const totalInfo = <>
    <div className="text-5xl mt-6">Total</div>
    <p className="font-bold text-2xl">
      {deposited.reduce((prev, cur) => prev + depositables[cur[0]].value, 0)} NOK
    </p>
  </>

  return (
    <Card>
      {depositedInfo}
      {deposited.length !== 0 && totalInfo}
    </Card>
  )
}

export default Voucher
