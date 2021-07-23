import React, {Fragment} from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
// e2e4e383ef114bc1ad90d8b3b24645a3
const App = () => {
  
  return (
    <Fragment>
      <Header titulo = 'App React Noticias'/>
      <div className="container white">
        <Formulario/>
      </div>
    </Fragment>
  )
}

export default App
