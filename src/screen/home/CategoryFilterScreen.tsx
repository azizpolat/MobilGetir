import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CategoryFiltering from '../../components/category/CategoryFiltering';
import {Category} from '../../models';
import TypeFiltering from '../../components/category/TypeFiltering';
import ProductItem from '../../components/category/ProductItem';
import ProductContainer from '../../components/category/ProductContainer';

export default function CategoryFilterScreen(props) {
  const [category, setCategory] = useState<Category>(
    props.route.params.category,
  );
  return (
    <ScrollView>
      <CategoryFiltering category={category} />
      <TypeFiltering />
      <ProductContainer />
    </ScrollView>
  );
}
