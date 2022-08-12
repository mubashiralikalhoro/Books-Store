import {View, Text, StyleSheet, Switch} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import Size from '../constants/Size';
import GlobalStyle from '../constants/GlobalStyle';
import color from '../constants/color';

const SettingsOption = ({value, setValue, title}) => {
  const reversed = useSelector(state => state.resources.langID.reversed);
  return (
    <View style={styles.container(reversed)}>
      <Text style={GlobalStyle.TEXT_STYLE}>{title}</Text>
      <Switch
        value={value}
        onValueChange={setValue}
        thumbColor={value ? color.PRIMARY : color.GRAY}
      />
    </View>
  );
};

export default SettingsOption;

const styles = StyleSheet.create({
  container: reversed => ({
    flexDirection: reversed ? 'row-reverse' : 'row',
    width: '100%',
    height: Size.ICON,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Size.PADDING * 2,
  }),
});
