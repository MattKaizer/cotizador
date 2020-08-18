import React from 'react';
import { letraCapital } from '../Helper'
import PropTypes from "prop-types";

import styled from "@emotion/styled";


const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {
    //extraer datos
    const {marca, year, plan} = datos;

    if (marca === '' || year === '' || plan === '') {
        return null
    }

    return ( 
        <ContenedorResumen>
        <h2>Resumen de Cotización</h2>
        <ul>
            <li>Marca: { letraCapital(marca) }</li>
            <li>Plan: { letraCapital(plan) }</li>
            <li>Año del Auto: {year}</li>
        </ul>
        </ContenedorResumen>
     );
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}

export default Resumen;