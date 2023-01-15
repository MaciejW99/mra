import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRecoilState, useRecoilValue } from 'recoil';
import { defaultUser, userAtom } from './../../atoms/user';

import {
  WelcomeContainer,
  StyledContainter,
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  ButtonText,
  Line,
} from '../../components/styles';

export default function HalloffameScreen({ navigation }) {
  const [scores, setScores] = useState([]);
  const [userScores, setUserScores] = useState([]);

  const user = useRecoilValue(userAtom);

  const getScores = async () => {
    const response = await fetch('https://manual-reflector-api.vercel.app/api/scores?limit=15');
    const scores = await response.json();
    console.log(scores);
    setScores(scores);
  };
  const getUserScores = async () => {
    const response = await fetch(`https://manual-reflector-api.vercel.app/api/users/${user.id}/scores`);
    const scores = await response.json();
    console.log(scores);
    setUserScores(scores);
  };
  useEffect(() => {
    getUserScores();
    getScores();
  }, []);
  return (
    <StyledContainter>
      <StatusBar style="dark" />
      <InnerContainer>
        <WelcomeContainer>
          <Text>Moje Top 3</Text>
          {userScores && <Text>{userScores.map((s) => s.name)}</Text>}
          <Text>Top 15</Text>
          {scores && <Text>{scores.map((s) => s.name)}</Text>}
        </WelcomeContainer>
      </InnerContainer>
    </StyledContainter>
  );
}
