import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

//local imports

import styles from './style';

import HomeScreenHeader from '../../../components/HomeScreenHeader';
import HomeScreenPromo from '../../../components/HomeScreenPromo';
import {Images} from '../../../assets/images';
import HomeScreenShowCat from '../../../components/HomeScreenShowCat';
import Books from '../../../dummy/Books';
import HomeScreenShowAuth from '../../../components/HomeScreenShowAuth';
import AnimatedLogo from '../../../components/AnimatedLogo';

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
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} onScroll={onScroll}>
          <HomeScreenPromo source={[Images.bookAd, Images.bookAd2]} />
          <HomeScreenShowAuth />
          {/*Make this part dynamic*/}
          <HomeScreenShowCat catName="Latest" books={Books} />
          <HomeScreenShowCat catName="Adventure" books={Books} />
          <HomeScreenShowCat catName="Romance" books={Books} />
          <HomeScreenShowCat catName="Fantasy" books={Books} />
          {/* ==================== */}
        </ScrollView>
        <HomeScreenHeader opacity={headerShown} />
        <AnimatedLogo />
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
