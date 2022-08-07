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
            <View key={index}>
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
    height: Size.HEIGHT * 0.3,
    width: Size.WIDTH,
    // position: 'absolute',
  },
  image: {
    height: Size.HEIGHT * 0.3,
    width: Size.WIDTH,
  },
  scrollView: {
    flex: 1,
  },
});
