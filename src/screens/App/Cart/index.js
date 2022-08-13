import {View, Text, ScrollView, SafeAreaView, Image} from 'react-native';
import React from 'react';
import styles from './style';
import CartScreenFooter from '../../../components/CartScreenFooter';
import CartItem from '../../../components/CartItem';
import Size from '../../../constants/Size';
import color from '../../../constants/color';
import Icons from '../../../assets/Icons';
import GlobalStyle from '../../../constants/GlobalStyle';
import {useSelector} from 'react-redux';

const NoItems = () => {
  const strings = useSelector(state => state.resources.langID.strings);
  return (
    <View style={{alignItems: 'center', marginTop: Size.PADDING * 2}}>
      <Image
        source={Icons.CART}
        style={{height: Size.ICON, width: Size.ICON, tintColor: color.TEXT}}
      />
      <Text style={[GlobalStyle.TEXT_STYLE, {marginTop: Size.PADDING}]}>
        {strings.NO_ITEMS_IN_CART}
      </Text>
    </View>
  );
};

const CartScreen = () => {
  const strings = useSelector(state => state.resources.langID.strings);
  const cartData = useSelector(state => state.cart);
  return (
    <SafeAreaView style={styles.container}>
      {cartData.length === 0 && <NoItems />}
      {cartData.length > 0 && (
        <>
          <Text style={styles.myCart}>{strings.MY_CART}</Text>
          <ScrollView>
            {cartData.map((item, index) => (
              <CartItem
                book={item.book}
                numberOfItems={item.noOfItems}
                key={index}
              />
            ))}
          </ScrollView>
          <CartScreenFooter cartData={cartData} />
        </>
      )}
    </SafeAreaView>
  );
};

export default CartScreen;
