export type UserAction =
  | { type: "SET_QUESTIONS"; payload: string }
  | { type: "NEXT_LEVEL"; payload: number }
  | { type: "SET_ANSWERS"; payload: string }
  | { type: "SET_INDICEQUESTION"; payload: number }
  | { type: "RESET_ANSWERS"; payload: number | null }
  | { type: "RESET_INDICEQUESTION"; payload: number }
  | { type: "ANT_LEVEL"; payload: number }
  | { type: "SET_USER"; payload: string }
  | { type: "SET_GAMES_STATUS"; payload: Games_status }
  | { type: "RESET_LEVEL"; payload: number }
  | { type: "SET_TIMER"; payload: TypesTimer }
  | { type: "DECREMENT_TIMER"; payload: number }
  | { type: "SET_ROUND"; payload: number }
  | { type: "RESET_ROUND"; payload: number }
  | { type: "SET_BANNER"; payload: boolean }
  | { type: "SET_WINNER"; payload: boolean }
  | { type: "PLAY"; payload: UserState };

export type UserState = {
  questions: string | null;
  level: number;
  answers: string | null;
  indiceQuestion: number;
  user: string;
  games_status: Games_status;
  timer: TypesTimer;
  round: number;
  banner: boolean;
  winner: boolean;
};

type Games_status = "error" | "correct" | "gamerOver" | "timerOver" | null;

type TypesTimer = {
  start: boolean | null;
  time: number;
};

export type LevelProps = {
  historia: Typehistoria[];
  bg: string;
  imgEntidad1: string;
  imgEntidad2: string;
  timerLevels?: number;
};

export type Typehistoria = {
  speaker: string;
  texto: string;
  tipo: string;
  respuestaCorrecta?: string;
};
