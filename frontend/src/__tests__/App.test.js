import useAxios from 'axios-hooks'
import { render } from '@testing-library/react'

import { AppContextProvider } from '../context/AppContext'
import App from '../App'

jest.mock('../components/Depositer', () => () => null)

const setup = () => {
  const { getByText } = render(
    <AppContextProvider>
      <App />
    </AppContextProvider>
  )

  return { getByText }
}

test('Does not crash', () => {
  useAxios.mockReturnValue([{ loading: false, error: null, data: {} }])

  setup()
})
