import React, { useEffect, useState } from 'react';
import {
    CountDownContainer,
    CountDownDigit,
  } from './styles';

const timer = () => {

const [ seconds, setSeconds ] = useState(60)
var timer;
useEffect(() => {
    setSeconds(seconds);
timer = setInterval(() => {
    if(seconds!== 0) {
        setSeconds(seconds-1);
    } 
}, 1000)

return () => clearInterval(timer);

});
    return (
        <CountDownContainer>
            <CountDownDigit>{seconds}</CountDownDigit>
        </CountDownContainer>
    );
}

export default timer;