import React, { useContext,useEffect } from "react";
import { FormContext } from "../context/FormContext";
import { ValidationContext } from "../context/ValidationContext";
import queryString from 'query-string'
import styled from "styled-components";
import PlanType from "./PlanType";
import Step1Inputs from "./Step1Inputs";
import Step1PhoneMessage from './Step1PhoneMessage'
import TitleBlock from "./TitleBlock";
import NextButton from "./NextButton";
import { motion, AnimatePresence } from "framer-motion";
//import ReactGA from 'react-ga'
import IcoAlert from '../images/icon_alerta.svg'


const StepWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 18px;
    line-height: 23px;
    color: #76489b;
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
  }
  .plan-types-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 30px;
    @media (max-width: 480px) {
      flex-direction: column;
    }
  }
  .bot-button-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    align-items: center;
    @media(max-width: 480px){
      margin-top: 20px;
    }
  }
`;

const AlertTopMessage = styled.div`
  width: 100%;
  max-width: 570px;
  border-radius: 4px;
  background: rgba(233, 172, 32, 0.1);
  border: 1px solid #e9ac20;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 20px auto;
  div{
    width: 100%;
  }
  img{
    margin-right: 10px;
  }
  h2 {
    font-size: 12px;
    line-height: 15px;
    font-weight: 700;
    color: #7c6c8a;
    margin-bottom: 8px;
  }
  p {
    color: #7c6c8a;
    font-size: 12px;
    line-height: 15px;
    font-weight: 300;
    line-height: 15px;
  }
`;

const BajadaText = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: #7C6C8A;
`;
const MotionDiv = styled(motion.div)`
  width: 100%;
`;
const VoidContainer = styled.div`
  height:200px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

const duration = 0.3;

const variants = {
  initial: {
    opacity: 0,
    height: 0
  },
  enter: {
    height: "auto",
    opacity: 1,
    transition: {
      duration,
      when: "beforeChildren"
    }
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      height: { delay: 0.2 },
      duration
    }
  }
};

const Step1 = ({location}) => {
  const { formData, setFormData } = useContext(FormContext);
  const { validationData } = useContext(ValidationContext);
  const parsed = queryString.parse(location.search);

  useEffect(()=>{
    setFormData({...formData,selectedPlan:parsed.portate,successFlow:false})
    //ReactGA.pageview(window.location.pathname + parsed.portate);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event':'VirtualPageviewGeneral',
      'virtualPageURL':'/portabilidad-prepago/solicitud-en-linea/paso1',
      'virtualPageTitle':'Prepago - Solicitud en Línea - Paso 1',
    });
  },[])

  const dataLayerFn = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'eventoGeneral',
      'eventCategory': 'Prepago - Portabilidad',
      'eventAction': 'Solicitud en Línea',
      'eventLabel': 'Ir a Paso 2',
      'page':'/portabilidad-prepago/solicitud-en-linea/paso1',
      'pagename':'Prepago - Solicitud en Línea - Paso 1',
    });
  }

  if((formData.selectedPlan !== undefined && formData.selectedPlan === 'prepago')) {
    return (
      <StepWrapper>
        <h1>Solicita tu Chip prepago WOM en línea</h1>
        <div className="plan-types-container">
          <PlanType
            title="Quiero portarme"
            subtitle="Cámbiate a WOM manteniendo tu número de teléfono actual."
            type="portabilidad"
            selected={formData.planType === "portabilidad" ? true : true}
            dataName='planType'
          />
        </div>
        <AnimatePresence>
          {formData.planType !== "" && (
            <MotionDiv
              variants={variants}
              key="23236"
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <TitleBlock classAdd="mb-20" titulo="Información Personal" />
              <BajadaText>Ingresa tus datos y revisa que la información sea correcta.</BajadaText>
              <AlertTopMessage>
                <img src={IcoAlert} alt="alerta"/>
                <div>
                  <h2>Antes de solicitar una portabilidad, revisa que:</h2>
                  <p>Debes contar actualmente con un plan prepago.</p>
                  <p>Llevar al menos 30 días desde la activación de tu chip actual.</p>
                  <p>Llevar al menos 60 días desde tu última portabilidad.</p>
                </div>
              </AlertTopMessage>
              <Step1Inputs />
            </MotionDiv>
          )}
        {formData.planType === "lineaNueva" || formData.planType === "portabilidad" ? null : <MotionDiv
              variants={variants}
              key="13513"
              initial="initial"
              animate="enter"
              exit="exit"
            ><Step1PhoneMessage /></MotionDiv>}
        </AnimatePresence>
        <div className="bot-button-container">
          {formData.planType === "lineaNueva" || formData.planType === "portabilidad" 
          ? 
            <NextButton
              stepNum="2"
              stepTitle="Despacho"
              route="/paso2"
              onclick={dataLayerFn}
              status={
                formData.planType === "portabilidad"
                  ? validationData.ci &&
                    validationData.rut &&
                    validationData.name &&
                    validationData.lastName &&
                    validationData.phone &&
                    validationData.email 
                    ? "active"
                    : "innactive"
                  : validationData.ci &&
                    validationData.rut &&
                    validationData.name &&
                    validationData.lastName &&
                    validationData.phone &&
                    validationData.email
                  ? "active"
                  : "innactive"
              }
            />
          : 
            null
          }
        </div>
      </StepWrapper>
    );
  }
  else {
    return(
      <VoidContainer>
        <h1>No hay plan seleccionado</h1>
      </VoidContainer>
      
    )
  }
};
export default Step1;
