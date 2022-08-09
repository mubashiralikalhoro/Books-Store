import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Size from '../constants/Size';
import color from '../constants/color';
import GlobalStyle from '../constants/GlobalStyle';

const Author = ({author}) => {
  return (
    <>
      <View style={styles.container}>
        <Image
          source={author.image}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={[GlobalStyle.TEXT_STYLE]} numberOfLines={2}>
          {author.name}
        </Text>
      </View>
    </>
  );
};

export default Author;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: Size.WIDTH * 0.27 * 1.3,
    width: Size.WIDTH * 0.27,
    borderRadius: Size.BORDER_RADIUS,
    backgroundColor: color.BACKGROUND,
    marginHorizontal: Size.WIDTH * 0.02,
  },
  image: {
    height: Size.WIDTH * 0.27 * 1.1,
    width: Size.WIDTH * 0.27,
    borderRadius: Size.BORDER_RADIUS,
  },
  textView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: Size.WIDTH * 0.27 * 1.1 * 0.2,
  },
  behindView: {
    opacity: 0.2,
    width: '100%',
    height: Size.WIDTH * 0.27 * 1.1 * 0.2,
    position: 'absolute',
    backgroundColor: 'white',
    borderBottomLeftRadius: Size.BORDER_RADIUS,
    borderBottomRightRadius: Size.BORDER_RADIUS,
  },
});
