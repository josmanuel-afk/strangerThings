import { useBoard } from "../hooks/useBoard";

const Winner = () => {
  const { dispatch } = useBoard();

  const handlerPlay = () => {
    dispatch({ type: "PLAY" });
  };
  return (
    <div className="winner-overlay">
      <div className="winner-box">
        <h1 className="winner-title">YOU SURVIVED</h1>
        <p className="winner-sub">Has superado todas las pruebas.</p>

        <button onClick={handlerPlay} className="winner-btn">
          JUGAR DE NUEVO
        </button>
      </div>
    </div>
  );
};

export default Winner;
