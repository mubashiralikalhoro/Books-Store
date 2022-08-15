import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import Size from '../constants/Size';
import Swiper from 'react-native-swiper';
import color from '../constants/color';

const HomeScreenPromo = ({source}) => {
  return (
    <>
      <View style={styles.container}>
        {/* Not Working Code */}
        {/* <Swiper
          style={styles.scrollView}
          autoplay
          activeDotColor={color.PRIMARY}
          horizontal={true}>
          {source.map((item, index) => (
            <View key={index}>
              <Image source={item} style={styles.image} />
            </View>
          ))}
        </Swiper> */}

        <ScrollView horizontal pagingEnabled>
          {source.map((item, index) => (
            <View key={index} style={styles.view}>
              <Image source={item} style={styles.image} />
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
};
export default HomeScreenPromo;

const styles = StyleSheet.create({
  container: {
    marginTop: Size.HEADER_FOOTER_SIZE + Size.PADDING,
    height: Size.HEIGHT * 0.22,
    width: Size.WIDTH,
    // position: 'absolute',
  },
  image: {
    height: Size.HEIGHT * 0.22,
    width: Size.WIDTH - Size.PADDING * 4,
    borderRadius: Size.BORDER_RADIUS,
  },
  view: {
    height: Size.HEIGHT * 0.3,
    width: Size.WIDTH,
    paddingHorizontal: Size.PADDING * 2,
  },
  scrollView: {
    flex: 1,
  },
});
