import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
//Screens
import HomeScreen from '../screens/App/Home';
import CartScreen from '../screens/App/Cart';
import FavoriteScreen from '../screens/App/Favourites';
import NotificationScreen from '../screens/App/Notifications';
import ProfileScreen from '../screens/App/Profile';
import BooksScreen from '../screens/App/Books';
import SplashScreen from '../screens/App/Splash';
import BookDetailsScreen from '../screens/App/BookDetails';
import SignIn from '../screens/Auth/SignIn';
import SignUp from '../screens/Auth/SignUp';
import ForgetPassword from '../screens/Auth/ForgetPassword';
import AuthorScreen from '../screens/App/Author';
//bottom tab
import {BottomNavigator} from './bottom.navigator';
import {ThemeProvider} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const SignedInStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomNavigator"
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}>
      <Stack.Screen name="ForgetPasswordScreen" component={ForgetPassword} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="BooksScreen" component={BooksScreen} />
      <Stack.Screen name="AuthorScreen" component={AuthorScreen} />
      <Stack.Screen name="BookDetailsScreen" component={BookDetailsScreen} />
      {/* BOTTOM TAB */}
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
    </Stack.Navigator>
  );
};
const SignedOutStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="SignInScreen" component={SignIn} />
      <Stack.Screen name="SignUpScreen" component={SignUp} />
    </Stack.Navigator>
  );
};

export const RootNavigator = () => {
  const user = useSelector(state => state.user);
  return user.length == 0 ? <SignedOutStack /> : <SignedInStack />;
};
