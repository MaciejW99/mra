import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from './../components/styles';
const { primary, tertiary } = Colors;

//screens
import MainContainer from './../navigation/MainContainer';
import Login from './../navigation/Login';
import Signup from './../navigation/Signup';
import Game from './../components/jumpbutton';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyled: {
            backgroundColor: 'transparent',
          },
          headerTintColor: tertiary,
          headerBackVisible: false,
          headerTransparent: true,
          headerTitle: '',
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="MainContainer" component={MainContainer} />
        <Stack.Screen name="Game" component={Game} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
