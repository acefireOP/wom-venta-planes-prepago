import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import firebase from 'firebase';
import 'firebase/firestore'
import { FormContext } from "../context/FormContext";
import CheckboxOn from '../images/checkbox-on.svg'
import document from '../assets/Terminos_y_Condiciones-Venta_de_planes.pdf'
import ReactGA from 'react-ga'

const Conditions = styled.div`
  width: 100%;
  max-width: 768px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  @media(max-width: 640px){
    flex-direction: column;
    align-items: center;
  }
  .condition-check{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media(max-width: 640px){
      margin-bottom: 20px;
    }
    input {
      display: none;
      &:checked + label{
        &:after {
          background-color:#E92070;
          background-image: url(${CheckboxOn});
          border-color:#E92070;
          transition: background-color .5s, background-image .5s, border-color .5s;
        }
      }
    }
    label{
      padding-left: 40px;
      position: relative;
      color: #7C6C8A;
      text-decoration-line: underline;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      cursor: pointer;
      a{
        color: #7C6C8A;
        text-decoration-line: underline;
        text-transform: uppercase;
      }
      @media(max-width: 480px){
        font-size: 12px;
      }
      &:after{
        content: "";
        height: 30px;
        width: 30px;
        border: 1px solid#FF006F;
        border-radius: 2px;
        background-color: transparent;
        background-position: center center;
        background-repeat: no-repeat;
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: auto;
        margin: auto;
        transition: background-color .5s, background-image .5s, border-color .5s;
        @media(max-width: 480px){
          height: 25px;
          width: 25px;
        }
      }
    }
  }
  .btn-request{
    width: 100%;
    max-width: 300px;
    background-color: #E92070;
    border-radius: 8px;
    text-decoration: none;
    color: #ffffff;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
    padding: 14px 20px;
    border: none;
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    transition: background-color .3s;
    &:hover{
      background-color: #8e1344;
    }
    &.disabled{
      background-color: #B3A6BA;
      pointer-events: none;
    }
  }

`

const Step3Conditions = () => {
  const [ checked, setChecked ] = useState(false)
  const [ sending, setSending ] = useState(false)
  const { formData } = useContext(FormContext);
  const history = useHistory();
  const handleClick = () =>{
    const sendDate = new Date().toUTCString();
    let ventaPlanesRef = firebase.firestore().collection('venta-prepago-test');
    setSending(true);
    ReactGA.set(formData);
    ventaPlanesRef.add({
        creationDate:sendDate,
        selectedPlan:formData.selectedPlan,
        planType:formData.planType,
        rut:formData.rut,
        ci:formData.ci,
        name:formData.name,
        lastName:formData.lastName,
        phone:formData.phone,
        email:formData.email,
        phoneToMigrate:formData.phoneToMigrate,
        originPlanType:formData.originPlanType,
        previousCarrier:formData.previousCarrier,
        dispatchRegion:formData.dispatchRegion,
        dispatchComuna:formData.dispatchComuna,
        dispatchAddress:formData.dispatchAddress,
        dispatchAddressNum:formData.dispatchAddressNum,
        contractRegion:formData.contractRegion,
        contractComuna:formData.contractComuna,
        contractAddress:formData.contractAddress,
        contractAddressNum:formData.contractAddressNum,
        dispatchType:formData.dispatchType,
        isProcesed:formData.isProcesed,
        processed: 0
    })
    .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id);
        history.push("/paso4");
    })
    .catch(function(error) {
        console.error('Error adding document: ', error);
    });
  }
  return (
    <Conditions>
      <div className="condition-check">
        <input 
          type="checkbox" 
          id="precio-2" 
          value="2" 
          onClick={() => setChecked(!checked)}
        />
        <label htmlFor="precio-2"><a href={document} target="_blank" rel="noopener noreferrer">aceptar términos y condiciones</a></label>
      </div>
      <button 
        className={checked ? "btn-request" : "btn-request disabled"}
        onClick={handleClick}
      >{sending ? 'Enviando...':'Ingresar solicitud'}</button>
    </Conditions>
  )
}

export default Step3Conditions