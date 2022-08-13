import {View, ScrollView, Text, Image, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './style';
import FavoriteScreenItem from '../../../components/FavoriteScreenItem';
import GlobalStyle from '../../../constants/GlobalStyle';
import Size from '../../../constants/Size';
import Icons from '../../../assets/Icons';
import color from '../../../constants/color';
import {useSelector} from 'react-redux';
import englishStrings from '../../../constants/englishStrings';

// Zero favorites
const NoItems = ({strings}) => (
  <View style={{alignItems: 'center', marginTop: Size.PADDING * 2}}>
    <Image
      source={Icons.FAVORITE}
      style={{height: Size.ICON, width: Size.ICON, tintColor: color.TEXT}}
    />
    <Text style={[GlobalStyle.TEXT_STYLE, {marginTop: Size.PADDING}]}>
      {strings.NO_FAV}
    </Text>
  </View>
);

const FavoriteScreen = () => {
  const strings = useSelector(state => state.resources.langID.strings);
  const fav = useSelector(state => state.fav);
  return (
    <SafeAreaView style={styles.container}>
      {fav.length === 0 && <NoItems strings={strings} />}
      {/*Showing Fav*/}
      {fav.length > 0 && (
        <ScrollView>
          <Text style={styles.myFav}>{strings.MY_FAV}</Text>
          {fav.map((item, index) => (
            <FavoriteScreenItem book={item} key={index} />
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default FavoriteScreen;
