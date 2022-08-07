import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Size from '../constants/Size';
import Icon from '../assets/Icons';
import color from '../constants/color';
import GlobalStyle from '../constants/GlobalStyle';
import {useNavigation, useRoute} from '@react-navigation/native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Header = ({title}) => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={goBack}>
        <Image source={Icon.BACK} style={styles.back} />
      </Pressable>
      <Text style={[GlobalStyle.TEXT_STYLE, styles.text]}>{title}</Text>
      <View style={styles.arrangingView}></View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.BACKGROUND,
    width: '100%',
    height: Size.HEADER_FOOTER_SIZE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  back: {
    marginLeft: Size.PADDING,
    width: Size.ICON * 0.6,
    height: Size.ICON * 0.6,
    tintColor: color.TEXT,
  },
  arrangingView: {
    marginRight: Size.PADDING,
    width: Size.ICON * 0.6,
    height: Size.ICON * 0.6,
  },
  text: {
    fontSize: Size.HEADER_FOOTER_SIZE * 0.4,
  },
});
