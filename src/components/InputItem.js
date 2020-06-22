import React, {useState,useContext,useEffect} from 'react'
import styled from 'styled-components'
import { FormContext } from "../context/FormContext";
import { ValidationContext } from "../context/ValidationContext";
import IconValid from '../images/formulario/icon_valid.svg'
import IconInvalid from '../images/formulario/icon_error.svg'
import IconExclamation from '../images/formulario/icon_invalid.svg'
import IconTrailing from '../images/formulario/icon_trailing.svg'
import Tooltip from '../images/tooltip_ci.svg'
import { validate } from 'rut.js'

const InputContainer = styled.div`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 30px;
  position: relative;
  @media(max-width: 480px){
    width: 100%;
  }
  &.full-width{
    width: 100%;
  }
  .input-icon{
    position: absolute;
    left: 8px;
  }
  .input-text{
    width: 100%;
    height: 48px;
    border: none;
    border-bottom: 1px solid #7C6C8A;
    padding: 10px 35px 10px 33px;
    font-size: 16px;
    color: #2D1441;
    outline: none;
    border-top-left-radius:8px;
    border-top-right-radius:8px;
    transition:background 0.2s ease;
    &.phonefocus{
      padding: 10px 35px 10px 63px;
    }
    &.active{
      padding: 20px 20px 10px 33px;
      &.phonefocus{
        padding-left:63px;
      }
    }
    &.disabled { 
      pointer-events:none;
      background:#E6E2E8;
    }
    &:-webkit-autofill {
      box-shadow: 0 0 0px 1000px #ffffff inset;
      transition: background-color 5000s ease-in-out 0s;
      &:hover {
        box-shadow: 0 0 0px 1000px #ffffff inset;
        transition: background-color 5000s ease-in-out 0s;
      }
      &:focus {
        input {
          &:-webkit-autofill {
            box-shadow: 0 0 0px 1000px #ffffff inset;
            transition: background-color 5000s ease-in-out 0s;
          }
        }
      }
    }

  }

  .input-label{
    position: absolute;
    left: 33px;
    color: #7C6C8A;
    font-size: 16px;
    transition: transform .3s, color .3s, font-size .3s;
    pointer-events: none;
    &.phonefocus{
      left:65px;
      &:after{
        display:block;
        content:'+56 ';
        opacity:0.8;
        font-size: 16px;
        color: #2D1441;
        position:absolute;
        left:-35px;
        top:4px;
        height:20px;
        width:20px;
        transition: transform .3s
      }
    }
    &.active{
      font-size: 12px;
      line-height: 15px;
      color: #9B2EED;
      transform: translateY(-12px);
      &.phonefocus{
        transform: translateY(-12px)translateX(-30px);
      }
      &.phonefocus:after{
        transform: translateY(12px)translateX(30px);
      }
    }
  }
  .icon-valid{
    position: absolute;
    right: 10px;
    opacity: 0;
    transform: translateX(10px);
    transition: transform .3s, opacity .3s;
    &.active{
      opacity: 1;
      transform: translateX(0px);
    }
  }
  .icon-invalid{
    position: absolute;
    right: 8px;
    opacity: 0;
    transform: translateX(10px);
    transition: transform .3s, opacity .3s;
    &.active{
      opacity: 1;
      transform: translateX(0px);
    }
  }
  .icon-trailing{
    position: absolute;
    right: 10px;
    opacity: 0;
    transform: translateX(10px);
    transition: transform .3s, opacity .3s;
    cursor: pointer;
    &.active{
      opacity: 1;
      transform: translateX(0px);
    }
    &:before{
      content: '';
      display: block;
      background: url(${Tooltip});
      background-repeat: no-repeat;
      width: 359px; /* image width */
      height: 170px;
      max-height: 170px;
      position: absolute;
      bottom: 35px;
      right: -63px;
      opacity: 0;
      transition:  opacity .6s;
      pointer-events: none;
      @media(max-width: 640px){
        right: -35px;
      }
    }
    &:hover{
      &:before{
        opacity: 1;

      }
    }
  }
  .example-input{
    font-size: 12px;
    line-height: 15px;
    font-weight: 300;
    color: #7C6C8A;
    position: absolute;
    bottom: -20px;
    left: 7px;
    user-select: none;
  }
`


