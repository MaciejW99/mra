import React, { useEffect, useState } from 'react';
import { CountDownContainer, CountDownDigit } from '../styles';

const Timer = ({ seconds }) => {
  return (
    <CountDownContainer>
      <CountDownDigit>{seconds}</CountDownDigit>
    </CountDownContainer>
  );
};

export default Timer;
