import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import Size from '../constants/Size';
import Swiper from 'react-native-swiper';

const HomeScreenPromo = ({source}) => {
  return (
    <>
      <View style={styles.container}>
        <Swiper style={styles.scrollView} autoplay>
          {source.map((item, index) => (
            <View key={index}>
              <Image source={item} style={styles.image} />
            </View>
          ))}
        </Swiper>
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
