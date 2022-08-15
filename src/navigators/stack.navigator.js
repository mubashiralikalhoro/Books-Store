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
import SearchScreen from '../screens/App/Search';
import ShowAuthorsScreen from '../screens/App/Authors';
import ViewProfileScreen from '../screens/App/ViewProfile';
import ChangePasswordScreen from '../screens/App/ChangePassword';
import LanguageScreen from '../screens/App/Language';
import ContactUsScreen from '../screens/App/contactUs';
import AboutUsScreen from '../screens/App/About';
import SettingsScreen from '../screens/App/Settings';
import AddNewAddressScreen from '../screens/App/AddNewAddress';
import MyOrdersScreen from '../screens/App/MyOrders';
import PasswordVerificationScreen from '../screens/App/PasswordVerification';
//bottom tab
import {BottomNavigator} from './bottom.navigator';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
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
      <Stack.Screen name="ForgetPasswordScreen" component={ForgetPassword} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="BooksScreen" component={BooksScreen} />
      <Stack.Screen name="AuthorScreen" component={AuthorScreen} />
      <Stack.Screen name="BookDetailsScreen" component={BookDetailsScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="ShowAuthorsScreen" component={ShowAuthorsScreen} />
      <Stack.Screen name="ViewProfileScreen" component={ViewProfileScreen} />
      <Stack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
      />
      <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
      <Stack.Screen name="ContactUsScreen" component={ContactUsScreen} />
      <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen
        name="AddNewAddressScreen"
        component={AddNewAddressScreen}
      />
      <Stack.Screen
        name="PasswordVerificationScreen"
        component={PasswordVerificationScreen}
      />
      <Stack.Screen name="MyOrdersScreen" component={MyOrdersScreen} />
      {/* BOTTOM TAB */}
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
    </Stack.Navigator>
  );
};
