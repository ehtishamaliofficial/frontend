import {View, Text, TextInput, ScrollView, Button} from 'react-native';
import React from 'react';
import Search from 'react-native-vector-icons/Ionicons';
import Slider from '../components/slider/Slider';
import Category from '../components/Category';
import PopularCategories from '../components/PopularCategories';
import BabyProducts from '../components/productComponent/BabyProducts';
import DairyProducts from '../components/productComponent/DairyProducts';
import Electonics from '../components/productComponent/Electonics';
import CookingProducts from '../components/productComponent/CookingProducts';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopBar from './TopBar';
import Sneakers from './Sneakers';

const Home = () => {
  return (
    <View>
      <TopBar />
      <View className="w-[90vw] flex flex-row items-center my-4 bg-gray-200  border border-gray-100 focus:border-gray-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none  text-gray-700 py-1 px-5  leading-8 rounded-xl transition-colors duration-200 ease-in-out m-auto">
        <Search name="search" size={30} color="gray" />

        <TextInput
          placeholder="Search Here"
          className="text-slate-500 font-bold mx-4 w-[100%]"
        />
      </View>
      <ScrollView>
        <Category />
        <Slider />
        <Text className="text-base font-bold text-black  mx-5 my-2 ">
          Cooking Products
        </Text>

        <CookingProducts />
        <Sneakers/>
        {/* <PopularCategories/> */}
        <Text className="text-base font-bold text-black  m-5">
          Baby Care Products
        </Text>
        <BabyProducts />
        <Text className="text-base font-bold text-black  m-5">
          Camera and Gaming headphones
        </Text>

        <Electonics />
        <Text className="text-base font-bold text-black  m-5">
          Dairy Products
        </Text>
        <DairyProducts />
      </ScrollView>
    </View>
  );
};

export default Home;
