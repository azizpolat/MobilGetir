import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';

import {connect} from 'react-redux';

import * as actions from '../../redux/actions/cartActions';
import {Product} from '../../models';

const {height, widht} = Dimensions.get('window');

type cartButtonType = {
  addItemToCart: (a: Product) => void;
  item: Product;
};

export default function CardButton({item, addItemToCart}: cartButtonType) {
  console.log(item);

  return (
    <TouchableOpacity
      onPress={() => addItemToCart(item)}
      style={{
        width: '100%',
        height: height * 0.1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          backgroundColor: '#5D39C1',
          height: height * 0.06,
          width: '90%',
          marginHorizontal: '5%',
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 14, color: 'white', fontWeight: 'bold'}}>
          {' '}
          Sepete Ekle
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: (product: Product) =>
      dispatch(actions.addToCart({quantity: 1, product})),
  };
};

export default connect(null, mapDispatchToProps)(CardButton);
