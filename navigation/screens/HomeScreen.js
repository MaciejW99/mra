import React from 'react';
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

export default function HomeScreen({ navigation }) {
  const [user, setUser] = useRecoilState(userAtom);
  return (
    <StyledContainter>
      <StatusBar style="dark" />
      <InnerContainer>
        <WelcomeContainer>
          <PageTitle welcome={true}>Witaj, {user.username}!</PageTitle>
          <SubTitle welcome={true}>Zapraszamy do naszej przecudownej gry</SubTitle>
          <StyledFormArea>
            <Line />
            <StyledButton
              onPress={() => {
                setUser(defaultUser);
                navigation.navigate('Login');
              }}
            >
              <ButtonText>Wyloguj się</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </StyledContainter>
  );
}
