import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Size from '../constants/Size';
import Icon from '../assets/Icons';
import color from '../constants/color';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import GlobalStyle from '../constants/GlobalStyle';

const HomeScreenHeader = ({opacity}) => {
  const strings = useSelector(state => state.resources.langID.strings);
  const reversed = useSelector(state => state.resources.langID.reversed);
  const opacityLevel = useState(new Animated.Value(0.3))[0];
  const navigation = useNavigation();
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
      <Text style={styles.discover}>{strings.DISCOVER}</Text>
      <View style={styles.arrange}></View>
      <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
        <Image source={Icon.SEARCH} style={styles.search} />
      </TouchableOpacity>
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
    ...GlobalStyle.TEXT_STYLE,
    fontSize: Size.HEADER_FOOTER_SIZE * 0.7,
    fontWeight: '900',
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
