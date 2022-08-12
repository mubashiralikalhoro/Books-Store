import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import GlobalStyle from '../../../constants/GlobalStyle';
import Size from '../../../constants/Size';
import Icons from '../../../assets/Icons';
import {useSelector} from 'react-redux';
import color from '../../../constants/color';

const ScreenHeader = ({title, onPress}) => {
  const reversed = useSelector(state => state.resources.langID.reversed);
  return (
    <View style={styles.container(reversed)}>
      <Text style={[GlobalStyle.TEXT_STYLE, styles.text]}>{title}</Text>
      <TouchableOpacity style={styles.touchable(reversed)} onPress={onPress}>
        <Image source={Icons.ARROW_DOWN} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  container: reversed => ({
    flexDirection: reversed ? 'row-reverse' : 'row',
    justifyContent: 'space-between',
    borderTopLeftRadius: Size.BORDER_RADIUS * 6,
    borderTopRightRadius: Size.BORDER_RADIUS * 6,
    paddingVertical: Size.PADDING,
    paddingHorizontal: Size.PADDING * 2,
  }),
  text: {
    fontWeight: '700',
    fontSize: Size.WIDTH * 0.035,
  },
  icon: {
    height: Size.WIDTH * 0.04,
    width: Size.WIDTH * 0.04,
    tintColor: color.TEXT,
  },
  touchable: reversed => ({
    width: '30%',
    height: '100%',
    alignItems: reversed ? 'flex-start' : 'flex-end',
  }),
});
