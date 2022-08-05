import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import SignIn from '../screens/Auth/SignIn';
import Splash from '../screens/Auth/Splash';

import About from '../screens/App/About';
import Home from '../screens/App/Home';

//bottom tab
import {BottomNavigator} from './bottom.navigator';
import HomeScreen from '../screens/App/Home';

const Stack = createNativeStackNavigator();

export const RootNavigator = ({}) => {
  return (
    <Stack.Navigator
      initialRouteName="BottomNavigator"
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="About" component={About} /> */}
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      {/* BOTTOM TAB */}
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
    </Stack.Navigator>
  );
};
