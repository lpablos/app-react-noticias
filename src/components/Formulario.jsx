import React from 'react'
import styles from './Formulario.module.css'
import useSelect from '../hooks/useSelect'

const Formulario = () => {
    // Utiliar custom hooks
    const [SelectNoticias] = useSelect('');
    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form action="">
                    <h2 className={styles.heading}>Encuenta noticias por categoría</h2>
                    <SelectNoticias/>
                    <div className="input-field col s12">
                        <input 
                            type="submit" 
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Formulario
