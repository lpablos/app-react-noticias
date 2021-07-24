import React from 'react'
import PropTypes from 'prop-types'

const Noticia = ({nota}) => {
    const {urlToImage, url, title, description, source} = nota

    const imagen = urlToImage 
        ?   <div className="card-image">
                <img src={urlToImage} alt={title} />
                <div className="card-title">
                    {source.name}
                </div>
            </div> 
        : null
    return (
        <div className="col s12 m6 l4">
            <div className="card">
                {imagen}
                <div className="card-content">
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a 
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="waves-effect waves-light button"
                    >Ver Noticia Completa</a>
                </div>
            </div>
        </div>
    )
}
Noticia.propTypes = {
    nota : PropTypes.object.isRequired
}

export default Noticia
