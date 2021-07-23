import React, {Fragment} from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'

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
