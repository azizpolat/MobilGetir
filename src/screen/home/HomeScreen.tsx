import {ScrollView} from 'react-native';
import React from 'react';
import HeaderMain from '../../components/homes/HeaderMain';
import BannerCarousel from '../../components/homes/BannerCarousel';
import MainCtagories from '../../components/homes/MainCtagories';

export default function HomeScreen() {
  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <HeaderMain />
      <BannerCarousel />
      <MainCtagories />
    </ScrollView>
  );
}
