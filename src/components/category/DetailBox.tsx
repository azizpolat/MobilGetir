import {View, Text} from 'react-native';
import React from 'react';

type DetailBoxProps = {
  price: number;
  name: string;
  quantity: string;
};
export default function DetailBox({price, name, quantity}: DetailBoxProps) {
  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text
        style={{
          color: '#5D3EBD',
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 12,
        }}>
        ₺ {price}
      </Text>
      <Text
        style={{
          color: 'black',
          fontSize: 17,
          fontWeight: '600',
          marginTop: 8,
        }}>
        {name}
      </Text>
      <Text
        style={{
          color: '#848897',
          fontSize: 14,
          fontWeight: '600',
          marginTop: 5,
          paddingBottom: 18,
        }}>
        {quantity}
      </Text>
    </View>
  );
}
