import React from 'react'
import styled from 'styled-components'


const StepsBox = styled.div`
  width:100%;
  max-width:768px;
  background:white;
  border-radius:8px;
  box-shadow: 0px 2px 4px rgba(45, 20, 65, 0.2);
  margin:20px 10px;
  padding:30px 20px;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
`

const Steps = ({children}) => {
  return (
    <StepsBox>
        {children}
    </StepsBox>
  )
}
export default Steps