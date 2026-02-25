import img3 from '../assets/img3.png'
import begnaPared from '../assets/begnapared.png'
import dermagorognI from '../assets/dermagorgonI.png'
import LevelBase from './levelBase'
import { useEffect } from 'react'
import { useBoard } from '../hooks/useBoard'


const LevelTwo = () => {
  const {dispatch} = useBoard()
const historiaNivel2 = [

  {
    speaker: "entidad",
    texto: "Regresaste... pero algo cambió.",
    tipo: "dialog"
  },

  {
    speaker: "entidad2",
    texto: "El sistema detecta anomalías en tu mente.",
    tipo: "dialog"
  },

  {
    speaker: "entidad",
    texto: "Veremos si sigues siendo tú...",
    tipo: "instruccion"
  },

  {
    speaker: "board",
    texto: "vuela sin alas llora sin ojos que es?",
    tipo: "pregunta",
    respuestaCorrecta: "nube"
  },

  {
    speaker: "entidad2",
    texto: "Curioso...",
    tipo: "dialog"
  },

  {
    speaker: "entidad",
    texto: "Segunda verificación...",
    tipo: "instruccion"
  },

  {
    speaker: "board",
    texto: "cuanto mas seco mas mojo que es?",
    tipo: "pregunta",
    respuestaCorrecta: "toalla"
  },

  {
    speaker: "entidad2",
    texto: "Tu lógica permanece estable...",
    tipo: "dialog"
  },

  {
    speaker: "entidad",
    texto: "Último filtro...",
    tipo: "instruccion"
  },

  {
    speaker: "board",
    texto: "sube y baja pero no se mueve que es?",
    tipo: "pregunta",
    respuestaCorrecta: "edad"
  },

  {
    speaker: "entidad",
    texto: "La falla no eres tú...",
    tipo: "dialog"
  }

]


useEffect(() => {
      dispatch({type: "RESET_LEVEL",payload:2})

},[])


  return (

    <LevelBase
    imgEntidad1={dermagorognI}
    imgEntidad2={begnaPared}
    bg={img3}
    historia={historiaNivel2}
    timerLevels={40}

    />
    


  )
}

export default LevelTwo
