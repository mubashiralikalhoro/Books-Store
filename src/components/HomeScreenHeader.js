import {View, Pressable, StyleSheet, Image, Animated} from 'react-native';
import React, {useState} from 'react';
import Size from '../constants/Size';
import Icon from '../assets/Icons';
import color from '../constants/color';
import {useSelector} from 'react-redux';

const HomeScreenHeader = ({opacity}) => {
  const reversed = useSelector(state => state.resources.langID.reversed);
  const opacityLevel = useState(new Animated.Value(0.3))[0];

  const [lastHeaderShow, setLastHeaderShow] = useState(false);

  const fadeIn = () => {
    Animated.timing(opacityLevel, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacityLevel, {
      toValue: 0.3,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  if (opacity != lastHeaderShow) {
    if (opacity) {
      fadeIn();
    } else {
      fadeOut();
    }
    setLastHeaderShow(opacity);
  }

  return (
    <View style={styles.container(reversed)}>
      <Animated.View style={styles.shadowEffect(opacityLevel)}></Animated.View>
      <View style={styles.logo} />
      <Image source={Icon.DISCOVER} style={styles.discover} />
      <View style={styles.arrange}></View>
      <Image source={Icon.SEARCH} style={styles.search} />
    </View>
  );
};

export default HomeScreenHeader;

const styles = StyleSheet.create({
  container: reversed => ({
    position: 'absolute',
    width: '100%',
    height: Size.HEADER_FOOTER_SIZE,
    flexDirection: reversed ? 'row-reverse' : 'row',
    alignItems: 'center',
  }),
  logo: {
    width: Size.ICON,
    height: Size.ICON,
    tintColor: color.TEXT,
  },
  search: {
    width: Size.ICON * 0.65,
    height: Size.ICON * 0.65,
    marginHorizontal: Size.PADDING,
    tintColor: color.TEXT,
  },
  discover: {
    height: Size.ICON * 0.75,
    width: Size.ICON * 2.4,
    tintColor: color.TEXT,
  },
  arrange: {
    flex: 1,
  },
  shadowEffect: opacityLevel => ({
    width: '100%',
    height: '100%',
    backgroundColor: color.BACKGROUND,
    opacity: opacityLevel,
    position: 'absolute',
  }),
});
