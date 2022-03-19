import { useContext, useState } from 'react'
import { Button } from 'primereact/button'

import { DepositablesContext } from '../context/AppContext'

function Actions ({ registerDeposit, registerCheckout }) {
  const { depositables } = useContext(DepositablesContext)

  const [processing, setProcessing] = useState(false)

  const handleDeposit = type => {
    setProcessing(true)

    const timer = setTimeout(() => {
      registerDeposit(type)
      setProcessing(false)
    }, depositables[type].processingTime)

    return () => clearTimeout(timer)
  }

  const actionButtons = Object.entries(depositables).map(([type]) =>
    <Button
      key={type}
      className="mb-4"
      disabled={processing}
      label={`Deposit ${type}`}
      style={{ display: 'flex' }}
      onClick={() => handleDeposit(type)}
    />
  )

  return (
    <>
      {actionButtons}
      <Button className="mt-6" label="Checkout" disabled={processing} onClick={() => registerCheckout()} />
    </>
  )
}

export default Actions
