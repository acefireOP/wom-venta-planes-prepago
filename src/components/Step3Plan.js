import React,{useContext} from 'react'
import styled from 'styled-components'
import { FormContext } from "../context/FormContext";

import Plan15gb from '../images/planes/plan15.svg'
import Plan25gb from '../images/planes/plan25.svg'
import Plan35gb from '../images/planes/plan35.svg'
import PlanPrepago from '../images/planes/portate-wom.min.svg'

const PlanRequested = styled.div`
  h2{
    color: #7C6C8A;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 10px;
    @media(max-width: 480px){
      text-align: center;
    }
  }
  picture{
    display: block;
    padding: 12px;
    box-sizing: border-box;
    box-shadow: 0px 2px 7px rgba(45,20,65,0.2);
  }
`

const Step3Plan = () => {
  const { formData } = useContext(FormContext);
  return (
    <PlanRequested>
      <h2>Oferta Solicitada</h2>
      <picture>
        {formData.selectedPlan === 'prepago' && <img src={PlanPrepago} alt="plan eres prepago"/>}
      </picture> 
    </PlanRequested>
  )
}

export default Step3Plan