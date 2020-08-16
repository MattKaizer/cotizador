import React, { Fragment } from "react";
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

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
`;

const Formluario = () => {
  return (
    <Fragment>
      <form>
        <Campo>
          <Label>Marca</Label>
          <Select>
            <option value="">-- Seleccione --</option>
            <option value="americano">Americano</option>
            <option value="europeo">Europeo</option>
            <option value="asiatico">Asiático</option>
          </Select>
        </Campo>
        <Campo>
          <Label>Año</Label>
          <Select>
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
          <InputRadio type="radio" name="plan" value="basico" />
          Básico
          <InputRadio type="radio" name="plan" value="completo" />
          Completo
        </Campo>
        <Button type="button">Cotizar</Button>
      </form>
    </Fragment>
  );
};

export default Formluario;