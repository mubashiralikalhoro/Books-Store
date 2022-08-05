import React from 'react';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image, View, Dimensions, Text} from 'react-native';
import {Images} from '../assets/images';
import HomeScreen from '../screens/App/Home';
import Size from '../constants/Size';
import Profile from '../screens/App/Profile';
import BottomTabIcons from '../components/BottomTabIcons';
import Icon from '../assets/Icons';
import color from '../constants/color';

//Screens

// dimenstion
const {width, height} = Dimensions.get('window');

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// const TabImage =
//   name =>
//   ({focused}) => {
//     return (
//       <View style={{width: width * 0.06, height: width * 0.06}}>
//         <Image
//           source={Images[(!focused ? 'Un' : '') + name]}
//           style={{width: '100%', height: '100%'}}
//           resizeMode="contain"
//         />
//       </View>
//     );
//   };

const homeIcon = ({focused}) => (
  <BottomTabIcons
    focused={focused}
    icon={Icon.HOME}
    iconSelected={Icon.HOME_SELECTED}
  />
);

export const BottomNavigator = ({}) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: Size.HEADER_FOOTER_SIZE,
          backgroundColor: color.BACKGROUND,
        },
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: homeIcon,
        }}
        component={HomeScreen}
      />
      {/* <Tab.Screen name="Profile" component={Profile} /> */}
    </Tab.Navigator>
  );
};
