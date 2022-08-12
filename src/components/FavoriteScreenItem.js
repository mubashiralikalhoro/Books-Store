import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Size from '../constants/Size';
import color from '../constants/color';
import GlobalStyle from '../constants/GlobalStyle';
import Icons from '../assets/Icons';
import {useNavigation} from '@react-navigation/native';
import {removeFav} from '../store/reducer/favorite';
import {useDispatch} from 'react-redux';

const borderRadius = Size.BORDER_RADIUS * 5;

const RemoveButton = ({onPress}) => (
  <TouchableOpacity style={styles.RemoveButton} onPress={onPress}>
    <Image source={Icons.BROKEN_HEART} style={styles.deleteIcon} />
  </TouchableOpacity>
);

const InfoComponent = ({icon, text, left}) => (
  <>
    <Image
      source={icon}
      resizeMode="contain"
      style={[styles.IconStyle, {left: left}]}
    />
    <Text
      style={[
        GlobalStyle.TEXT_STYLE,
        {
          color: color.GRAY,
          left: left,
        },
      ]}>
      {text}
    </Text>
  </>
);

const FavoriteScreenItem = ({book}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const remove = () => {
    dispatch(removeFav(book));
  };
  const openBook = () => {
    navigation.navigate('BookDetailsScreen', book);
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={openBook}>
        <View style={styles.containerMain}>
          <Image
            source={book.bookCover}
            style={styles.image}
            resizeMode="stretch"
          />
          <View style={styles.disView}>
            <Text
              numberOfLines={1}
              style={[GlobalStyle.TEXT_STYLE, {fontSize: Size.FONTSIZE * 1.1}]}>
              {book.bookName}
            </Text>
            <View style={styles.bookInfo}>
              <InfoComponent icon={Icons.PAGE} text={book.pages} left={0} />
              <InfoComponent icon={Icons.READS} text={book.sells} left={20} />
              <InfoComponent icon={Icons.DOLLAR} text={book.price} left={40} />
            </View>
          </View>
        </View>
        <RemoveButton onPress={remove} />
      </Pressable>
    </View>
  );
};

export default FavoriteScreenItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: Size.PADDING,
    width: Size.WIDTH,
    height: Size.ICON * 1.8,
    alignItems: 'center',
  },
  containerMain: {
    alignItems: 'center',
    flexDirection: 'row',
    width: Size.WIDTH * 0.9,
    height: '100%',
    borderRadius: borderRadius,
    backgroundColor: color.BACKGROUND,
    shadowColor: color.TEXT,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    borderWidth: color.isDark && Platform.OS == 'android' ? 0.5 : 0,
    borderColor: color.GRAY,
  },
  image: {
    height: Size.ICON * 1.8,
    width: Size.ICON * 1.4,
    borderTopLeftRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
  },
  disView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: Size.PADDING,
  },
  heartImageStyle: {
    height: Size.ICON * 0.8,
    width: Size.ICON * 0.8,
    marginRight: Size.ICON * 0.2,
  },
  bookInfo: {
    flexDirection: 'row',
    marginTop: Size.FONTSIZE / 2,
    alignItems: 'center',
  },
  IconStyle: {
    width: 20,
    height: 20,
    tintColor: color.GRAY,
  },
  RemoveButton: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: color.PRIMARY,
    width: Size.ICON * 0.7,
    height: Size.ICON * 0.7,
    left: Size.WIDTH * 0.9 - Size.ICON * 0.7,
    borderTopRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
  },
  deleteIcon: {
    width: Size.ICON * 0.3,
    height: Size.ICON * 0.3,
    tintColor: color.PRIMARY_TEXT,
  },
});
