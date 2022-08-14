import {Text, Image, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import styles from './style';
import color from '../../../constants/color';
import Icons from '../../../assets/Icons';
import Size from '../../../constants/Size';
import GlobalStyle from '../../../constants/GlobalStyle';
import {useSelector} from 'react-redux';
import Notification from '../../../components/Notification';

// Zero notifications
const NoItems = ({strings}) => (
  <SafeAreaView style={{alignItems: 'center', marginTop: Size.PADDING * 2}}>
    <Image
      source={Icons.NOTIFICATION}
      style={{height: Size.ICON, width: Size.ICON, tintColor: color.TEXT}}
    />
    <Text style={[GlobalStyle.TEXT_STYLE, {marginTop: Size.PADDING}]}>
      {strings.NO_NOTIFICATION}
    </Text>
  </SafeAreaView>
);

const NotificationScreen = () => {
  const strings = useSelector(state => state.resources.langID.strings);
  const notifications = useSelector(state => state.notification);
  return (
    <SafeAreaView style={styles.container}>
      {notifications.length == 0 && <NoItems strings={strings} />}
      {/*Showing notifications*/}
      {notifications.length > 0 && (
        <>
          <ScrollView>
            <Text style={styles.myNot}>{strings.MY_NOTIFICATION}</Text>
            {notifications.map((item, index) => (
              <Notification notification={item} key={index} />
            ))}
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
};

export default NotificationScreen;
