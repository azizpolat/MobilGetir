import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Product} from '../../models';
import {connect} from 'react-redux';
const {height, width} = Dimensions.get('window');
import * as actions from '../../redux/actions/cartActions';
type CartProps = {
  product: Product;
  quantity: number;
  removeFromCart: (product: Product) => void;
};

function CartItem({product, quantity, removeFromCart}: CartProps) {
  const [quantityy, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <View
      style={{
        height: height * 0.13,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.04,
        backgroundColor: 'white',
        padding: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#E0E0E0',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
        <Image
          style={{
            borderWidth: 0.4,
            borderColor: 'lightgrey',
            width: height * 0.09,
            height: height * 0.09,
            borderRadius: 8,
          }}
          source={{uri: product?.image}}
        />
        <View style={{marginLeft: 12}}>
          <Text
            style={{
              fontSize: 14,
              maxWidth: width * 0.45,
              fontWeight: 'bold',
              color: '#333',
            }}>
            {product?.name}
          </Text>
          <Text style={{fontSize: 12, color: '#848897', marginTop: 2}}>
            {product?.miktar}
          </Text>
          <Text
            style={{
              color: '#5D3EBD',
              fontWeight: 'bold',
              marginTop: 6,
              fontSize: 15,
            }}>
            ₺ {product?.fiyat}
          </Text>
        </View>
      </View>

      <View
        style={{
          shadowOpacity: 0.4,
          shadowColor: 'grey',
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: '#ddd',
          borderRadius: 10,
          height: height * 0.04,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 12,
          backgroundColor: '#F7F7F7',
          gap: 10,
        }}>
        <TouchableOpacity onPress={() => removeFromCart(product)}>
          <Text style={{fontSize: 15, color: '#5D3EBD', fontWeight: 'bold'}}>
            -
          </Text>
        </TouchableOpacity>

        <Text style={{fontSize: 13, fontWeight: 'bold', color: '#333'}}>
          {quantity}
        </Text>

        <TouchableOpacity onPress={increaseQuantity}>
          <Text style={{fontSize: 15, color: '#5D3EBD', fontWeight: 'bold'}}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: (product: Product) =>
      dispatch(actions.removeFromCart(product)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
