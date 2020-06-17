import * as React from "react";
import { useState } from "react";
import styled from 'styled-components'
import { motion, AnimatePresence } from "framer-motion";
import AccordionItem from './AccordionItem';

import ArrowAcc from '../images/icon_arrow_right.svg'

const AccHeading = styled(motion.div)`
  user-select:none;
  cursor: pointer;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  line-height: 20px;
  color: #24152F;
  border-bottom: 1px solid rgba(151, 151, 151, .2);
  .arrow-acc{
    transition: transform .3s;
    margin-left: 10px;
    &.active{
      transform: rotate(180deg)
    }
  }
`


const Accordion = ({ i, expanded, setExpanded, titulo, id, texto }) => {
  const isOpen = i === expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      <AccHeading
        initial={false}
        animate={{ backgroundColor: isOpen ? "transparent" : "transparent" }}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        {titulo}
        <img 
          src={ArrowAcc} 
          initial={false}
          className={isOpen ? 'arrow-acc active' : 'arrow-acc'}
        />
      </AccHeading>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0, overflow: 'hidden' }
            }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <AccordionItem texto={texto} id={id}/>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export const ContainerAccordion = () => {
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  const [expanded, setExpanded] = useState(false);

  return objectAccordion.map(i => (
    <Accordion i={i} expanded={expanded} setExpanded={setExpanded} titulo={i.titulo} id={i.id} texto={i.texto} key={i.id}/>
  ));
};

const objectAccordion = [
  {
    titulo: '¿En qué consiste la promoción portabilidad prepago?',
    id: 0,
    texto: [
      'Promoción incluye hasta 15 GB de navegación + 300 minutos todo destino nacional, que serán divididos y entregados al usuario en 3 meses de la siguiente manera: 5 GB + 100 minutos mensuales, siempre y cuando haya realizado una recarga mínima de $1.000 cada mes.'
    ]
  },
  {
    titulo: '¿Qué plazo tengo para realizar la 1° recarga?',
    id: 1,
    texto: [
      'Desde que el cliente se porta, tiene un plazo de 30 días para realizar la 1° recarga y recibir el primer regalo de 5GB + 100 minutos con vigencia de 30 días. Si se excede los 30 días, perderá la promoción.'
    ]
  },
  {
    titulo: '¿Cuándo puedo obtener los siguientes 5 GB + 100 Min?',
    id: 2,
    texto: [
      'El cliente tiene un plazo de 30 días desde que finaliza la vigencia de su primer regalo de 5GB +100 min, para realizar la recarga y obtener su siguiente mes de promoción. Posterior a ello perderá el regalo de ese periodo.'
    ]
  },
  {
    titulo: '¿Qué pasa si realizo 1 recarga, antes que la vigencia de alguno de lo regalos haya caducado?',
    id: 3,
    texto: [
      'Se considerará una recarga normal, sin el beneficio de portabilidad prepago.'
    ]
  },
  {
    titulo: 'Esos $1000 (recarga mínima exigida para activar bolsa indicada) ¿Se descontarán del saldo que recargue o se mantienen para poder adquirir otras bolsas aparte?',
    id: 4,
    texto: [
      'La recarga es la condición para que se active el regalo de 5GB + 100 min, y esa recarga quedará disponible para consumo del cliente.'
    ]
  },
  {
    titulo: 'Si realizo una recarga y compro bolsas de datos por separado, ¿cuál se consume primero?',
    id: 5,
    texto: [
      'El beneficio de portabilidad tienen prioridad de consumo (5GB + 100 min mensuales), excepto si el cliente compra cualquier bolsa ilimitada o exclusiva en 4G, estas se consumirán primero que la promoción de portabilidad.'
    ]
  }
]




