import React from 'react'
import styled from 'styled-components'

import LogoWom from '../images/logowom.svg'
import Transbank from '../images/transbank.svg'
import IconFacebook from '../images/icon_facebook.svg'
import IconTwitter from '../images/icon_twitter.svg'
import IconYoutube from '../images/icon_youtube.svg'
import IconInstagram from '../images/icon_instagram.svg'
import IconPhoneOne from '../images/ico_phone_one.svg'
import IconPhoneTwo from '../images/ico_phone_two.svg'
import IconWhatsapp from '../images/ico_whatsapp.svg'

const FooterWom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #2d1441;
  padding: 28px 15px;
  ul{
    li{
      font-size: 13px;
      line-height: 16px;
      color: #AFA6B7;
      margin-bottom: 10px;
      list-style: none;
      @media(max-width: 768px){
        text-align: center;
      }
      &:last-child{
        margin-bottom: 0;
      }
      span{
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        color: #ffffff;
        padding-bottom: 5px;
        display: block;
      }
      &.social-links{
        max-width: 190px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        @media(max-width: 768px){
          text-align: center;
          justify-content: space-around;
          margin: 0 auto;
        }
        a{
          transition: transform .3s;
          &:hover{
            transform: scale(1.2);
          }
        }
      }
      &.li-inline{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        @media(max-width: 768px){
          text-align: center;
          justify-content: center;
        }
        a{
          text-decoration: none;
          color: #ffffff;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          transition: box-shadow .3s;
          @media(max-width: 768px){
            border: 1px solid #9A89A4;
            border-radius: 20px;
            padding: 5px 15px;
            margin-bottom: 15px;
          }
          &:hover{
            box-shadow: 0px 0px 10px rgba(255,255,255, .6);
          }
        }
        picture{
          width: 23px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 5px;
        }
        span{
          padding: 0;
        }
      }
    }
  }
`

const WrapperFooter = styled.div`
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media(max-width: 768px){
    flex-direction: column;
    div{
      width: 100%;
      max-width: 240px;
      margin-bottom: 40px;
      &:last-child{
        margin-bottom: 0;
      }
    }
    .logo-footer{
      display: blocK;
      margin: 0 auto;
    }
  }
`

const Footer = () => {
  return (
    <FooterWom>
      <WrapperFooter>
        <div><img className="logo-footer" src={LogoWom} alt="wom footer"/></div>
        <div>
          <ul>
            <li>A nuestro WhatsApp</li>
            <li className="li-inline"><a href="https://api.whatsapp.com/send?phone=56935223070" title="whatsapp wom"><picture><img src={IconWhatsapp} alt="whatsapp"/></picture><span>+56 9 3522 3070</span></a></li>
            <li>Desde tu celular WOM marca:</li>
            <li className="li-inline"><a href="tel:103" title="103"><picture><img src={IconPhoneOne} alt="desde celular"/></picture><span>103</span></a></li>
            <li>Fono clientes:</li>
            <li className="li-inline"><a href="tel:223377600" title="22 3377 600"><picture><img src={IconPhoneTwo} alt="fono clientes"/></picture><span>22 3377 600</span></a></li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Paga con:</li>
            <li><img src={Transbank} alt="tarjetas transbank"/></li>
            <li>Síguenos en:</li>
            <li className="social-links">
              <a href="https://facebook.com/womchile" target="_blank" rel="noopener noreferrer"><img src={IconFacebook} alt="facebook"/></a>
              <a href="https://twitter.com/womchile" target="_blank" rel="noopener noreferrer"><img src={IconTwitter} alt="twitter"/></a>
              <a href="https://www.youtube.com/channel/UCPM0XXrP4i724aYt27QLBxA" target="_blank" rel="noopener noreferrer"><img src={IconYoutube} alt="youtube"/></a>
              <a href="https://instagram.com/womchile" target="_blank" rel="noopener noreferrer"><img src={IconInstagram} alt="instagram"/></a>
            </li>
          </ul>
        </div>  
      </WrapperFooter>
    </FooterWom>
  )
}

export default Footer