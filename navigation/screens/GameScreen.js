import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRecoilState, useRecoilValue } from 'recoil';
import { defaultUser, userAtom } from './../../atoms/user';

import {
  StyledContainter,
  InnerContainer,
  PageTitle,
  WelcomeContainer,
  StyledFormArea,
  StyledButton,
  ButtonText,
} from '../../components/styles';

export default function GameScreen({ navigation }) {
  const user = useRecoilValue(userAtom);
 
    return (
      <StyledContainter>
        <StatusBar style="dark" />
       <InnerContainer>
         <WelcomeContainer>
           <PageTitle welcome={true}>Game</PageTitle>
              <StyledFormArea>
                  <StyledButton 
                  onPress={() => {
                    navigation.navigate('Game');
                  }}>
                  <ButtonText>Graj</ButtonText>
                </StyledButton>          
           </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
      </StyledContainter>
    );
    
}
