import Board from "../components/board";
import CorrectAnswers from "../components/correctAnswers";
import ErrorAnswers from "../components/errorAnswers";
import GamerOver from "../components/gamerOver";
import TimeOver from "../components/timeOver";
import Timers from "../components/timers";
import { useBoard } from "../hooks/useBoard";
import { useEffect } from "react";
import type { LevelProps } from "../types/boarTypes";

const LevelBase = ({
  historia,
  bg,
  imgEntidad1,
  imgEntidad2,
  timerLevels,
}: LevelProps) => {
  const { state, dispatch } = useBoard();
  const games_status = state.games_status;
  const indice = state.indiceQuestion;
  const Nivel = state.level;
  const Round = state.round;

  useEffect(() => {
    dispatch({
      type: "SET_TIMER",
      payload: { start: false, time: timerLevels },
    });

    dispatch({ type: "RESET_ROUND" });

    if (indice > historia.length - 1) {
      if (state.level === 4)
        return dispatch({ type: "SET_BANNER", payload: true });
      dispatch({ type: "RESET_INDICEQUESTION" });
      dispatch({ type: "RESET_ANSWERS" });
      dispatch({ type: "NEXT_LEVEL" });
      return;
    }

    if (historia[indice]?.tipo === "pregunta")
      return dispatch({
        type: "SET_QUESTIONS",
        payload: historia[indice].texto,
      });

    const timer = setTimeout(() => {
      dispatch({
        type: "SET_INDICEQUESTION",
        payload: state.indiceQuestion + 1,
      });
    }, 3000);
    return () => clearTimeout(timer);
  }, [indice]);

  useEffect(() => {
    if (!state.answers) return;

    const correcta = historia[state.indiceQuestion].respuestaCorrecta;
    if (state.answers === correcta) {
      dispatch({
        type: "SET_TIMER",
        payload: {
          start: false,
          time: timerLevels,
        },
      });
      dispatch({ type: "SET_GAMES_STATUS", payload: "correct" });
      dispatch({
        type: "SET_INDICEQUESTION",
        payload: state.indiceQuestion + 1,
      });
    } else {
      dispatch({ type: "SET_GAMES_STATUS", payload: "error" });
      dispatch({ type: "RESET_ANSWERS" });
      if (Round < 3) {
        dispatch({ type: "SET_ROUND" });
      } else {
        dispatch({ type: "SET_GAMES_STATUS", payload: "gamerOver" });
        dispatch({
          type: "SET_TIMER",
          payload: {
            start: false,
            time: timerLevels,
          },
        });

        dispatch({ type: "SET_QUESTIONS", payload: null });
      }
    }
  }, [state.answers]);

  useEffect(() => {
    if(state.games_status === "gamerOver") return
    const timeout = setTimeout(() => {
      dispatch({ type: "SET_GAMES_STATUS", payload: null });
    }, 3000);

    return () => clearTimeout(timeout);
  }, [games_status]);

  const speaker: Record<string, string> = {
    entidad: "descripcion",
    entidad2: "dialogDermagorgon",
  };

  const styleEntidad1 = [
    "begnaI",
    "dermagorognI",
    "dermagordonsentado",
    "begnaI",
  ];

  const styleEntidad2 = [
    "dermagorognD",
    "begnaPared",
    "dermagorgonTecho",
    "dermagorognD",
  ];

  const RenderStatus = () => {
    switch (games_status) {
      case "error":
        return <ErrorAnswers />;
      case "correct":
        return <CorrectAnswers />;
      case "gamerOver":
        return <GamerOver />;
      case "timerOver":
        return <TimeOver />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <img className="bg" src={bg}></img>
      <div className="begnaContainer">
        <img className={styleEntidad1[Nivel - 1] ?? ""} src={imgEntidad1}></img>
        <img className={styleEntidad2[Nivel - 1] ?? ""} src={imgEntidad2}></img>
      </div>
      <div className="Infocontainer">
        <div className="level1Container">
          <div className="info">
            <p className="texto">
              {" "}
              {state.level === 4 ? "" : `Level ${state.level}`}
            </p>
            <div className="info-time">
              <p>Name: {state.user}</p>
              {timerLevels && (
                <>
                  <p>Round:{Round}</p>
                  <div>
                    Time:
                    {timerLevels && (
                      <Timers historia={historia} timerLevels={timerLevels} />
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="dialogContainer">
            {historia[indice] && (
              <p className={speaker[historia[indice].speaker] || ""}>
                {historia[indice]?.speaker === "board"
                  ? ""
                  : historia[indice]?.texto}
              </p>
            )}
          </div>
          {timerLevels && <Board />}
        </div>
      </div>

      {RenderStatus()}
    </div>
  );
};

export default LevelBase;
