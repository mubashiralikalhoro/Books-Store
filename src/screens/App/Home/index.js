import React, {useState, useEffect} from 'react';
import {
  Text,
  Dimensions,
  SafeAreaView,
  ScrollView,
  View,
  Image,
} from 'react-native';

//local imports
import Header from '../../../components/Header.component';
import styles from './style';
import MyStatusBar from '../../../components/StatusBar';
import Size from '../../../constants/Size';
import Icon from '../../../assets/Icons';
import HomeScreenHeader from '../../../components/HomeScreenHeader';
import HomeScreenPromo from '../../../components/HomeScreenPromo';
import {Images} from '../../../assets/images';
import HomeScreenShowCat from '../../../components/HomeScreenShowCat';
import Books from '../../../dummy/Books';

//third party library

const HomeScreen = ({navigation, ...props}) => {
  const [headerShown, setHeaderShown] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={e => {
            if (e.nativeEvent.contentOffset.y > 0) {
              setHeaderShown(true);
            } else {
              setHeaderShown(false);
            }
          }}>
          <HomeScreenPromo source={[Images.book1]} />
          <HomeScreenShowCat catName="Latest" books={Books} />
          <HomeScreenShowCat catName="Adventure" books={Books} />
          <HomeScreenShowCat catName="Romance" books={Books} />
          <HomeScreenShowCat catName="Fantasy" books={Books} />
        </ScrollView>
        <HomeScreenHeader opacity={headerShown} />
      </View>
    </>
  );
};

export default HomeScreen;
