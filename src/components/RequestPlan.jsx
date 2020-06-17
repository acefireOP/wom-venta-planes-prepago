import React, { useState,useContext } from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion";

import PlanArrow from '../images/arrow_2.svg'
import { FormContext } from "../context/FormContext";
import Plan15gb from '../images/planes/plan15.svg'
import Plan25gb from '../images/planes/plan25.svg'
import Plan35gb from '../images/planes/plan35.svg'
import PlanPrepago from '../images/planes/portate-wom.min.svg'

const RequestContainer = styled(motion.div)`
  position: absolute;
  top: 200px;
  right: 0;
  z-index: 9;
  box-shadow: 0px 6px 12px rgba(56,20,81,0.15);
  border-radius: 8px;
  background-color:#ffffff;
  padding: 20px 10px;
  .request-heading{
    width: 230px;
    position: absolute;
    top: 0;
    transform: rotate(-90deg);
    right: auto;
    bottom: 0;
    left: -134px;
    margin: auto;
    height: 37px;
    background-color: #76489B;
    padding: 10px 20px;
    border-radius: 8px 8px 0 0;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    p{
      color: #ffffff;
      font-size: 16px;
      line-height: 16px;
      font-weight: 500;
      text-transform: uppercase;
    }
    img{
      transform: rotate(0deg);
      &.active{
        transform: rotate(180deg);
      }
    }
  }
  .request-plan{
    img{
      display: block;
      margin: 0 auto;
    }
  }
  .link-process{
    color: #E92070;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    text-decoration-line: underline;
    text-transform: uppercase;
    text-align: center;
    display: block;
    margin-top: 15px;
    cursor: pointer;
    transition: color .3s;
    &:hover{
      color: #961347;
    }
  }
`

const RequestPlan = ({isOpenProcess, setIsOpenProcess}) => {
  const { formData } = useContext(FormContext);
  const [ open, setOpen ] = useState(true)

  const variantsOpen = {
    open: {
      transform: 'translateX(0%)',
      transition: { duration: .3 },
    },
    close: {
      transform: 'translateX(100%)',
      transition: { duration: .3 },
    }
  }
  

  if (formData.selectedPlan !== undefined) {
    return (
      <RequestContainer
        variants={variantsOpen}
        initial="close"
        animate={open ? "open" : "close"}
      >
        <div 
          className="request-heading"
          onClick={() => setOpen(!open)}
        >
          <p>estás solicitando...</p>
          <img className={!open ? "active" : ""} src={PlanArrow} alt="arrow"/>
        </div>
        <div className="request-plan">
          {formData.selectedPlan === undefined && <img src={PlanPrepago} alt="plan portate prepago"/>}
          {formData.selectedPlan === '15gb' && <img src={Plan15gb} alt="plan 15 gb"/>}
          {formData.selectedPlan === '25gb' && <img src={Plan25gb} alt="plan 25 gb"/>}
          {formData.selectedPlan === '35gb' && <img src={Plan35gb} alt="plan 35 gb"/>}
          {formData.selectedPlan === 'bolsa_prepago' && <img src={PlanPrepago} alt="plan portate prepago"/>}
        </div>
        <span 
          className="link-process"
          onClick={() => setIsOpenProcess(!isOpenProcess)}
        >ver Proceso de portabilidad</span>
      </RequestContainer>
    )
  }
  else {
    return(
      <div></div>
    )
  }
}

export default RequestPlan