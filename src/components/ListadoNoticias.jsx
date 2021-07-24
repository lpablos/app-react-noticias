import React from 'react'
import Noticia from './Noticia'

const ListadoNoticias = ({noticias}) => {
    return (
        <div className="row">
            {noticias.map( nota => (
                <Noticia
                    key={nota.url}
                    nota={nota}
                />
            ))}
        </div>
    )
}

export default ListadoNoticias
