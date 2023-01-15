import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

//formik
import { Formik } from 'formik';

//icons
import { Octicons, Ionicons } from '@expo/vector-icons';

//keyboard avoiding view
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

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
const { brand, darklight, green, primary, red, secondary } = Colors;

import { View, ActivityIndicator } from 'react-native';
import { useSetRecoilState } from 'recoil';
import { userAtom } from '../atoms/user';

const Login = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();
  const setUser = useSetRecoilState(userAtom);

  const handleLogin = async (credentials, setSubmitting) => {
    const payload = credentials;
    const response = await fetch('https://manual-reflector-api.vercel.app/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    console.log('STATUS', response.status);

    if (response.status != 200) {
      handleMessage('user, response.status');
      setSubmitting(false);
    } else {
      const user = await response.json();
      console.log(setUser);
      setMessageType('SUCCESS');
      setMessage('WSZYSTKO JEST W PYTKE');
      setUser(user);
      console.log(user.username);

      navigation.navigate('MainContainer');
    }
    setSubmitting(false);
  };

  const handleMessage = (message, type = 'FAILED') => {
    setMessage(message);
    setMessageType(type);
  };

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainter>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageTitle>Aplikacje Mobilne - Projekt</PageTitle>
          <SubTitle>Logowanie do aplikacji</SubTitle>

          <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={(values, { setSubmitting }) => {
              if (values.username == '' || values.password == '') {
                handleMessage('Proszę wypełnić wszystkie pola');
                setSubmitting(false);
              } else {
                handleLogin(values, setSubmitting);
              }
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
              <StyledFormArea>
                <MyTextInput
                  label="Login"
                  icon="person"
                  placeholder="nazwa użytkownika"
                  placeholderTextColor={darklight}
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
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
                <MsgBox type={messageType}>{message}</MsgBox>

                {!isSubmitting && (
                  <StyledButton onPress={handleSubmit}>
                    <ButtonText>Zaloguj się</ButtonText>
                  </StyledButton>
                )}

                {isSubmitting && (
                  <StyledButton disabled={true}>
                    <ActivityIndicator size="large" color={primary} />
                  </StyledButton>
                )}

                <Line />
                <MsgBox>Brak konta?</MsgBox>
                <StyledButton
                  onPress={() => {
                    navigation.navigate('Signup');
                  }}
                  sign={true}
                >
                  <ButtonText>Rejestracja</ButtonText>
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

export default Login;
