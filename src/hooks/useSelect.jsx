import React, {useState} from 'react'

const useSelect = (stateInicial) => {
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
        </select>
    )
    return [SelectNoticias]
}

export default useSelect
