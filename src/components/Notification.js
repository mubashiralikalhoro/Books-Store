import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Size from '../constants/Size';
import color from '../constants/color';
import GlobalStyle from '../constants/GlobalStyle';

const Notification = ({notification}) => {
  return (
    <View style={styles.container}>
      <Image
        source={notification.image}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.disView}>
        <Text style={[GlobalStyle.TEXT_STYLE, styles.text]}>
          {notification.text}
        </Text>
        <Text style={[GlobalStyle.TEXT_STYLE, styles.time]}>2 min ago</Text>
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
    borderTopLeftRadius: Size.BORDER_RADIUS,
    borderBottomLeftRadius: Size.BORDER_RADIUS,
  },
  disView: {
    minHeight: Size.ICON,
    marginHorizontal: Size.PADDING,
    justifyContent: 'center',
  },
  text: {},
  time: {
    color: color.PRIMARY,
  },
});
