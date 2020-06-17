import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion";
import Eyes from '../images/ico_ojo.svg'
import CheckboxOn from '../images/checkbox-on.svg'

const ModalContainer = styled(motion.div)`
  background: rgba(56,20,81,.8);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  .modal-body{
    width: 95%;
    max-width: 577px;
    min-height: 328px;
    background: #FFFFFF;
    border-radius: 8px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    h2{
      font-weight: bold;
      font-size: 20px;
      line-height: 25px;
      color: #381451;
      margin: 20px 0 33px;
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
            background-size: 15px;
            background-repeat: no-repeat;
            border-color:#E92070;
            transition: background-color .5s, background-image .5s, border-color .5s;
          }
        }
      }
      label{
        padding-left: 40px;
        position: relative;
        color: #574466;
        font-weight: bold;
        font-size: 14px;
        line-height: 20px;
        cursor: pointer;
        color: #7C6C8A;
        text-decoration-line: none;
        text-transform: uppercase;
        text-align: left;
        @media(max-width: 480px){
          font-size: 12px;
        }
        &:after{
          content: "";
          height: 20px;
          width: 20px;
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
        }
      }
    }
    .modal-button{
      width: 100%;
      max-width: 296px;
      border: 0;
      display: block;
      margin: 0;
      margin-top: 44px;
      padding: 12px 20px;
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
      &:hover{
        background-color: #b71a59;
      }
      &.disabled{
        background-color: rgba(233, 32, 112, .2);
        pointer-events: none;
      }
    }
  }
`

const variantsModal = {
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

const ModalCondition = () => {

  const [ checked, setChecked ] = useState(false)
  const [ openModal, setOpenModal ] = useState(true)

  return (
    <ModalContainer
      variants={variantsModal}
      initial="true"
      animate={openModal ? "visible" : "hidden"}
    >
      <div className="modal-body">
        <img src={Eyes} alt=""/>
        <h2>Necesitamos que seas mayor de 18 años para hacer una portabilidad</h2>
        <div className="condition-check">
          <input 
            type="checkbox" 
            id="confirm" 
            onClick={() => setChecked(!checked)}
          />
          <label htmlFor="confirm">Confirmo que soy mayor de 18 años o más</label>
        </div>
        <button 
          className={checked ? "modal-button" : "modal-button disabled"}
          onClick={() => setOpenModal(!openModal)}
        >continuar</button>
      </div>
    </ModalContainer>
  )
}

export default ModalCondition