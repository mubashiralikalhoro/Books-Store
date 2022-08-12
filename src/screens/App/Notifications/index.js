import {View, Text, Image, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './style';
import color from '../../../constants/color';
import Icons from '../../../assets/Icons';
import Size from '../../../constants/Size';
import GlobalStyle from '../../../constants/GlobalStyle';
import {Notifications} from '../../../dummy/data';
import {useSelector} from 'react-redux';

// Zero notifications
const NoItems = () => (
  <SafeAreaView style={{alignItems: 'center', marginTop: Size.PADDING * 2}}>
    <Image
      source={Icons.NOTIFICATION}
      style={{height: Size.ICON, width: Size.ICON, tintColor: color.TEXT}}
    />
    <Text style={[GlobalStyle.TEXT_STYLE, {marginTop: Size.PADDING}]}>
      No Notifications
    </Text>
  </SafeAreaView>
);

const NotificationScreen = () => {
  const Notifications = useSelector(state => state.notification);
  return (
    <SafeAreaView style={styles.container}>
      {Notifications.length == 0 && <NoItems />}
      {/*Showing notifications*/}
      {Notifications.length > 0 && (
        <Notification notification={Notifications[0]} />
      )}
    </SafeAreaView>
  );
};

export default NotificationScreen;
