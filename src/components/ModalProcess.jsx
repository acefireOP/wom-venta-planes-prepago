import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion";
import GroupPhone from '../images/group-phone.svg'
import IcoClose from '../images/ico_close_modal.svg'

const ModalProcessContainer = styled(motion.div)`
  background: rgba(56,20,81,.8);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  padding: 15px 0;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 768px){
    padding: 0;
  }
  .modal-body{
    width: 95%;
    max-width: 770px;
    min-height: 740px;
    background: #FFFFFF;
    border-radius: 8px;
    position: relative;
    padding: 30px;
    @media(max-width: 768px){
      width: 100%;
      border-radius: 0;
      padding: 40px 20px;
      min-height: auto;
      overflow-y: scroll;
      height: 100%;
      max-height: 100%;
    }
    @media only screen and (min-device-width: 1280px) and (max-device-width: 1366px) and (min-device-height: 320px) and (max-device-height: 800px) {
      overflow-y: scroll;
      height: 100%;
      min-height: auto;
    }

    img{
      display: block;
      margin: 0 auto 20px;
    }
    h2{
      font-weight: bold;
      font-size: 24px;
      line-height: 30px;
      color: #381451;
      margin-bottom: 25px;
      text-align: center;
      @media(max-width: 480px){
        font-size: 20px;
        line-height: 25px;
      }
    }
    h3{
      font-weight: bold;
      font-size: 20px;
      line-height: 25px;
      color: #381451;
      text-align: left;
      margin-bottom: 8px;
      @media(max-width: 480px){
        font-size: 18px;
        line-height: 23px;
      }
    }
    h4{
      font-weight: bold;
      font-size: 18px;
      line-height: 23px;
      color: #574466;
      text-align: left;
      @media(max-width: 480px){
        font-size: 16px;
        line-height: 20px;
      }
    }
    ul{
      margin-bottom: 20px;
      @media only screen and (min-device-width: 1280px) and (max-device-width: 1366px) and (min-device-height: 320px) and (max-device-height: 800px) {
        margin-bottom: 10px;
      }
      &.list-number{
        list-style: decimal;
        padding: 0 0 0 40px;
      }
      &.list-dot{
        padding: 0 0 0 24px;
        li{
          position: relative;
          margin-bottom: 10px;
          &:before{
            content: "";
            background-color: #76489B;
            font-weight: bold;
            width: 8px;
            height: 8px;
            border-radius: 4px;
            position: absolute;
            top: 11px;
            left: -17px;
          }
        }
      }
      li{
        font-size: 16px;
        line-height: 28px;
        color: #381451;
        b{
          font-weight: bold;
        }
        a{
          color: #E92070;
          transition: color .3s;
          &:hover{
            color: #961347;
          }
        }
      }
    }
    span{
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      color: #381451;
    }
    .modal-button{
      width: 100%;
      max-width: 296px;
      border: 0;
      display: block;
      margin: 0 auto;
      margin-top: 30px;
      padding: 14px 20px;
      background-color: #E92070;
      border-radius: 8px;
      color: #ffffff;
      font-weight: bold;
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
      text-decoration: none;
      cursor: pointer;
      text-transform: uppercase;
      transition: background-color .3s;
      @media only screen and (min-device-width: 1280px) and (max-device-width: 1366px) and (min-device-height: 720px) and (max-device-height: 800px) {
        margin-top: 20px;
      }
      &:hover{
        background-color: #b71a59;
      }
      &.disabled{
        background-color: rgba(233, 32, 112, .2);
        pointer-events: none;
      }
    }
    .close-modal{
      position: absolute;
      top: 20px;
      right: 20px;
      cursor: pointer;
      transition: transform .3s;
      &:hover{
        transform: scale(1.1)
      }
    }
  }
`

const variantsModalProcess = {
  visible: {
    opacity: 1,
    display: "flex",
  },
  hidden: {
    opacity: 0,
    transition: { duration: .3 },
    transitionEnd: {
      display: "none",
    },
  },
}

const ModalProcess = ({isOpenProcess, setIsOpenProcess}) => {

  return (
    <ModalProcessContainer
      variants={variantsModalProcess}
      initial="hidden"
      animate={isOpenProcess ? "visible" : "hidden"}
    >
      <div className="modal-body">
        <img 
          className="close-modal" 
          src={IcoClose} alt="close"
          onClick={() => setIsOpenProcess(!isOpenProcess)}
        />
        <img src={GroupPhone} alt=""/>
        <h2>¿Cómo realizar mi portabilidad?</h2>
        <h4>Para iniciar el proceso de portabilidad:</h4>
        <ul className="list-number">
          <li>Debes haber recibido tu chip.</li>
          <li>Ingresa a wom.cl/portabilidad y comienza el proceso, te tomará solo 5 mins.</li>
        </ul>
        <h3>¿Qué más necesito para portarme?</h3>
        <h4>Necesitas:</h4>
        <ul className="list-number">
          <li>El número de serie de tu CI</li>
          <li>Foto frontal y trasera de tu CI</li>
          <li>El código IMEI de tu celular (el que puedes obtener marcando <b>*#06#</b>)</li>
        </ul>
        <ul className="list-dot">
          <li>En el proceso te entregaremos un código CAP para realizar tu portabilidad. Recuerda ingresarlo a tiempo ya que solo dura 24 horas.</li>
          <li>La portabilidad ocurre en la madrugada. Tu <b>Chip WOM</b> estará listo para funcionar en la mañana del día hábil siguiente. Si realizas tu portabilidad después de las 22 horas, la portabilidad se hará efectiva el día hábil subsiguiente.</li>
        </ul>
        <span>Una vez finalizada tu solicitud del chip, te enviaremos las instrucciones de portabilidad junto a tu Chip Prepago.</span>
        <button 
          className="modal-button"
          onClick={() => setIsOpenProcess(!isOpenProcess)}  
        >aceptar</button>
      </div>
    </ModalProcessContainer>
  )
}

export default ModalProcess