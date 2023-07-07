import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import ProductCard from './ProductCard';
import Shopping from 'react-native-vector-icons/MaterialCommunityIcons';

const Products = () => {
  return (
    <View className="flex flex-row items-center justify-between rounded-3xl  mt-8">
      <ScrollView >
        <ProductCard />
      </ScrollView>
    </View>
  );
};

export default Products;
