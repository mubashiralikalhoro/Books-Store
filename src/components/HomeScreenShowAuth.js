import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import GlobalStyle from '../constants/GlobalStyle';
import Authors from '../dummy/Authors';
import Size from '../constants/Size';
import Author from './Author';
import color from '../constants/color';
import {useSelector} from 'react-redux';

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
  const strings = useSelector(state => state.resources.langID.strings);
  const reversed = useSelector(state => state.resources.langID.reversed);

  // main view
  return (
    <View style={styles.container}>
      {/*Header*/}
      <View style={styles.header(reversed)}>
        <Text style={[GlobalStyle.TEXT_STYLE, {fontSize: Size.FONTSIZE + 5}]}>
          {strings.AUTHORS}
        </Text>
        <View style={styles.managingView}></View>
        <Text style={[GlobalStyle.TEXT_STYLE, styles.showMore]}>
          {strings.SHOW_MORE}
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
    minHeight: Size.WIDTH * 0.27 * 1.5,
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
  header: reversed => ({
    paddingHorizontal: Size.PADDING,
    height: Size.FONTSIZE + 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: reversed ? 'row-reverse' : 'row',
  }),
  managingView: {
    flex: 1,
  },
});
