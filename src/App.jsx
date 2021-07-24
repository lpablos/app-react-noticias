import React, {Fragment, useState, useEffect} from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoNoticias from './components/ListadoNoticias'
import axios from 'axios'
// e2e4e383ef114bc1ad90d8b3b24645a3
const App = () => {
  const [categoria, setCategoria] = useState('')
  const [noticias, setNoticias] = useState([])

  // 
  useEffect(() => {
    const consultarAPI = async() => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=e2e4e383ef114bc1ad90d8b3b24645a3`;
      const respuesta = await axios.get(url)
      setNoticias(respuesta.data.articles)
      // console.log("Esta es la respues de la peticion", respuesta.data);
    }
    consultarAPI()
  }, [categoria])
  return (
    <Fragment>
      <Header titulo = 'App React Noticias'/>
      <div className="container white">
        <Formulario
          setCategoria= {setCategoria}
        />
        <ListadoNoticias
          noticias = { noticias }
        />
      </div>
    </Fragment>
  )
}

export default App
