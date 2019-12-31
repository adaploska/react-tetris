import { useState, useEffect } from "react";
import { createStage } from "../../gameHellpers";

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());

  useEffect(() => {
    console.log("cos");

    const updateStage = prevStage => {
      //flush stage
      const newStage = prevStage.map(row =>
        row.map(cell => (cell[1] === "clear" ? [0, "clear"] : cell))
      );
      //drow tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][player.pos.x + x] = [
              value,
              `${player.collided ? "merged" : "clear"}`
            ];
          }
        });
      });
      if (player.collided) {
        resetPlayer();
      }
      return newStage;
    };

    setStage(prev => updateStage(prev));
  }, [player, resetPlayer]);
  return [stage, setStage];
};
