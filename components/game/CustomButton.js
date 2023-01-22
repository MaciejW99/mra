import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { gameScoresAtom } from '../../atoms/gameScores';

import { Colors } from '.././styles';
const { red, green } = Colors;

const CustomButton = () => {
  const [liveTime, setLiveTime] = useState();
  const [color, setColor] = useState();
  const gameScores = useSetRecoilState(gameScoresAtom);

  useEffect(() => {
    const color = Math.floor(Math.random() * 1000) % 2 === 0 ? red : green;
    setColor(color);
    setLiveTime(5000);

    const timer = setInterval(() => {
      if (liveTime !== 0) {
        setLiveTime((liveTime) => liveTime - 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function onPressOutHandler() {
    if (color === red) {
      gameScores((oldScores) => oldScores - 5);
    }

    if (color === green) {
      gameScores((oldScores) => oldScores + 10);
    }

    setLiveTime(0);
  }

  return (
    <div
      onPressOut={onPressOutHandler}
      className={liveTime === 0 ? 'hidden' : ''}
    >
      CustomButton
    </div>
  );
};

export default CustomButton;