const InputItem = ({ nameInput, iconInput, nameLabel, length, fieldType = 'text',classAdd, exampleInput, disabledFields = false, patternL}) => {
  const { formData, setFormData } = useContext(FormContext);
  const { validationData, setValidationData } = useContext(ValidationContext);
  const [ inputValue, setInputValue ] = useState(formData[nameInput])
  const [ invalidForm, setInvalidForm ] = useState(false)
  const [ focused, setFocused ] = useState(false)

  useEffect(()=>{
    setFormData({...formData,[nameInput]:inputValue})
  },[inputValue])

  useEffect(()=>{
      blurValidation();
  },[])

  const blurValidation = () => {
    const invalidSetter = (field,status,shown) => (
      setValidationData({...validationData,[field]:status}),
      setInvalidForm(shown)
    )
    const ciInvalidSetter = (ci) => {
      const re = /^[aA0-9]{3}.?\d{3}.?\d{3}$/;
      /*const re = /^[0-9]{3}.?\d{3}.?\d{3}$/;*/
      /*const re = /^[0-9]{3}[.]{1}\d{3}[.]{1}\d{3}$/*/
      /*const re = /^[aA0-9]{1}[aA0-9]{8,10}/g*/
      return re.test(ci)
    }
    	
    /*/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/*/
    /*/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/*/

    const emailInvalidSetter = (ci) => {
      const re = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
      return re.test(ci)
    }
    /*const nameInvalidSetter = (ci) => {
      const re = /[a-z0-9ñçáéíóú\s]/i
      return re.test(ci)
    }*/
    
    /*const onlyNum = (nume) => {
      var regex_num_celular = /^[0-9]{9}$/
      return regex_num_celular.test(nume)
    }*/

    const onlyLetter = (letter) => {
      let regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g;
      return regex.test(letter);
    }
    const letterAndNumber = (ln) => {
      let regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ0-9\s]+$/g
      return regex.test(ln)
    }

    if (nameInput === 'rut') {
      validate(inputValue) ? (invalidSetter('rut',true,false)) : (invalidSetter('rut',false,true))
      inputValue === '' && (invalidSetter('rut',false,false))
    }
    if (nameInput === 'ci') {
      ciInvalidSetter(inputValue) ? (invalidSetter('ci',true,false)) : (invalidSetter('ci',false,true))
      inputValue === '' && (invalidSetter('ci',false,false))
    }
    if (nameInput === 'name' || nameInput === 'lastName' || nameInput === 'contractAddress' || nameInput === 'contractAddressNum' || nameInput === 'dispatchAddress' || nameInput === 'dispatchAddressNum') {
      inputValue.trim() === '' ? (setValidationData({...validationData,[nameInput]:false})): (setValidationData({...validationData,[nameInput]:true}))
    }
    if(nameInput === 'name' || nameInput === 'lastName'){
      onlyLetter(inputValue) && inputValue.trim() ? (setValidationData({...validationData,[nameInput]:true},invalidSetter([nameInput],true,false))): (setValidationData({...validationData,[nameInput]:false},invalidSetter([nameInput],false,true)))
      inputValue === '' && (invalidSetter([nameInput],false,false))
    }
    if(nameInput === 'dispatchAddress'){
      letterAndNumber(inputValue) && inputValue.trim() ? (setValidationData({...validationData,[nameInput]:true},invalidSetter([nameInput],true,false))): (setValidationData({...validationData,[nameInput]:false},invalidSetter([nameInput],false,true)))
      inputValue === '' && (invalidSetter([nameInput],false,false))
    }
    if (nameInput === 'phone' || nameInput === 'phoneToMigrate') {
      inputValue === '' || inputValue.length < 9 || inputValue.length > 9 ? (setValidationData({...validationData,[nameInput]:false})): (inputValue.length === 9 && setValidationData({...validationData,[nameInput]:true}))
    }
    if (nameInput === 'email') {
      emailInvalidSetter(inputValue) ? (invalidSetter('email',true,false)) : (invalidSetter('email',false,true))
      inputValue === '' && (invalidSetter('email',false,false))
    }
    ((nameInput === 'phone' || nameInput === 'phoneToMigrate') && inputValue === '') && setFocused(false)
  }
  /*function onlyNumbers(evt){
    let charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
    evt.preventDefault()
  }*/
  function onlyNumbers(event) {
    const regex = new RegExp("^[0-9 ]+$");
    const key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
      event.preventDefault();
      return false;
    }
  }
  /*function lettersAndNumbers(evt){
    let charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode < 48) || (charCode > 57) && (charCode < 65) || (charCode > 90) && (charCode < 97) || (charCode > 122))
    evt.preventDefault()
  }*/
  function lettersAndNumbers(event){
    const regex = new RegExp("^[A-Za-zÁÉÍÓÚáéíóúñÑ0-9 ]+$");
    const key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
      event.preventDefault();
      return false;
    }
  }
  const test = ()=>{
    (nameInput === 'phone' || nameInput === 'phoneToMigrate') && setFocused(true) 
  }

  return (
    <InputContainer className={classAdd}>
      <img className="input-icon" src={iconInput} alt="rut" />
      <input 
        name={nameInput}
        onBlur={blurValidation}
        onFocus={test}
        onKeyPress={(nameInput === 'phone' ? ((event) => onlyNumbers(event)) : null) || (nameInput === 'dispatchAddressNum' ? ((event) => lettersAndNumbers(event)) : null)}
        onChange={(nameInput === 'phone' || nameInput === 'phoneToMigrate') ? e => setInputValue(e.target.value.slice(0,9)) : e => setInputValue(e.target.value)}
        value={formData[nameInput]}
        className={`${formData[nameInput] ? (disabledFields ? "input-text active disabled":"input-text active") : (disabledFields ? "input-text disabled":"input-text")} ${focused && 'phonefocus'}`} 
        type={fieldType}
        maxlength={length}
        pattern={patternL}  
      />
      <label className={`${formData[nameInput] ? "input-label active" : "input-label"} ${focused && 'phonefocus'}`}>{nameLabel}</label>
      <img className={validationData[nameInput] ? "icon-valid active": "icon-valid"} src={IconValid} alt="valido"/>
      <img className={invalidForm ? "icon-invalid active": "icon-invalid"} src={nameInput === 'ci' ? IconExclamation : IconInvalid} alt="invalido"/>
      {nameInput === "ci" && !invalidForm && !validationData[nameInput] && <picture className="icon-trailing active"><img src={IconTrailing} alt="trailing"/></picture>}
      <span className="example-input">{exampleInput}</span>
    </InputContainer>
  )
}

export default InputItem