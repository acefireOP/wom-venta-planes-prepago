import React, { Fragment } from 'react'
import styled from 'styled-components'

import IconPhone from '../images/ico_phone_one.svg'

const DividerDashed = styled.div`
  display: block;
  height: 1px;
  width: 100%;
  margin: 0;
  border-bottom: 1px dashed #979797;
  opacity: 0.16;
  &.mx-auto{
    margin-left: auto; 
    margin-right: auto;
  }
  &.mw-768{
    max-width: 768px;
  }
  &.mt-60{margin-top: 60px;}
  &.mt-40{margin-top: 40px;}
  &.mt-30{margin-top: 30px;}
  &.mt-20{margin-top: 20px;}
  &.mb-20{margin-bottom: 20px;}
  &.mt-10{margin-top: 10px;}
  &.mb-10{margin-bottom: 10px;}
`
const Message = styled.div`
  width: 100%;
  padding: 20px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img{
    width: 26px;
    margin-right: 10px;
  }
  p{
    max-width:400px;
    font-size: 16px;
    line-height: 20px;
    color: #381451;
    text-align:center;
  }
  a{
    text-decoration:none;
  }
  button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background:white;
    padding:12px;
    min-width:280px;
    border: 1px solid #381451;
    border-radius:8px;
    cursor:pointer;
    margin-top:20px;
    p{
      font-size: 16px;
      line-height: 20px;
      color: #381451;
      font-weight:700;
      padding-left:10px;
    }
  }
`

const Step1PhoneMessage = () => {
  return (
    <Fragment>
      <DividerDashed className="mt-30 mx-auto mw-768"/>
      <Message>
       <p>Pásate a plan o contrata la promoción 2x llamando al </p>
       <a href="tel:6002001000">
         <button>
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M24 18.9545C24 19.5682 23.7273 20.7614 23.4716 21.3239C23.1136 22.1591 22.1591 22.7045 21.392 23.1307C20.3864 23.6761 19.3636 24 18.2216 24C16.6364 24 15.2045 23.3523 13.7557 22.8239C12.7159 22.4489 11.7102 21.9886 10.7727 21.4091C7.875 19.6193 4.38068 16.125 2.59091 13.2273C2.01136 12.2898 1.55114 11.2841 1.17614 10.2443C0.647727 8.79545 0 7.36364 0 5.77841C0 4.63636 0.323864 3.61364 0.869318 2.60795C1.29545 1.84091 1.84091 0.886364 2.67614 0.528409C3.23864 0.272727 4.43182 0 5.04545 0C5.16477 0 5.28409 0 5.40341 0.0511364C5.76136 0.170455 6.13636 1.00568 6.30682 1.34659C6.85227 2.31818 7.38068 3.30682 7.94318 4.26136C8.21591 4.70455 8.72727 5.25 8.72727 5.77841C8.72727 6.81818 5.64205 8.33523 5.64205 9.25568C5.64205 9.71591 6.06818 10.3125 6.30682 10.7216C8.02841 13.8239 10.1761 15.9716 13.2784 17.6932C13.6875 17.9318 14.2841 18.358 14.7443 18.358C15.6648 18.358 17.1818 15.2727 18.2216 15.2727C18.75 15.2727 19.2955 15.7841 19.7386 16.0568C20.6932 16.6193 21.6818 17.1477 22.6534 17.6932C22.9943 17.8636 23.8295 18.2386 23.9489 18.5966C24 18.7159 24 18.8352 24 18.9545Z" fill="#381451"/>
          </svg>
          <p>600 200 1000</p>
         </button>
       </a>
      </Message>
    </Fragment>
  )
}

export default Step1PhoneMessage