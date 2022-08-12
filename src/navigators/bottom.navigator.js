import React from 'react';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image, View, Dimensions, Text} from 'react-native';
import {Images} from '../assets/images';
import Size from '../constants/Size';

import Icon from '../assets/Icons';
import color from '../constants/color';
import BottomTabIcons from '../components/BottomTabIcons';

//Screens
import HomeScreen from '../screens/App/Home';
import CartScreen from '../screens/App/Cart';
import FavoriteScreen from '../screens/App/Favourites';
import NotificationScreen from '../screens/App/Notifications';
import ProfileScreen from '../screens/App/Profile';

// dimenstion
const {width, height} = Dimensions.get('window');

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const homeIcon = ({focused}) => (
  <BottomTabIcons
    focused={focused}
    icon={Icon.HOME}
    iconSelected={Icon.HOME_SELECTED}
  />
);

const favIcon = ({focused}) => (
  <BottomTabIcons
    focused={focused}
    icon={Icon.FAVORITE}
    iconSelected={Icon.FAVORITE_SELECTED}
  />
);
const cartIcon = ({focused}) => (
  <BottomTabIcons
    focused={focused}
    icon={Icon.CART}
    iconSelected={Icon.CART_SELECTED}
  />
);
const profileIcon = ({focused}) => (
  <BottomTabIcons
    focused={focused}
    icon={Icon.DRAWER}
    iconSelected={Icon.DRAWER}
    IconStyle={{
      height: Size.ICON * 0.6,
      width: Size.ICON * 0.6,
      tintColor: '#656565',
    }}
    IconStyleSelected={{
      height: Size.ICON * 0.6,
      width: Size.ICON * 0.6,
      tintColor: 'white',
    }}
  />
);
const notiIcon = ({focused}) => (
  <BottomTabIcons
    focused={focused}
    icon={Icon.NOTIFICATION}
    iconSelected={Icon.NOTIFICATION_SELECTED}
  />
);

export const BottomNavigator = ({}) => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: Size.HEADER_FOOTER_SIZE,
          backgroundColor: color.BACKGROUND,
        },
      }}>
      <Tab.Screen
        name="FavoriteScreen"
        options={{
          tabBarIcon: favIcon,
        }}
        component={FavoriteScreen}
      />
      <Tab.Screen
        name="CartScreen"
        options={{
          tabBarIcon: cartIcon,
        }}
        component={CartScreen}
      />
      <Tab.Screen
        name="HomeScreen"
        options={{
          tabBarIcon: homeIcon,
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="NotificationScreen"
        options={{
          tabBarIcon: notiIcon,
        }}
        component={NotificationScreen}
      />
      <Tab.Screen
        name="ProfileScreen"
        options={{
          tabBarIcon: profileIcon,
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
