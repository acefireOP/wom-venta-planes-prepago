import React from 'react';
import {Link} from 'react-router-dom'

const ExitStep = () => {
  return (
    <>
      <h2>Estoy en la salida!!</h2>
      <Link to="/?portate=prepago">
        <button >ir al inicio</button>
      </Link>
    </>
  )
}

export default ExitStep