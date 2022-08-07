import React, {useState, useEffect} from 'react';
import {
  Text,
  Dimensions,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Button,
  StatusBar,
} from 'react-native';

//local imports

import styles from './style';

import HomeScreenHeader from '../../../components/HomeScreenHeader';
import HomeScreenPromo from '../../../components/HomeScreenPromo';
import {Images} from '../../../assets/images';
import HomeScreenShowCat from '../../../components/HomeScreenShowCat';
import Books from '../../../dummy/Books';
import HomeScreenShowAuth from '../../../components/HomeScreenShowAuth';
import {useNavigation, useRoute} from '@react-navigation/native';

//third party library

const HomeScreen = ({navigation}) => {
  const [headerShown, setHeaderShown] = useState(false);
  const onScroll = e => {
    if (e.nativeEvent.contentOffset.y > 0) {
      setHeaderShown(true);
    } else {
      setHeaderShown(false);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} onScroll={onScroll}>
          <HomeScreenPromo source={[Images.book1, Images.book2]} />
          <HomeScreenShowAuth />
          {/*Make this part dynamic*/}
          <HomeScreenShowCat catName="Latest" books={Books} />
          <HomeScreenShowCat catName="Adventure" books={Books} />
          <HomeScreenShowCat catName="Romance" books={Books} />
          <HomeScreenShowCat catName="Fantasy" books={Books} />
          {/* ==================== */}
        </ScrollView>
        <HomeScreenHeader opacity={headerShown} />
      </View>
    </>
  );
};

export default HomeScreen;
