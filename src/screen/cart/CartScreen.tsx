import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import productsGetir from '../../../assets/productsGetir';
import CartItem from '../../components/addToCart/CartItem';
import ProductItem from '../../components/category/ProductItem';
import {connect} from 'react-redux';
import {Product} from '../../models';

const {height, width} = Dimensions.get('window');

export default function CartScreen({
  cartItems,
}: {
  cartItems: {product: Product; quantity: number}[];
}) {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const getPRoductPrice = () => {
    let totol = 0;

    cartItems.forEach(item => {
      totol += item.product.fiyat;
    });
    setTotalPrice(totol);
  };

  useEffect(() => {
    getPRoductPrice();
  }, [cartItems]);

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={cartItems}
        renderItem={({item}) => (
          <CartItem product={item?.product} quantity={item.quantity} />
        )}
      />
      <Text style={{padding: 15, fontWeight: 'bold', color: '#5D3EBD'}}>
        Önerilen Ürünler
      </Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        bounces={true}>
        {productsGetir.map((item, index) => (
          <ProductItem key={index} item={item} />
        ))}
      </ScrollView>
      <View
        style={{
          height: height * 0.1,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: '4%',
          backgroundColor: 'white',
        }}>
        <TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                backgroundColor: '#5D3EBD',
                height: height * 0.06,
                width: width * 0.6,
                padding: 5,
                borderRadius: 10,
                margin: 5,
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 17,
                lineHeight: height * 0.04,
              }}>
              Devam Et
            </Text>
          </View>
        </TouchableOpacity>
        <Text
          style={{
            height: height * 0.06,
            width: width * 0.3,
            padding: 5,
            borderRadius: 10,
            margin: 5,
            color: '#5D3EBD',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 17,
            lineHeight: height * 0.04,
            backgroundColor: '#f8f8ff',
          }}>
          ₺ {totalPrice.toFixed(2)}
        </Text>
      </View>
    </View>
  );
}

const mapStateToProps = state => {
  const {cartItems} = state;
  return {
    cartItems: cartItems,
  };
};

export default connect(mapStateToProps, null)(CartScreen);
