import img5 from "../assets/img5.png";
import begnaI from "../assets/begnaI.png";
import dermagorognD from "../assets/dermagorgonD.png";
import LevelBase from "./levelBase";
import Banner from "../components/banner";
import { useBoard } from "../hooks/useBoard";
import Winner from "../components/winner";
const Final = () => {
  const { state } = useBoard();
  const historia = [
    {
      speaker: "entidad",
      texto: "Lo lograste...",
      tipo: "dialog",
    },

    {
      speaker: "entidad2",
      texto: "Las pruebas fueron diseñadas para romperte.",
      tipo: "dialog",
    },

    {
      speaker: "entidad",
      texto: "Cada segundo... cada decisión... era observada.",
      tipo: "dialog",
    },

    {
      speaker: "entidad2",
      texto: "Muchos llegaron hasta aquí.",
      tipo: "dialog",
    },

    {
      speaker: "entidad2",
      texto: "Ninguno resistió.",
      tipo: "dialog",
    },

    {
      speaker: "entidad",
      texto: "Pero tú no fallaste.",
      tipo: "dialog",
    },

    {
      speaker: "entidad2",
      texto: "No sabemos si celebrarte...",
      tipo: "dialog",
    },

    {
      speaker: "entidad",
      texto: "O temerte.",
      tipo: "dialog",
    },

    {
      speaker: "entidad2",
      texto: "Porque ahora entendemos algo...",
      tipo: "dialog",
    },

    {
      speaker: "entidad",
      texto: "La anomalía nunca estuvo en el sistema.",
      tipo: "dialog",
    },

    {
      speaker: "entidad2",
      texto: "Estaba en ti.",
      tipo: "dialog",
    },

    {
      speaker: "entidad",
      texto: "Y eso... nos supera.",
      tipo: "dialog",
    },
  ];

  return (
    <>
      {state.banner && <Banner />}
      {state.winner && <Winner />}

      <LevelBase
        imgEntidad1={begnaI}
        imgEntidad2={dermagorognD}
        bg={img5}
        historia={historia}
      />
    </>
  );
};

export default Final;
