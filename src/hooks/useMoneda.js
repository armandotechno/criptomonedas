import React, { Fragment, useState } from 'react';

const useMoneda = () => {

    //State de nuesto custom hook
    const [state, actualizarState] = useState('');

    const Seleccionar = () => (
        <Fragment>
            <label>Moneda</label>
            <select>
                <option value="MXXN">Peso Mexicano</option>
            </select>
        </Fragment>
    );

    // Retornar el state, interfaz y fn que modifica el state
    return [state, Seleccionar, actualizarState];
}

export default useMoneda;