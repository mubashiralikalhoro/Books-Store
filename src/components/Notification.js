import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Size from '../constants/Size';
import color from '../constants/color';
import GlobalStyle from '../constants/GlobalStyle';

const Notification = ({notification}) => {
  const getTimeDifference = () => {
    let milliDif = new Date() - new Date(notification.time);
    let re = milliDif / 1000;
    if (re < 60) {
      return '' + re.toFixed() + ' seconds ago';
    } else if (re < 6000) {
      return '' + (re / 60).toFixed() + ' mins ago';
    } else if (re < 86400) {
      return '' + (re / 6000).toFixed() + ' hours ago';
    } else if (re < 604800) {
      return '' + (re / 86400).toFixed() + ' days ago';
    }
    return new Date(notification.time).toDateString();
  };
  return (
    <View style={styles.container}>
      <Image
        source={notification.image}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.disView}>
        <Text style={[GlobalStyle.TEXT_STYLE, styles.text]}>
          {notification.text}
        </Text>
        <Text style={[GlobalStyle.TEXT_STYLE, styles.time]}>
          {getTimeDifference()}
        </Text>
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginVertical: Size.PADDING,
    backgroundColor: color.LIGHT_GRAY,
    width: Size.WIDTH * 0.9,
    minHeight: Size.ICON,
    flexDirection: 'row',
    //borderRadius
    borderRadius: Size.BORDER_RADIUS,
  },
  image: {
    height: Size.ICON,
    width: Size.ICON * 0.8,
  },
  disView: {
    minHeight: Size.ICON,
    marginHorizontal: Size.PADDING,
    justifyContent: 'center',
  },
  text: {width: Size.WIDTH * 0.7},
  time: {
    color: color.PRIMARY,
  },
});
