import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Size from '../constants/Size';
import GlobalStyle from '../constants/GlobalStyle';
import color from '../constants/color';
import Icons from '../assets/Icons';
import {useSelector} from 'react-redux';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import ImagePicker from 'react-native-image-crop-picker';

const UserProfile = ({
  user,
  editProfile,
  editable,
  setPickedImage,
  pickedImage,
}) => {
  const reversed = useSelector(state => state.resources.langID.reversed);
  const chooseImageFromGallery = async () => {
    try {
      await ImagePicker.openPicker({
        cropping: true,
        mediaType: 'photo',
        maxFiles: 1,
        height: 300,
        width: 300,
      }).then(image => {
        setPickedImage({uri: image.path});
      });
    } catch (e) {}
  };
  return (
    <View style={styles.container(reversed)}>
      <Pressable onPress={editable ? chooseImageFromGallery : () => {}}>
        <Image
          source={pickedImage ? pickedImage : user.image}
          style={styles.imageStyle}
        />
        {editable ? (
          <Image source={Icons.CAMERA} style={styles.camera} />
        ) : (
          <></>
        )}
      </Pressable>
      <View style={styles.detailsView}>
        <Text style={[GlobalStyle.TEXT_STYLE, styles.hello(reversed)]}>
          Hello,
        </Text>
        <Text style={[GlobalStyle.TEXT_STYLE, styles.name(reversed)]}>
          {user.name}
        </Text>
      </View>
      <TouchableOpacity style={styles.pencilView} onPress={editProfile}>
        <Image source={Icons.PENCIL} style={styles.pencil} />
      </TouchableOpacity>
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
    color: color.PRIMARY_TEXT,
    textAlign: reversed ? 'right' : 'left',
  }),
  name: reversed => ({
    fontSize: Size.WIDTH * 0.05,
    color: color.PRIMARY_TEXT,
    textAlign: reversed ? 'right' : 'left',
  }),
  pencilView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Size.ICON * 0.6,
    width: Size.ICON * 0.6,
    borderWidth: 1,
    borderRadius: Size.ICON * 0.4,
    borderColor: color.PRIMARY_TEXT,
    marginRight: Size.PADDING,
  },
  pencil: {
    height: '40%',
    width: '40%',
    tintColor: color.PRIMARY_TEXT,
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
