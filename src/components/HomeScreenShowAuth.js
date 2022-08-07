import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import GlobalStyle from '../constants/GlobalStyle';
import Authors from '../dummy/Authors';
import Size from '../constants/Size';
import Icon from '../assets/Icons';
import {Images} from '../assets/images';
import Author from './Author';
import color from '../constants/color';

const getTen = authors => {
  if (authors.length > 10) {
    let auth = [];
    for (let i = 0; i < 10; i++) {
      auth.push(authors[i]);
    }
    return auth;
  } else {
    return authors;
  }
};

const HomeScreenShowAuth = () => {
  return (
    <View style={styles.container}>
      {/*Header*/}
      <View style={styles.header}>
        <Text style={[GlobalStyle.TEXT_STYLE, {fontSize: Size.FONTSIZE + 5}]}>
          Authors
        </Text>
        <View style={styles.managingView}></View>
        <Text style={[GlobalStyle.TEXT_STYLE, styles.showMore]}>
          Show more...
        </Text>
      </View>
      {/*Auth View */}
      <ScrollView
        horizontal
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}>
        {getTen(Authors).map((auth, index) => (
          <Author author={auth} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreenShowAuth;

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    height: Size.HEIGHT * 0.22,
    width: Size.WIDTH,
    paddingHorizontal: Size.PADDING,
  },
  scrollView: {
    flex: 1,
    marginTop: Size.PADDING / 2,
  },
  showMore: {
    color: color.SHOW_MORE,
  },
  header: {
    paddingHorizontal: Size.PADDING,
    height: Size.FONTSIZE + 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  managingView: {
    flex: 1,
  },
});
