import React, { Fragment } from 'react'
import styled from 'styled-components'
import { ContainerAccordion } from './ContainerAccordion'

import IconFrecuent from '../images/icon_chat_big.svg'
import IconCare from '../images/ico_care.svg'

const FrequentWrapper = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  @media(max-width: 640px){
    flex-direction: column;
    align-items: center;
  }
  .frequent{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    @media(max-width: 640px){
      margin-bottom: 30px;
    }
    h2{
      font-weight: 700;
      font-size: 22px;
      line-height: 30px;
      color: #21102E;
    }
    p{
      font-size: 16px;
      line-height: 22px;
      color: #7C6C8A;
    }
    img{
      display: block;
      margin: 10px auto 0;
    }
  }
`
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a{
    text-decoration:none;
  }
  img{
    margin-bottom: 20px;
  }
  p{
    font-size: 16px;
    line-height: 20px;
    color: #381451;
    text-align: center;
    b{
      font-weight: 700;
      display: block;
    }
  }
  .btn-contact{
    width: 100%;
    max-width: 280px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 15px auto 0;
    background-color: #7FBF40;
    border-radius: 8px;
    -webkit-text-decoration: none;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: #ffffff;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
    padding: 12px 20px;
    border: none;
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    -webkit-transition: background-color .3s;
    -webkit-transition: background-color .3s;
    transition: background-color .3s;
    &:hover{
      background-color: #639432;
    }
    img{
      margin: 0;
      margin-right: 10px;
    }
  }
`

const WrapperAcc = styled.div`
  width: 100%;
  max-width: 535px;
  padding: 0 15px;
`

const FrequentQuestion = () => {
  return (
    <Fragment>
      <FrequentWrapper>
        <div className="frequent">
          <h2>Preguntas frecuentes</h2>
          <p>Te recomendamos lo siguiente</p>
          <img src={IconFrecuent} alt="preguntas frecuentes"/>
        </div>
        <WrapperAcc>
          <ContainerAccordion />
        </WrapperAcc>
      </FrequentWrapper>
    </Fragment>
  )
}

export default FrequentQuestion