import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import HalloffameScreen from './screens/HalloffameScreen';
import AboutScreen from './screens/AboutScreen';

//Screen names
const homeName = "Home";
const gameName = "Game";
const halloffameName = "Hall of Fame";
const aboutName = "About";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          headerTitleStyle: {
          paddingTop: 15,
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: { paddingBottom: 5, fontSize: 10 },
        tabBarStyle: {
            padding: 10, 
            height: 70,
            display: "flex",
            },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === gameName) {
              iconName = focused ? 'game-controller' : 'game-controller-outline';

            } else if (rn === halloffameName) {
              iconName = focused ? 'trophy' : 'trophy-outline';

            } else if (rn === aboutName) {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={gameName} component={GameScreen} />
        <Tab.Screen name={halloffameName} component={HalloffameScreen} />
        <Tab.Screen name={aboutName} component={AboutScreen} />

      </Tab.Navigator>
  );
}

export default MainContainer;