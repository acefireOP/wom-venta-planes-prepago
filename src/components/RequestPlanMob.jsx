import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import PlanArrow from '../images/arrow_2.svg'
import { FormContext } from "../context/FormContext";
import Plan15gb from '../images/planes/plan15.svg'
import Plan25gb from '../images/planes/plan25.svg'
import Plan35gb from '../images/planes/plan35.svg'
import PlanPrepago from '../images/planes/portate-wom.min.svg'

const RequestContainerMob = styled(motion.div)`
  width: 100%;
  .request-heading{
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
      transition: transform .3s;
      transform: rotate(0deg);
      &.active{
        transform: rotate(180deg)
      }
    }
  }
  .request-plan{
    background-color: #ffffff;
    .container-imgplan{
      padding: 20px;
      img{
        display: block;
        margin: 0 auto;
        box-shadow: 0px 6px 12px rgba(56, 20, 81, 0.15);
        border-radius: 8px;
        padding: 15px;
      }
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
    padding-bottom: 15px;
    cursor: pointer;
    transition: color .3s;
    &:hover{
      color: #961347;
    }
  }
`

const RequestPlanMob = ({isOpenProcess, setIsOpenProcess}) => {
  const { formData } = useContext(FormContext);
  const [ open, setOpen ] = useState(true)

  const variantsOpen = {
    open: {
      maxHeight: 500,
      opacity: 1,
      pointerEvents: 'auto',
      transition: { duration: .3 },
    },
    close: {
      maxHeight: 0,
      opacity: 0,
      pointerEvents: 'none',
      transition: { duration: .3 },
    }
  }

  return (
    <RequestContainerMob>
      <div 
        className="request-heading"
        onClick={() => setOpen(!open)}
      >
        <p>estás solicitando...</p>
        <img className={open ? "active" : ""} src={PlanArrow} alt="arrow"/>
      </div>
      <motion.div 
        className="request-plan"
        variants={variantsOpen}
        initial="close"
        animate={open ? "open" : "close"}
      >
        <div className="container-imgplan">
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
      </motion.div>
    </RequestContainerMob>
  )
}

export default RequestPlanMob