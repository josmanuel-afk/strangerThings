import { useBoard } from "../hooks/useBoard";

const GamerOver = () => {
  const { dispatch } = useBoard();

  const { state } = useBoard();

  const reset = () => {
    dispatch({ type: "RESET_LEVEL", payload: state.level });
    dispatch({ type: "SET_GAMES_STATUS", payload: null });
  };

  return (
    <div className="gameover">
      <div className="gameover-container">
        <h1 className="gameover-title">GAME OVER</h1>
        <p className="gameover-sub">Tu mente no resistió la prueba...</p>

        <button onClick={reset} className="reintentar">
          REINTENTAR
        </button>
      </div>
    </div>
  );
};

export default GamerOver;
