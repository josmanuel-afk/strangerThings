import { useState } from "react";
import { useBoard } from "../hooks/useBoard";

const UserInfo = () => {
  const [user, setUser] = useState("");

  const handleChange = (e: any) => {
    setUser(e.target.value);
  };

  const { dispatch } = useBoard();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (user.trim() === "") return;
      dispatch({ type: "SET_USER", payload: user });
      dispatch({ type: "NEXT_LEVEL", payload: 1 });
    }
  };

  return (
    <div className="Infocontainer">
      <div className="userInfo">
        <p className="texto">Bienvenidoo!</p>
        <label>Ingrese su Apodo:</label>
        <input
          onChange={(e) => handleChange(e)}
          onKeyDown={handleKeyDown}
          value={user}
          type="text"
        ></input>
      </div>
    </div>
  );
};

export default UserInfo;
