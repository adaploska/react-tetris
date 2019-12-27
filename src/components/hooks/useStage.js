import { useState, useEffect } from "react";
import { createStage } from "../../gameHellpers";

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());

  useEffect(() => {
    console.log("cos");
    const updateStage = prevStage => {
      // First flush the stage
      const newStage = prevStage.map(row =>
        row.map(cell => (cell[1] === "clear" ? [0, "clear"] : cell))
      );

      // Then draw the tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? "merged" : "clear"}`
            ];
          }
        });
      });
      // Then check if we collided

      return newStage;
    };

    setStage(prev => updateStage(prev));
  }, [player.collided, player.pos.x, player.pos.y, player.tetromino]);
  return [stage, setStage];
};
