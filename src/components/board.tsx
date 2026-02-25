import { useEffect, useState } from "react";
import { useBoard } from "../hooks/useBoard";

const Board = () => {
  const abc = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "<--",
  ];

  const [activeLetter, setActiveLetter] = useState<string>("");
  const [Answers, Setanswers] = useState<string[]>([]);
  const { state, dispatch } = useBoard();
  const [ABC, setABC] = useState<string[]>(abc);

  const timer = state.timer.time;
  useEffect(() => {
    if (!state.questions) return;

    let item = 0;
    const questions = state.questions ?? [];

    const timeout = setTimeout(() => {
      const interval = setInterval(
        () => {
          if (item >= questions.length) {
            dispatch({
              type: "SET_TIMER",
              payload: {
                start: true,
              },
            });

            clearInterval(interval);
            setActiveLetter("");

            return;
          }
          if (state.level === 3) abcRevolver();

          setActiveLetter(questions[item]);
          item++;
        },
        state.level === 2 ? 400 : 1000,
      );

      return () => clearInterval(interval);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [state.questions, timer === 0]);

  useEffect(() => {
    dispatch({ type: "SET_GAMES_STATUS", payload: null });
  }, [Answers]);

  const handleAnswers = (letter: string) => {
    setActiveLetter(letter);
    Setanswers((prev) => [...prev, letter]);
    if (state.level === 3) {
      abcRevolver();
    }

    setTimeout(() => {
      setActiveLetter("");
    }, 2000);
  };

  const handleEnviar = () => {
    dispatch({ type: "SET_ANSWERS", payload: Answers.join("") });
    Setanswers([]);
  };

  const abcRevolver = () => {
    setABC((prev) => {
      const copy = [...prev];

      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }

      return copy;
    });
  };

  return (
    <div className="board">
      {state.questions && <h6 className="answers">Escribe tu respuesta</h6>}

      <div className={"containerLetter"}>
        {ABC.map((letter, index) => (
          <p
            onClick={() =>
              letter === "<--" ? handleEnviar() : handleAnswers(letter)
            }
            key={index}
            className={`letter ${activeLetter === letter ? "active" : ""}`}
          >
            {letter}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Board;
