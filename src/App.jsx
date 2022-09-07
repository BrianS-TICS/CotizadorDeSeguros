import { useState } from 'react'
import AppSeguro from './components/AppSeguro'
import { CotizadorProvider } from './context/CotizadorProvider'
function App() {

  return (
    <div >
      <CotizadorProvider>
        <AppSeguro />
      </CotizadorProvider>
    </div>
  )
}

export default App
