import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screen/home/HomeScreen';
import {
  Dimensions,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {connect} from 'react-redux';
import CategoryFilterScreen from '../screen/home/CategoryFilterScreen';
import ProductDetails from '../screen/product/ProductDetails';
import {Trash} from 'iconsax-react-native';
import * as actions from '../../src/redux/actions/cartActions';

import {
  getFocusedRouteNameFromRoute,
  useNavigation,
} from '@react-navigation/native';

import CartScreen from '../screen/cart/CartScreen';
import React, {useEffect, useState} from 'react';

import cartItems from '../redux/reducers/cartItem';
import {Product} from '../models';

const {height, width} = Dimensions.get('window');

const Stack = createStackNavigator();

export default function HomeNavigator({
  route,
  cartItems,
  clearCart,
}: {
  cartItems: {product: Product; quamtity: number; clearCart: () => void};
}) {
  const tabHiddenRoutes = ['ProductDetails', 'CartScreen'];

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    console.log('Route Name is ', routeName);
    if (tabHiddenRoutes.includes(routeName)) {
      console.log('Kapat ', routeName);
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      console.log('Aç ', routeName);
      navigation.setOptions({tabBarStyle: {display: 'true'}});
    }
  }, [navigation, route]);

  const navigation = useNavigation();

  const [totalPrice, setTotalPrice] = useState<number>(0);

  const getProductsPrice = () => {
    var total = 0;

    cartItems.forEach(cartItem => {
      const price = (total += cartItem?.product?.fiyat);
      setTotalPrice(price);
    });
  };

  useEffect(() => {
    getProductsPrice();
  }, [cartItems, route]);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {backgroundColor: '#5C3EBC'},
          headerTitle: () => (
            <Image
              source={require('../../assets/getirlogo.png')}
              style={{width: 70, height: 30}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          headerBackTitle: 'Geri',
          headerTitle: 'Ürün Detayı',
          headerStyle: {backgroundColor: '#5A3DB6'},
          headerTintColor: 'white',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{paddingLeft: 10}}></TouchableOpacity>
          ),
          tabBarStyle: {display: 'none'},
        }}
      />

      <Stack.Screen
        name="CategoryFilter"
        component={CategoryFilterScreen}
        options={({navigation}) => ({
          headerTintColor: 'white',
          headerBackTitle: false,
          headerStyle: {backgroundColor: '#5C3EBC'},
          headerTitle: () => (
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
              Ürünler
            </Text>
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('CartScreen')}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'white',
                borderRadius: 9,
                overflow: 'hidden',
                marginRight: width * 0.03,
              }}>
              <View style={{padding: 6, backgroundColor: '#F3EFFE'}}>
                <Image
                  style={{width: 22, height: 22}}
                  source={require('../../assets/cart.png')}
                />
              </View>

              <View
                style={{
                  paddingHorizontal: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{color: '#5C3EBC', fontWeight: 'bold', fontSize: 14}}>
                  {totalPrice.toFixed(2)} ₺
                </Text>
              </View>
            </Pressable>
          ),
          tabBarStyle: {display: 'none'},
        })}
      />

      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerBackTitle: false,
          headerTintColor: 'white',
          headerStyle: {backgroundColor: '#5C3EBC'},
          headerTitle: () => (
            <Text style={{fontWeight: 'bold', color: 'white', fontSize: 20}}>
              Sepetim
            </Text>
          ),

          headerRight: () => (
            <TouchableOpacity
              onPress={() => clearCart()}
              style={{paddingRight: 10}}>
              <Trash size="22" color="white" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const mapStateToProps = state => {
  const {cartItems} = state;

  return {
    cartItems: cartItems,
  };
};

const mapClearCart = dispatch => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
  };
};

export default connect(mapStateToProps, mapClearCart)(HomeNavigator);
