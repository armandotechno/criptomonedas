import React, { Fragment, useState } from 'react';

const useMoneda = (label, stateInicial, opciones) => {

    //State de nuesto custom hook
    const [state, actualizarState] = useState(stateInicial);

    const Seleccionar = () => (
        <Fragment>
            <label>{label}</label>
            <select>
                <option value="">- Seleccione -</option>
                {opciones.map(opcion => (
                    <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>

                ))}
            </select>
        </Fragment>
    );

    // Retornar el state, interfaz y fn que modifica el state
    return [state, Seleccionar, actualizarState];
}

export default useMoneda;