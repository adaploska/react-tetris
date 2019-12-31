import React, { useState } from "react";

import { createStage, checkCollision } from "../gameHellpers";
//styled components
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";
//custom hooks
import { usePlayer } from "./hooks/usePlayer";
import { useStage } from "./hooks/useStage";

//components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Tetris = () => {
  const [rotateElement] = usePlayer();
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player, resetPlayer);
  const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };
  const startGame = () => {
    //reset everything
    console.log("start game");
    setStage(createStage());
    resetPlayer();
    setGameOver(false);
  };

  const drop = () => {
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // Game Over
      if (player.pos.y < 1) {
        console.log("GAME OVER!!!");
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };
  const dropPlayer = () => {
    drop();
  };
  const rotateE = player => {
    let initial = [
      [0, "L", 0],
      [0, "L", 0],
      [0, "L", "L"]
    ];
    console.log("rotacja");
    console.log(player);
    // for (let i in player.tetromino) {
    //   console.log(player.tetromino[i]);
    //   for (let j in player.tetromino[i]) {
    //     if (player.tetromino[i][j] === "L" && player.tetromino === initial) {
    //       console.log("player.tetromino = initial");
    //     }
    //   }
    // }
  };

  const move = ({ keyCode }) => {
    console.log(keyCode);
    if (!gameOver) {
      if (keyCode === 37) {
        console.log("37 lewo");
        movePlayer(-1);
      } else if (keyCode === 39) {
        console.log("39 prawo");
        movePlayer(1);
      } else if (keyCode === 40) {
        console.log("40 dol");
        dropPlayer();
      } else if (keyCode === 38) {
        rotateE(player);

        // console.log(player);
        // let initial = [
        //   [0, "L", 0],
        //   [0, "L", 0],
        //   [0, "L", "L"]
        // ];
        // let rotateFirst = [
        //   ["L", "L", "L"],
        //   ["L", 0, 0],
        //   [0, 0, 0]
        // ];
        // let rotateSecond = [
        //   [0, 0, 0],
        //   [0, 0, "L"],
        //   ["L", "L", "L"]
        // ];
        // let rotateFird = [
        //   [0, "L", "L"],
        //   [0, 0, "L"],
        //   [0, 0, "L"]
        // ];

        // for (let i in player.tetromino) {
        //   console.log(player.tetromino[i]);
        //   for (let j in player.tetromino[i]) {
        //     if (player.tetromino[i][j] === "L") {
        //       console.log(player.tetromino[i][j]);
        //     }
        //   }
        // }
      }
    }
  };

  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
          )}
          <StartButton callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
