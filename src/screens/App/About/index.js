import React, {useState, useEffect} from 'react';
import {Text, Dimensions, SafeAreaView, ScrollView} from 'react-native';

//local imports
import Header from '../../../components/Header';
import styles from './style';

const Index = ({navigation, ...props}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'About us'} />
      <ScrollView
        contentContainerStyle={styles.contStyle}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.txt1}>About</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
