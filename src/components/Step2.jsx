import React, { useContext, useEffect, useState, useCallback } from "react";
import styled from 'styled-components';
import { ValidationContext } from "../context/ValidationContext";
import { FormContext } from "../context/FormContext";
import CheckboxOn from '../images/checkbox-on.svg'
import Step2Address from "./Step2Address";
import PlanType from './PlanType'
import PrevButton from './PrevButton'
import NextButton from './NextButton'
import TitleBlock from "./TitleBlock";
import ReactGA from 'react-ga'


const PlanTypeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;
  margin-top:30px;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-top:30px;
`
const BajadaText = styled.p`
  color: #7C6C8A;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  @media(max-width: 480px){
    text-align: left;
    max-width: 400px;
  }
`
const ConditionCheck = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width:100%;
  max-width: 400px;
  padding-top:20px;
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
    font-size: 16px;
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
      height: 24px;
      width: 24px;
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
      transition: background-color .3s, background-image .5s, border-color .3s;
      @media(max-width: 480px){
        height: 25px;
        width: 25px;
      }
    }
  }
`

const Step2 = () => {
  const { validationData, setValidationData } = useContext(ValidationContext);
  const { formData, setFormData } = useContext(FormContext);
  const [ disabledFields, setDisabledFields ] = useState(false)

  useEffect(()=>{
    setFormData({...formData,successFlow:false})
    window.scrollTo(0, 0)
    ReactGA.pageview(window.location.pathname+`/?plan=${formData.selectedPlan}`);
    setFormData({...formData,successFlow:false,dispatchRegion:'',dispatchComuna:''})
    setValidationData({...validationData,dispatchRegion:false,dispatchComuna:false})
  },[])

  const populateContract = () => {
    const region = formData.dispatchRegion
    const comuna = formData.dispatchComuna
    const direccion = formData.dispatchAddress
    const direccion2 = formData.dispatchAddressNum
    let formValidityState = {
      contractRegion: false,
      contractComuna: false,
      contractAddress: false,
      contractAddressNum: false
    }

    setDisabledFields(!disabledFields)
    setFormData({...formData, contractRegion:region, contractComuna:comuna, contractAddress:direccion, contractAddressNum:direccion2})
    validationData.dispatchRegion ? formValidityState = {...formValidityState, contractRegion:true} : formValidityState = {...formValidityState, contractRegion:false}
    validationData.dispatchComuna ? formValidityState = {...formValidityState, contractComuna:true} : formValidityState = {...formValidityState, contractComuna:false}
    validationData.dispatchAddress ? formValidityState = {...formValidityState, contractAddress:true, contractAddressNum:true} : formValidityState = {...formValidityState, contractAddress:false, contractAddressNum:false}
    setValidationData({...validationData,...formValidityState})
  }
  return (
    <>
      <TitleBlock classAdd="text-center mb-20 light-purple font-20-px" titulo="Datos de despacho a domicilio" />
      <BajadaText>Rellena los campos con la dirección donde despacharemos tu producto.</BajadaText>
      <Step2Address regionName='dispatchRegion' comunaName='dispatchComuna' addressName='dispatchAddress' addressNumName='dispatchAddressNum'/>
      <PlanTypeContainer>
        <PlanType
          title="Despacho a domicilio"
          subtitle="Desde 5 días hábiles"
          subtitle2="GRATIS"
          type="Despacho a domicilio"
          selected={true}
          dataName='dispatchType'
        />
      </PlanTypeContainer>
      
      <ButtonContainer>
        <PrevButton
          stepNum="Volver"
          stepTitle="Tus Datos"
          route={`/?plan=${formData.selectedPlan}`}
        />
        <NextButton
          stepNum="3"
          stepTitle="Resumen Final"
          route="/paso3"
          status={
            validationData.dispatchRegion &&
            validationData.dispatchComuna &&
            validationData.dispatchAddress 
            ? "active"
            : "innactive"
          }
        />
      </ButtonContainer>
      
    </>
  );
};
export default Step2;
