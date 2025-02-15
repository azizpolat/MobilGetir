import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import React from 'react';
import {Category} from '../../models';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

type categoryItemProps = {
  item: Category;
};

export default function CategoryItem({item}: categoryItemProps) {
  const navigaion = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigaion.navigate('CategoryFilter', {category: item})}
      style={{
        paddingTop: 10,
        width: width * 0.25,
        height: width * 0.24,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
      }}>
      <Image
        style={{width: width * 0.18, height: width * 0.18, borderRadius: 10}}
        source={{uri: item.src}}
      />
      <Text style={{fontSize: 12, color: '#616161', fontWeight: '500'}}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}
