import img2 from "../assets/img2.png";
import begnaI from "../assets/begnaI.png";
import dermagorognD from "../assets/dermagorgonD.png";
import LevelBase from "./levelBase";
import { useEffect } from "react";
import { useBoard } from "../hooks/useBoard";

const LevelOne = () => {
  const { dispatch } = useBoard();

  const historia = [
    {
      speaker: "entidad",
      texto: "¿Me escuchas?",
      tipo: "dialog",
    },

    {
      speaker: "entidad2",
      texto: "Si puedes oírme, demuestra que eres real...",
      tipo: "dialog",
    },

    {
      speaker: "entidad",
      texto: "Primera prueba...",
      tipo: "instruccion",
    },

    {
      speaker: "board",
      // texto: "tengo agujas pero no coso tengo numeros pero no hablo que soy?",
      texto: "hola",
      tipo: "pregunta",
      respuestaCorrecta: "reloj",
    },

    {
      speaker: "entidad",
      texto: "Interesante...",
      tipo: "dialog",
    },

    {
      speaker: "entidad2",
      texto: "Segunda prueba...",
      tipo: "instruccion",
    },

    {
      speaker: "board",
      texto: "mientras mas me quitas, mas grande me hago. que soy?",
      tipo: "pregunta",
      respuestaCorrecta: "agujero",
    },

    {
      speaker: "entidad2",
      texto: "Veo que piensas...",
      tipo: "dialog",
    },

    {
      speaker: "entidad",
      texto: "Última prueba...",
      tipo: "instruccion",
    },

    {
      speaker: "board",
      texto:
        "tiene ciudades sin casas rios sin agua y caminos sin coches que es?",
      tipo: "pregunta",
      respuestaCorrecta: "mapa",
    },

    {
      speaker: "entidad",
      texto: "Has demostrado que estás consciente...",
      tipo: "dialog",
    },
  ];

  useEffect(() => {
    dispatch({ type: "RESET_LEVEL", payload: 1 });
  }, []);

  return (
    <LevelBase
      imgEntidad1={begnaI}
      imgEntidad2={dermagorognD}
      bg={img2}
      historia={historia}
      timerLevels={30}
    />
  );
};

export default LevelOne;
