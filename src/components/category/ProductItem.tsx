import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {Add} from 'iconsax-react-native';
import {Product} from '../../models';
import {useNavigation} from '@react-navigation/native';
import ProductDetails from '../../screen/product/ProductDetails';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/cartActions';

const {height, width} = Dimensions.get('window');

type ProductItemType = {
  item: Product;
  addItemToCart: (a: Product) => void;
};

function ProductItem({item, addItemToCart}: ProductItemType) {
  console.log('afefsafeeafas', item);

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetails', {product: item})}
      style={{
        width: width * 0.3,
        marginTop: 12,

        height: height * 0.25,
        marginLeft: 12,
        marginBottom: 10,
      }}>
      <Image
        style={{
          width: width * 0.28,
          height: width * 0.28,
          borderRadius: 12,
          borderWidth: 0.2,
          borderColor: 'gray',
        }}
        source={{
          uri: item.image,
        }}
      />
      <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 11,
            color: '#747990',
            textDecorationLine: 'line-through',
          }}>
          <Text>₺</Text> {item.fiyatIndirimli}
        </Text>
        <Text
          style={{
            color: '#5D3EBD',
            fontWeight: 'bold',
            fontSize: 12,
            marginLeft: 4,
          }}>
          <Text>₺</Text> {item.fiyat}
        </Text>
      </View>
      <Text
        style={{
          fontWeight: '600',
          fontSize: 12,
          marginTop: 5,
        }}>
        {item.name}
      </Text>
      <Text
        style={{
          color: '#747990',
          fontSize: 12,
          marginTop: 4,
          fontWeight: '500',
        }}>
        {item.miktar}
      </Text>

      <TouchableOpacity
        onPress={() => {
          addItemToCart(item);
        }}
        style={{
          width: 30,
          height: 30,
          borderWidth: 0.3,
          borderColor: 'lightgrey',
          backgroundColor: 'white',
          position: 'absolute',
          right: -6,
          top: -6,
          borderRadius: 6,
          alignItems: 'center',
          justifyContent: 'center',
          shadowRadius: 3.8,
          shadowOpacity: 0.07,
        }}>
        <Add size="22" color="black" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: (product: Product) =>
      dispatch(actions.addToCart({quantity: 1, product})),
  };
};

export default connect(null, mapDispatchToProps)(ProductItem);
