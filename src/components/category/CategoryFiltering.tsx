import {View, Text, ScrollView, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {Category} from '../../models';
import categoriesGetir from '../../../assets/categoriesGetir';

const {height, widht} = Dimensions.get('window');

const CategoryBox = ({item, active}: {item: Category; active: Category}) => {
  return (
    <View
      style={[
        {
          paddingHorizontal: 9,
          justifyContent: 'center',
          alignItems: 'center',
        },
        item.name == active.name && {
          borderBottomColor: '#FFD00C',
          borderBottomWidth: 2.5,
        },
      ]}>
      <Text style={{fontWeight: '600', color: 'white'}}>{item.name}</Text>
    </View>
  );
};
export default function CategoryFiltering({category}: {category: Category}) {
  const [categories, setCategories] = useState<Category[]>(categoriesGetir);
  return (
    <ScrollView
      className="border-t border-white"
      style={{
        width: '100%',
        backgroundColor: '#5A3DB6',
        height: height * 0.065,
      }}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}>
      {categories.map((item, key) => (
        <CategoryBox item={item} key={item.id} active={category} />
      ))}
    </ScrollView>
  );
}
