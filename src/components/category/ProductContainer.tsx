import {View, Text} from 'react-native';
import React from 'react';
import ProductItem from './ProductItem';
import productsGetir from '../../../assets/productsGetir';

export default function ProductContainer() {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        {productsGetir.slice(0, 2).map((item, key) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>

      <Text style={{color: 'gray', fontWeight: 'bold', padding: 14}}>
        Çubuk
      </Text>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          paddingVertical: 10,
        }}>
        {productsGetir.slice(2).map(item => (
          <ProductItem item={item} key={item.id} />
        ))}
      </View>
    </View>
  );
}
