import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";

//Styled components
const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1ee;
    -webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width:100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: 3s ease;
    margin-top: 2rem;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
`;

const Formluario = () => {
//states
const [datos, setDatos] = useState({
  marca: '',
  year: '',
  plan: ''
})

//Error ctrl
const [error, setError] = useState(false)

//extraer valores
const { marca, year, plan } = datos;

//leer datos del form y se guardan en el state
const obtenerInfo = e => {
  setDatos({
    ...datos,
    [e.target.name] : e.target.value
  })
}

//al submit
const cotizarSeguro = e => {
  e.preventDefault();

  if (marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
     setError(true)
     return
  }
  setError(false)
}

  return (
    <Fragment>
      <form
        onSubmit={cotizarSeguro}
      >
      { error ? <Error>Todos los campos son Obligatorios</Error> : null}
        <Campo>
          <Label>Marca</Label>
          <Select
            name="marca"
            value={marca}
            onChange={obtenerInfo}
          >
            <option value="">-- Seleccione --</option>
            <option value="americano">Americano</option>
            <option value="europeo">Europeo</option>
            <option value="asiatico">Asiático</option>
          </Select>
        </Campo>
        <Campo>
          <Label>Año</Label>
          <Select
            name="year"
            value={year}
            onChange={obtenerInfo}
          >
            <option value="">-- Seleccione --</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
          </Select>
        </Campo>

        <Campo>
          <Label>Plan</Label>
          <InputRadio 
            type="radio" 
            name="plan" 
            value="basico"
            checked={plan === "basico"}
            onChange={obtenerInfo}
          />
          Básico
          <InputRadio 
            type="radio" 
            name="plan" 
            value="completo"
            checked={plan === "completo"}
            onChange={obtenerInfo}
          />
          Completo
        </Campo>
        <Button type="submit">Cotizar</Button>
      </form>
    </Fragment>
  );
};

export default Formluario;
