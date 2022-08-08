import {View, ScrollView, Text, Image} from 'react-native';
import React from 'react';
import styles from './style';
import FavoriteScreenItem from '../../../components/FavoriteScreenItem';
import Books from '../../../dummy/Books';
import {Favorite} from '../../../dummy/data';
import GlobalStyle from '../../../constants/GlobalStyle';
import Size from '../../../constants/Size';
import Icons from '../../../assets/Icons';
import color from '../../../constants/color';

const NoItems = () => (
  <View style={{alignItems: 'center', marginTop: Size.PADDING * 2}}>
    <Image
      source={Icons.FAVORITE}
      style={{height: Size.ICON, width: Size.ICON, tintColor: color.TEXT}}
    />
    <Text style={[GlobalStyle.TEXT_STYLE, {marginTop: Size.PADDING}]}>
      No Favorites
    </Text>
  </View>
);

const FavoriteScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.ScrollView}>
        {Favorite.length === 0 && <NoItems />}
        {Favorite.map((item, index) => (
          <FavoriteScreenItem book={item} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default FavoriteScreen;
