import { useEffect } from "react";
import { useBoard } from "../hooks/useBoard";

type TimersProps = {
  historia: any[];
  timerLevels: number;
};
const Timers = ({ historia, timerLevels }: TimersProps) => {
  // const [timers,setTimers] =useState<number>(timer?? 0)
  const { state, dispatch } = useBoard();
  const timers = state.timer.time;
  const Round = state.round;
  const startTimer = state.timer.start;

  const minuts = Math.floor(timers / 60);
  const seconds = timers % 60;

  useEffect(() => {
    if (!startTimer) return;

    if (timers <= 0) return;

    const interval = setInterval(() => {
      dispatch({ type: "DECREMENT_TIMER" });
    }, 1000);

    return () => clearInterval(interval);
  }, [timers, startTimer]);

  useEffect(() => {
    if (!historia || !historia[state.indiceQuestion]) return;
    const correcta = historia[state.indiceQuestion].respuestaCorrecta;

    if (timers === 0) {
      if (state.answers !== correcta) {
        dispatch({ type: "SET_GAMES_STATUS", payload: "timerOver" });
        dispatch({
          type: "SET_TIMER",
          payload: {
            start: false,
            time: timerLevels,
          },
        });

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
    }
  }, [timers]);

  return (
    <div className="timers">
      {String(minuts).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
    </div>
  );
};

export default Timers;
