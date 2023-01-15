import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

//formik
import { Formik } from 'formik';

//icons
import { Octicons, Ionicons } from '@expo/vector-icons';

//keyboard avoiding view
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

//API client
import axios from 'axios';

import {
  StyledContainter,
  InnerContainer,
  PageTitle,
  SubTitle,
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
} from '../components/styles';

//colors
const { brand, darklight, green, primary, red } = Colors;

import { View, ActivityIndicator } from 'react-native';
import { useSetRecoilState } from 'recoil';
import { userAtom } from '../atoms/user';

const Signup = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();
  const setUser = useSetRecoilState(userAtom);

  const handleSignup = async (credentials, setSubmitting) => {
    const { confirmPassword, ...payload } = credentials;
    const response = await fetch('https://manual-reflector-api.vercel.app/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    console.log('STATUS', response.status);

    if (response.status != 201) {
      handleMessage('user, response.status');
      setSubmitting(false);
    } else {
      const user = await response.json();
      console.log(user);
      setMessageType('SUCCESS');
      setMessage('WSZYSTKO JEST W PYTKE');
      setUser(user);
      navigation.navigate('MainContainer');
    }
    setSubmitting(false);
  };

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainter signup={true}>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageTitle>Aplikacje Mobilne - Projekt</PageTitle>
          <SubTitle>Rejestracja użytkownika</SubTitle>

          <Formik
            initialValues={{ email: '', username: '', password: '', confirmPassword: '' }}
            onSubmit={(values, { setSubmitting }) => {
              if (
                values.username == '' ||
                values.password == '' ||
                values.confirmPassword == '' ||
                values.email == ''
              ) {
                handleMessage('Proszę wypełnić wszystkie pola');
                setSubmitting(false);
              } else if (values.password != values.confirmPassword) {
                handleMessage('Hasła nie są identyczne');
                setSubmitting(false);
              } else {
                handleSignup(values, setSubmitting);
              }
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
              <StyledFormArea>
                <MyTextInput
                  label="Wprowadź Login"
                  icon="person"
                  placeholder="nazwa użytkownika"
                  placeholderTextColor={darklight}
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                />
                <MyTextInput
                  label="Podaj E-mail"
                  icon="mail"
                  placeholder="E-mail..."
                  placeholderTextColor={darklight}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                <MyTextInput
                  label="Hasło"
                  icon="lock"
                  placeholder="* * * * * * * *"
                  placeholderTextColor={darklight}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <MyTextInput
                  label="Powtórz hasło"
                  icon="lock"
                  placeholder="* * * * * * * *"
                  placeholderTextColor={darklight}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <MsgBox type={messageType}>{message}</MsgBox>

                {!isSubmitting && (
                  <StyledButton onPress={handleSubmit}>
                    <ButtonText>Zarejestruj się</ButtonText>
                  </StyledButton>
                )}

                {isSubmitting && (
                  <StyledButton disabled={true}>
                    <ActivityIndicator size="large" color={primary} />
                  </StyledButton>
                )}
                <Line />
                <MsgBox>Posiadasz już konto?</MsgBox>
                <StyledButton
                  onPress={() => {
                    navigation.navigate('Login');
                  }}
                  sign={true}
                >
                  <ButtonText>Zaloguj</ButtonText>
                </StyledButton>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainter>
    </KeyboardAvoidingWrapper>
  );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darklight} />
        </RightIcon>
      )}
    </View>
  );
};

export default Signup;
