import React,{ useContext, useEffect } from 'react'
import { FormContext } from "../context/FormContext";
import Step3Plan from './Step3Plan'
import styled from 'styled-components'
import IconEmail from '../images/formulario/icon_email.svg'
import ReactGA from 'react-ga'

const FinalSummary = styled.div`
  width: 100%;
  .wrapper-summary{
    width: 100%;
    .summary-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      position: relative;
      border-bottom: 1px dashed #D4C6C6;
      padding-bottom: 20px;
      @media(max-width: 480px){
        flex-direction: column;
      }
      .summary-title{
        font-weight: 700;
        font-size: 18px;
        line-height: 23px;
        color: #76489b;
        text-align: left;
        @media(max-width: 480px){
          margin-bottom: 10px;
          text-align: center;
        }
      }
      .summary-number{
        font-size: 16px;
        line-height: 20px;
        color: #7C6C8A;
        span{
          color: #381451;
          font-weight: bold;
          font-size: 20px;
          line-height: 25px;
        }
      }
    }
    .summary-body{
      width: 100%;
      max-width: 690px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 20px;
      margin-top: 20px;
      @media(max-width: 640px){
        flex-direction: column;
        align-items: center;
      }
      .summary-step{
        width: 60%;
        margin-top: 30px;
        @media(max-width: 640px){
          width: 100%;
          max-width: 280px;
        }
        a{
          text-decoration:none;
        }
        .link-bubble-gum{
          color: #E92070;
          text-decoration: underline;
          cursor: pointer;
          transition: color .3s;
          &:hover{
            color: #961347;
          }
        }
        h2{
          font-weight: bold;
          font-size: 24px;
          line-height: 30px;
          color: #381451;
          margin-bottom: 20px;
        }
        p {
          font-size: 16px;
          line-height: 20px;
          color: #381451;
          margin-bottom: 20px;
          text-align: justify;
          &:last-child{
            margin-bottom: 0px;
          }
        }
        button{
          width: 100%;
          max-width: 300px;
          display: block;
          margin: 40px auto 0;
          background-color: #E92070;
          border-radius: 8px;
          -webkit-text-decoration: none;
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
          -webkit-transition: background-color .3s;
          transition: background-color .3s;
          &:hover{
            background-color: #8e1344;
          }
        }
      }
    }
  }

  .divider-dashed {
    display: block;
    height: 1px;
    width: 100%;
    margin: 0;
    border-bottom: 1px dashed #E6E2E8;
    &.mt-40{margin-top: 40px;}
    &.mt-20{margin-top: 20px;}
    &.mb-20{margin-bottom: 20px;}
    &.mt-10{margin-top: 10px;}
    &.mb-10{margin-bottom: 10px;}
  }
`

const Step4 = ({isOpenProcess, setIsOpenProcess}) => {
  const { formData, setFormData } = useContext(FormContext);
  useEffect(()=>{
    setFormData({...formData,successFlow:true})
    window.scrollTo(0, 0)
    ReactGA.pageview(window.location.pathname+`/?portate=${formData.selectedPlan}`)
  },[])
  return (
    <FinalSummary>
      <div className="wrapper-summary">
        <div className="summary-header">
          <h2 className="summary-title">Resumen de tu solicitud</h2>
        </div>
        <div className="summary-body">
          <Step3Plan />
          <div className="summary-step">
            <h2><img src={IconEmail} alt="sig paso"/> Siguiente paso</h2>
            <p>Te enviaremos un correo electrónico con la confirmación de envío y los plazos de entrega de tu nuevo chip.</p>
            <p>Una vez que recibas tu Chip, recuerda generar la portabilidad. Te enviaremos las intrucciones junto a tu Chip.</p>
            <a href="https://www.wom.cl"><button>volver a WOM.CL</button></a>
          </div>
        </div>
      </div>
    </FinalSummary>
  )
}

export default Step4