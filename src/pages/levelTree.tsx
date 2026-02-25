import img4 from '../assets/img4.png'
import dermagordonsentado from '../assets/dermagordonsentado.png'
import dermagorgonTecho from '../assets/dermagorgonTecho.png'
import LevelBase from './levelBase'
import { useEffect } from 'react'
import { useBoard } from '../hooks/useBoard'
const LevelTree = () => {
const {dispatch} = useBoard()

  const historiaNivel3 = [

  {
    speaker: "entidad",
    texto: "Ya no es una prueba...",
    tipo: "dialog"
  },

  {
    speaker: "entidad2",
    texto: "Ahora decidimos si mereces continuar.",
    tipo: "dialog"
  },

  {
    speaker: "entidad",
    texto: "Cada error deja marca.",
    tipo: "instruccion"
  },

  {
    speaker: "board",
    texto: "me rompes sin tocarme me nombras y desaparezco que soy?",
    tipo: "pregunta",
    respuestaCorrecta: "silencio"
  },

  {
    speaker: "entidad2",
    texto: "Aún respiras...",
    tipo: "dialog"
  },

  {
    speaker: "entidad",
    texto: "Pero tu mente empieza a temblar.",
    tipo: "instruccion"
  },

  {
    speaker: "board",
    texto: "estoy en todo pero no me ves sin mi no existes que soy?",
    tipo: "pregunta",
    respuestaCorrecta: "aire"
  },

  {
    speaker: "entidad2",
    texto: "Interesante… sigues consciente.",
    tipo: "dialog"
  },

  {
    speaker: "entidad",
    texto: "Última decisión.",
    tipo: "instruccion"
  },

  {
    speaker: "board",
    texto: "te sigo todo el dia pero desaparezco en la noche que soy?",
    tipo: "pregunta",
    respuestaCorrecta: "sombra"
  },

  {
    speaker: "entidad",
    texto: "No sé si salvarte... o liberarte.",
    tipo: "dialog"
  }

]  

useEffect(() => {
    dispatch({type: "RESET_LEVEL",payload:3})
},[])
  return (
    <LevelBase
    bg={img4}
    imgEntidad1={dermagordonsentado}
    imgEntidad2={dermagorgonTecho}
    historia={historiaNivel3}
    timerLevels={30}
    />
  )
}

export default LevelTree
