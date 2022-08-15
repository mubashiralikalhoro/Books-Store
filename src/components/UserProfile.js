import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Size from '../constants/Size';
import GlobalStyle from '../constants/GlobalStyle';
import color from '../constants/color';
import Icons from '../assets/Icons';
import {useSelector} from 'react-redux';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import ImagePicker from 'react-native-image-crop-picker';
import {useNavigation} from '@react-navigation/native';

const UserProfile = ({user, showPencil = true}) => {
  const navigation = useNavigation();
  const strings = useSelector(state => state.resources.langID.strings);
  const reversed = useSelector(state => state.resources.langID.reversed);

  return (
    <View style={styles.container(reversed)}>
      <Image source={user.image} style={styles.imageStyle} />
      <View style={styles.detailsView}>
        <Text style={[GlobalStyle.TEXT_STYLE, styles.hello(reversed)]}>
          {strings.HELLO}
        </Text>
        <Text style={[GlobalStyle.TEXT_STYLE, styles.name(reversed)]}>
          {user.name}
        </Text>
      </View>
      {showPencil && (
        <TouchableOpacity
          style={styles.pencilView}
          onPress={() => navigation.navigate('PasswordVerificationScreens')}>
          <Image source={Icons.PENCIL} style={styles.pencil} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default UserProfile;
const styles = StyleSheet.create({
  container: reversed => ({
    flexDirection: reversed ? 'row-reverse' : 'row',
    alignItems: 'center',
  }),
  imageStyle: {
    width: Size.ICON * 1.5,
    height: Size.ICON * 1.5,
    borderRadius: Size.ICON * 0.75,
  },
  detailsView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: Size.PADDING,
  },
  hello: reversed => ({
    textAlign: reversed ? 'right' : 'left',
  }),
  name: reversed => ({
    fontSize: Size.WIDTH * 0.05,
    textAlign: reversed ? 'right' : 'left',
  }),
  pencilView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Size.ICON * 0.6,
    width: Size.ICON * 0.6,
    borderWidth: 1,
    borderRadius: Size.ICON * 0.4,
    borderColor: color.TEXT,
    marginRight: Size.PADDING,
  },
  pencil: {
    height: '40%',
    width: '40%',
    tintColor: color.TEXT,
  },
  camera: {
    left: Size.ICON * 1.5 - Size.ICON / 2,
    top: Size.ICON * 1.5 - Size.ICON / 2,
    position: 'absolute',
    height: Size.ICON / 2,
    width: Size.ICON / 2,
    tintColor: color.GREEN,
  },
});
