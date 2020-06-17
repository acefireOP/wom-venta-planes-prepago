import React,{ useContext } from 'react'
import styled from 'styled-components'
import { FormContext } from "../context/FormContext";
import {Link} from 'react-router-dom'
import IcoEditar from '../images/ico_editar.svg'
import IcoUpload from '../images/upload.svg'
import IcoI from '../images/ico_i.svg'
import contrato from '../assets/Anexo-planes-y-Tarifas.pdf'

const PlanSummary = styled.div`
  max-width: 420px;
  margin: 0 0 0 25px;
  a{
    text-decoration:none;
  }
  @media(max-width: 640px){
    max-width: 100%;
    margin: 20px auto 0 ;
  }
  p{
    color: #381451;
    font-size: 12px;
    line-height: 15px;
  }
  h2{
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: #2D1441;
    margin-bottom:10px;
  }
  .summary-heading{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px 0;
    @media(max-width: 480px){
      flex-wrap: wrap;
    }
    div{
      width: 33.3%;
      @media(max-width: 480px){
        width: 50%;
        margin-bottom: 15px;
      }
    }
    p{
      color: #381451;
      font-size: 11px;
      line-height: 14px;
      @media(max-width: 480px){
        font-size: 11px;
      }
    }
    h3{
      font-weight: 700;
      text-transform: capitalize;
      font-size: 14px;
      line-height: 18px;
      color: #381451;
      @media(max-width: 480px){
        font-size: 14px;
      }
    }
  }
  .summary-between{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 12px 0;
    p{
      font-size: 14px;
      line-height: 18px;
      color: #381451;
      &.mb-5{margin-bottom: 5px;}
      &.mb-10{margin-bottom: 10px;}
      &.mb-15{margin-bottom: 15px;}
    }
    h2{
      font-weight: 700;
      font-size: 14px;
      line-height: 18px;
      margin-bottom: 0;
    }
    span{
      font-size: 14px;
      line-height: 18px;
      color: #7C6C8A;
      display: block;
      &.mw-250{
        max-width: 250px;
      }
      &.mw-450{
        max-width: 450px;
      }
    }
    .text-right{
      text-align: right;
    }
  }
  .summary-i{
    background: #F4F4F7;
    border: 1px solid #CCC4D2;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 8px;
    margin-bottom: 10px;
    img{
      margin-right: 7px;
    }
  }
  .summary-title-dispatch{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .summary-edit{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-bottom: 10px;
    p{
      color: #E92070;
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      @media(max-width: 480px){
        font-size: 12px;
      }
    }
    img{
      margin-left: 5px;
    }
  }
  .summary-download{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    a{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      p{
        color: #E92070;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        text-transform: uppercase;
        @media(max-width: 480px){
          text-align: right;
        }
      }
      img{
        width: 20px;
        margin-left: 9px;
        margin-bottom: 3px;
      }
    }
    
  }
  .divider-dashed {
    display: block;
    height: 1px;
    width: 100%;
    margin: 0;
    border-bottom: 1px dashed #E6E2E8;
    &.mt-20{margin-top: 20px;}
    &.mb-20{margin-bottom: 20px;}
    &.mt-10{margin-top: 10px;}
    &.mb-10{margin-bottom: 10px;}
  }
`

const Step3Info = () => {
  const { formData} = useContext(FormContext);

  return (
    <PlanSummary>
      <p>Tipo de contratación</p>
      <h2>{formData.planType === 'lineaNueva' ? 'Línea Nueva' : 'Portabilidad'} </h2>
      <div className="divider-dashed mb-20"></div>
      <h2>Recibirás</h2>
      <div className="summary-between">
        <div>
          <p>CHIP Portabilidad</p>
        </div>
        <div><p>GRATIS</p></div>
      </div>
      <div className="summary-i">
        <img src={IcoI} alt="i"/>
        <p>Al finalizar tu solicitud, recibirás un correo de confirmación de envío. Las instrucciones de portabilidad las recibirás junto a tu Chip Prepago</p>
      </div>
      <div className="divider-dashed mb-10"></div>
      <div className="summary-title-dispatch">
        <h2>Tipo de entrega</h2>
        <Link to="/paso2">
          <div className="summary-edit"><p>MODIFICAR</p> <img src={IcoEditar} alt="editar"/></div>
        </Link>
      </div>
       
      <div className="summary-between">
        <div>
          <p className="mb-15">Despacho a domicilio</p>
          <p className="mb-5">DIRECCIÓN DESPACHO</p>
          <span className="mw-450">{`${formData.dispatchAddress}, ${formData.dispatchAddressNum}, ${formData.dispatchComuna}, ${formData.dispatchRegion}`}</span>
        </div>
        <div>
          <p className="text-right">GRATIS</p>
        </div>
      </div>
    </PlanSummary>
  )
}

export default Step3Info