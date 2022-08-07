import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import HomeScreen from '../screens/App/Home';

//bottom tab
import {BottomNavigator} from './bottom.navigator';
import BooksScreen from '../screens/App/Books';

const Stack = createNativeStackNavigator();

export const RootNavigator = ({}) => {
  return (
    <Stack.Navigator
      initialRouteName="BottomNavigator"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="BooksScreen" component={BooksScreen} />
      {/* BOTTOM TAB */}
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
    </Stack.Navigator>
  );
};
