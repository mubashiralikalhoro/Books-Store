import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

//local imports
import Header from '../../../components/Header';
import GlobalStyle from '../../../constants/GlobalStyle';
import styles from './style';

const AboutUsScreen = () => {
  const strings = useSelector(state => state.resources.langID.strings);
  return (
    <>
      <Header title={strings.ABOUT_US} />
      <View style={styles.container}>
        <ScrollView
          style={styles.contStyle}
          showsVerticalScrollIndicator={false}>
          <Text style={[GlobalStyle.TEXT_STYLE, {textAlign: 'justify'}]}>
            Mobile industry has been a boon for businesses willing to expand and
            grow. If you own an online bookstore, you must complement it with an
            app and strengthen your future prospects. Mobile industry has been a
            boon for businesses willing to expand and grow. If you own an online
            bookstore, you must complement it with an app and strengthen your
            future prospects. Mobile industry has been a boon for businesses
            willing to expand and grow. If you own an online bookstore, you must
            complement it with an app and strengthen your future prospects.
            Mobile industry has been a boon for businesses willing to expand and
            grow. If you own an online bookstore, you must complement it with an
            app and strengthen your future prospects. Mobile industry has been a
            boon for businesses willing to expand and grow. If you own an online
            bookstore, you must complement it with an app and strengthen your
            future prospects. Mobile industry has been a boon for businesses
            willing to expand and grow. If you own an online bookstore, you must
            complement it with an app and strengthen your future prospects.
            Mobile industry has been a boon for businesses willing to expand and
            grow. If you own an online bookstore, you must complement it with an
            app and strengthen your future prospects. Mobile industry has been a
            boon for businesses willing to expand and grow. If you own an online
            bookstore, you must complement it with an app and strengthen your
            future prospects. Mobile industry has been a boon for businesses
            willing to expand and grow. If you own an online bookstore, you must
            complement it with an app and strengthen your future prospects.
            Mobile industry has been a boon for businesses willing to expand and
            grow. If you own an online bookstore, you must complement it with an
            app and strengthen your future prospects. Mobile industry has been a
            boon for businesses willing to expand and grow. If you own an online
            bookstore, you must complement it with an app and strengthen your
            future prospects. Mobile industry has been a boon for businesses
            willing to expand and grow. If you own an online bookstore, you must
            complement it with an app and strengthen your future prospects.
            Mobile industry has been a boon for businesses willing to expand and
            grow. If you own an online bookstore, you must complement it with an
            app and strengthen your future prospects. Mobile industry has been a
            boon for businesses willing to expand and grow. If you own an online
            bookstore, you must complement it with an app and strengthen your
            future prospects. Mobile industry has been a boon for businesses
            willing to expand and grow. If you own an online bookstore, you must
            complement it with an app and strengthen your future prospects.
            Mobile industry has been a boon for businesses willing to expand and
            grow. If you own an online bookstore, you must complement it with an
            app and strengthen your future prospects. Mobile industry has been a
            boon for businesses willing to expand and grow. If you own an online
            bookstore, you must complement it with an app and strengthen your
            future prospects. Mobile industry has been a boon for businesses
            willing to expand and grow. If you own an online bookstore, you must
            complement it with an app and strengthen your future prospects.
            Mobile industry has been a boon for businesses willing to expand and
            grow. If you own an online bookstore, you must complement it with an
            app and strengthen your future prospects. Mobile industry has been a
            boon for businesses willing to expand and grow. If you own an online
            bookstore, you must complement it with an app and strengthen your
            future prospects. Mobile industry has been a boon for businesses
            will
          </Text>
        </ScrollView>
      </View>
    </>
  );
};

export default AboutUsScreen;
