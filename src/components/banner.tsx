import React, { useEffect, useRef, useState } from "react";
import { useBoard } from "../hooks/useBoard";

const Banner = () => {
  type Item = {
    id: number;
    top: number;
    left: number;
    size: number;
  };

  const [items, setItems] = useState<Item[]>([]);

  const { dispatch } = useBoard();

  useEffect(() => {
    const interval = setInterval(() => {
      if (items.length > 350) {
        dispatch({ type: "SET_WINNER", payload: true });
        return clearInterval(interval);
      }
      addletters();
    }, 10);

    return () => clearInterval(interval);
  }, [items]);

  const addletters = () => {
    setItems((prev) => [
      ...prev,
      {
        id: prev.length,
        top: Math.floor(Math.random() * 100),
        left: Math.floor(Math.random() * 100),
        size: Math.random() * 50 + 20,
      },
    ]);
  };

  return (
    <div className="banner">
      {items.map((item) => (
        <p
          key={item.id}
          className="huyee"
          style={{
            position: "absolute",
            top: `${item.top}%`,
            left: `${item.left}%`,
            fontSize: `${item.size}px`,
          }}
        >
          Huyeeee!
        </p>
      ))}
    </div>
  );
};

export default Banner;
