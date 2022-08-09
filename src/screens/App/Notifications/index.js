import {View, Text, Image, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './style';
import color from '../../../constants/color';
import Icons from '../../../assets/Icons';
import Size from '../../../constants/Size';
import GlobalStyle from '../../../constants/GlobalStyle';

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
      <NoItems />
    </View>
  );
};

export default NotificationScreen;
