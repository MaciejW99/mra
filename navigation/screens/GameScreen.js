import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRecoilState, useRecoilValue } from 'recoil';
import { defaultUser, userAtom } from './../../atoms/user';

//components
import Timer from './../../components/timer';
import ViewCustomButton from './../../components/jumpbutton';

import { Formik } from 'formik';

import {
  StyledContainter,
  InnerContainer,
  PageTitle,
  SubTitle,
  WelcomeContainer,
  StyledFormArea,
  LeftIcon,
  RightIcon,
  StyledInputLabel,
  StyledTextInput,
  StyledButton,
  ButtonText,
  Line,
  MsgBox,
  Colors,
  CountDownContainer,
} from '../../components/styles';

//colors
const { brand, darklight, green, primary, red, secondary, tertiary } = Colors;

export default function GameScreen({ navigation }) {
  //const [nb,setNb] = React.useState(changeStyle());
  const user = useRecoilValue(userAtom);
  const [score, setScore] = useState([]);
 
    return (
      <StyledContainter>
        <StatusBar style="dark" />
       <InnerContainer>
         <WelcomeContainer>
           <PageTitle welcome={true}>Game</PageTitle>
           <Formik
           initialValues={{ score: 0 }}
           onSubmit={() => {}}
           >
           {({ handleSubmit, isSubmitting, scores}) => (
              <StyledFormArea>
                {!isSubmitting && (
                  <StyledButton onPress={handleSubmit}>
                  <ButtonText>Graj</ButtonText>
                </StyledButton>
                )}
                {isSubmitting && (
                    <ViewCustomButton/>
                )}              
           </StyledFormArea>
           )}
            </Formik>
        </WelcomeContainer>
      </InnerContainer>
      </StyledContainter>
    );
    
}
