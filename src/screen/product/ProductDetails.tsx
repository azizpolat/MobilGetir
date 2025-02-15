import {View, Text, ActivityIndicator, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {Product} from '../../models';
import ImageCarsul from '../../components/category/ImageCarsul';
import DetailBox from '../../components/category/DetailBox';
import DetailProporty from '../../components/category/DetailProporty';
import CardButton from '../../components/category/CardButton';

export default function ProductDetails() {
  const route = useRoute();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (route.params?.product) {
      setProduct(route.params.product);
    }
  }, [route.params]);

  if (!product) {
    return <ActivityIndicator color={'#5D3EBD'} />;
  }

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <ImageCarsul images={product?.images} />
        <DetailBox
          price={product?.fiyat}
          name={product?.name}
          quantity={product?.miktar}
        />
        <Text
          style={{
            paddingHorizontal: 10,
            paddingVertical: 14,
            color: '#808B99',
            fontWeight: '600',
          }}>
          Detaylar
        </Text>
        <DetailProporty />
      </ScrollView>
      {/** card buttın scrol dısında yapmamız ssayfada butonun hareket etmememsi için */}
      <CardButton item={product} />
    </View>
  );
}
