import {View, Text, Image, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './style';
import color from '../../../constants/color';
import Icons from '../../../assets/Icons';
import Size from '../../../constants/Size';
import GlobalStyle from '../../../constants/GlobalStyle';
import {Notifications} from '../../../dummy/data';
import Notification from '../../../components/Notification';

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
  return (
    <View style={styles.container}>
      {Notifications.length == 0 && <NoItems />}
      {Notifications.length > 0 && (
        <Notification notification={Notifications[0]} />
      )}
    </View>
  );
};

export default NotificationScreen;
