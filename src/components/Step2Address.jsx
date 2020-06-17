import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import InputItem from './InputItem'
import InputSelectRegiones from './InputSelectRegiones'
import InputSelectComunas from './InputSelectComunas'
import styled from 'styled-components'
import IconUbic from "../images/icon_ubicacion.svg";

const FormAdress = styled.div`
  width: 100%;
  max-width: 400px;
  margin-top: 30px;
  .select-title{
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: #7C6C8A;
  }
`

const Step2Adress = ({regionName, comunaName, addressName, addressNumName, disabledFields = false}) => {
  const [ regionsList, setRegionsList ] = useState([]);
  const [loaded,setLoaded] = useState(false)

  useEffect(() => {
    axios.get("/regiones-comunas-matrix2.json").then(res => {
      setRegionsList(res.data.regiones)
    })
    .then(()=>{
      setLoaded(true)
    });
  }, []);

  return (
    <FormAdress>
      <p className="select-title">Región</p>
      <InputSelectRegiones classAdd="full-width full-border" regionsList={regionsList} fieldName={regionName} comunaName={comunaName} disabledFields={disabledFields} loaded={loaded}/>
      <p className="select-title">Comuna</p>
      <InputSelectComunas classAdd="full-width full-border" regionsList={regionsList} loaded={loaded} fieldName={comunaName} regionField={regionName} disabledFields={disabledFields}/>
      <InputItem classAdd="full-width" nameInput={addressName} iconInput={IconUbic} nameLabel="Dirección" disabledFields={disabledFields} length="50"/>
      <InputItem classAdd="full-width" nameInput={addressNumName} iconInput={IconUbic} nameLabel="Depto / oficina / otro" disabledFields={disabledFields} length="50"/>
    </FormAdress>
  )
}

export default Step2Adress