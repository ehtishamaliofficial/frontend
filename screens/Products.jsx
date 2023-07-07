import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import ProductCard from '../components/productComponent/ProductCard';
import Shopping from 'react-native-vector-icons/MaterialCommunityIcons';
import DairyProducts from '../components/productComponent/DairyProducts';
import Detergents from '../components/productComponent/Detergents';
import BabyProducts from '../components/productComponent/BabyProducts';
import MenProducts from './MenProducts';
import TopBar from './TopBar';

const Products = () => {
  return (
    <View>
  <TopBar/>
      <ScrollView className="mb-24">
        <ProductCard />
        <DairyProducts />
        <Detergents />
        <BabyProducts />
        {/* <MenProducts /> */}
      </ScrollView>
    </View>
  );
};

export default Products;
