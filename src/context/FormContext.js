import React, { createContext, useState } from 'react'

export const FormContext = createContext();
/* isProcesed es el campo que indica si se mando a televentas*/
const FormContextProvider = (props) => {
  const [formData, setFormData] = useState({
    selectedPlan:'bolsa_prepago',
    planType:'portabilidad',
    rut:'',
    ci:'',
    name:'',
    lastName:'',
    phone:'',
    email:'',
    phoneToMigrate:'',
    originPlanType:'prepago',
    previousCarrier:'',
    dispatchRegion:'',
    dispatchComuna:'',
    dispatchAddress:'',
    dispatchAddressNum:'',
    contractRegion:'',
    contractComuna:'',
    contractAddress:'',
    contractAddressNum:'',
    dispatchType:'Despacho a domicilio',
    successFlow: false,
    isProcesed:false
  })

  return(
    <FormContext.Provider value={{formData,setFormData}}>
      {props.children}
    </FormContext.Provider>
  )
}
export default FormContextProvider