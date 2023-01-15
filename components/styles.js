import styled from 'styled-components';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

//colors
export const Colors = {
  primary: '#ffffff',
  secondary: '#e5e7eb',
  tertiary: '#1f2937',
  darklight: '#9ca3af',
  brand: 'tomato',
  green: '#10b981',
  red: '#ef4444',
};

const { primary, secondary, tertiary, darklight, brand, green, red } = Colors;

export const StyledContainter = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 100}px;
  background-color: ${primary};
  ${(props) =>
    props.signup &&
    `
    padding-top: ${StatusBarHeight + 1}px;
    `}
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const WelcomeContainer = styled(InnerContainer)`
  padding: 25px;
  padding-top: 10px;
  justify-content: center;
`;

export const PageLogo = styled.Image`
  width: 250px;
  height: 200px;
`;

export const PageTitle = styled.Text`
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  padding: 30px;
  margin-top: 35px;
  margin-bottom: 75px;

  ${(props) =>
    props.welcome &&
    `
        font-size: 35px;
    `}
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary};

  ${(props) =>
    props.welcome &&
    `
        margin-bottom: 5px;
        font-weight: normal;
    `}
`;

export const StyledFormArea = styled.View`
  width: 90%;
`;

export const StyledTextInput = styled.TextInput`
  background-color: ${secondary};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
  color: ${tertiary};
  font-size: 13px;
  text-align: left;
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${brand};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;

  ${(props) =>
    props.sign == true &&
    `
        background-color: ${green};
    `}
`;

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;
`;

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
  color: ${(props) => (props.type == 'SUCCESS' ? green : red)};
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${darklight};
  margin-vertical: 10px;
  margin-bottom: 105px;
`;

export const CountDownContainer = styled.View`
  position: absolute;
  left: 0px;
  bottom: 0px;
  background-color: ${primary};
  z-index: 1;
`;

export const CountDownDigit = styled.Text`
    font-size: 60px;
    color: ${secondary};
`;