import React, {useState} from 'react'

const useSelect = (stateInicial, opciones) => {
    const [state, setState] = useState(stateInicial)
    const SelectNoticias = () =>(
        <select 
            className="browser-default"
            name="" 
            id=""
            onChange={ e => setState(e.target.value)}
            value={state}            
        >
            <option value="">Selecciona</option>
            { opciones.map( opt =>(
                <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
        </select>
    )
    return [SelectNoticias]
}

export default useSelect
