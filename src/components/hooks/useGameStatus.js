import { useState, useCallback, useEffect } from "react";

export const useGameStatus = rowsCleared => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);

  const linePoints = [40, 100, 300, 1200]; // 40 = 1 rows cleared, 100 = two rows cleared

  const calcScore = useCallback(() => {
    //we have score
    console.log(rowsCleared);
    if (rowsCleared > 0) {
      setScore(prev => prev + linePoints[rowsCleared - 1] * (level + 1));
      setRows(prev => prev + rowsCleared);
    }
  }, [level, linePoints, rowsCleared]);
  useEffect(() => {
    calcScore();
  }, [calcScore, score, rowsCleared]);
  return [score, setScore, rows, setRows, level, setLevel];
};
