import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { gameScoresAtom } from '../../atoms/gameScores';
import Timer from './game/Timer';
import { StyledContainter } from './styles';

const GameBoard = () => {
  const [seconds, setSeconds] = useState(60);
  const gameScores = useRecoilValue(gameScoresAtom); // gdzieś dać wyświetlanie punktów

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds !== 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <StyledContainter>
      <div></div>
      <Timer seconds={seconds} />
    </StyledContainter>
  );
};

export default GameBoard;
