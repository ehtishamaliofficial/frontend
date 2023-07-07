import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Heart from 'react-native-vector-icons/AntDesign';
import Star from 'react-native-vector-icons/AntDesign';
import Circle from 'react-native-vector-icons/FontAwesome';
import Plus from 'react-native-vector-icons/FontAwesome';
import Shopping from 'react-native-vector-icons/MaterialCommunityIcons';
import TopBar from './TopBar';

const Product = ({navigation}) => {
  return (
    <ScrollView>
      <View className="w-screen h-screen my-1">
        <TopBar />
        <View className="w-screen h-[25%] bg-[#eaeaea] px-12">
          <Image
            source={{
              uri: 'https://i.ibb.co/wYX3bQS/images-removebg-preview-1.png',
            }}
            className="w-[35%] h-[100%] object-cover m-auto"
          />
        </View>
        <View className="m-2">
          <View className="flex flex-row items-center justify-between my-2">
            <Text className="font-bold text-xl text-black ">
              Mens Black-blue Plade Shirt
            </Text>
            <TouchableOpacity>
              <Heart name="hearto" color="black" size={25} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Review')}>
            <View className="flex flex-row gap-5">
              <Star name="star" color="black" size={15} />
              <Text className="text-normal font-semibold px-2 mx-2 bg-[#e8e8e8]">
                4.2 Rating
              </Text>

              <Text className="font-bold text-xs text-black">143 Rating</Text>
            </View>
          </TouchableOpacity>
          <View className="my-1">
            <Text className="text-black text-base font-bold">Descripton</Text>
            <Text className="font-normal my-1 leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit et
              ipsam architecto, qui minus labore ipsum rerum error unde tempore
              nihil porro ipsa aliquid minima, atque assumenda dolorem harum
              impedit.
            </Text>
          </View>
          <View className="flex flex-row items-center justify-between mx-2 ">
            <View className="">
              <Text className="font-bold text-black text-base my-2">
                Colors
              </Text>
              <View className="fle flex-row items-center gap-2 ">
                <Circle name="circle" color="brown" size={20} />
                <Circle name="circle" color="red" size={20} />
                <Circle name="circle" color="blue" size={20} />
                <Circle name="circle" color="black" size={20} />
              </View>
              {/* <View></View> */}
            </View>
            <View className="">
              <Text className="font-bold text-black text-base my-2">Size</Text>

              <View className="fle flex-row items-center gap-2 ">
                <TouchableOpacity>
                  <Text className="font-bold text-sm border border-black p-2 py-1 rounded-full">
                    M
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text className="font-bold text-sm border border-black px-2.5 py-1 rounded-full">
                    L
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text className="font-bold text-sm border border-black text-center px-1.5 py-1 rounded-full">
                    XL
                  </Text>
                </TouchableOpacity>
              </View>
              <View></View>
            </View>
          </View>
          <View className="flex flex-row items-center  justify-start my-4 gap-2 mt-1 ">
            <Text className="text-black text-lg font-bold">Quantity</Text>
            <View className="flex flex-row items-center bg-[#eaeaea] py-1 px-9 rounded-full border border-slate-200">
              <Plus name="plus" color="black" size={20} />
              <Text className="font-bold text-xl mx-4">1</Text>
              <Plus name="minus" color="black" size={20} />
            </View>
          </View>
          <View className="flex flex-row items-center justify-center  gap-9">
            <Text className="text-base font-normal text-black">Total</Text>
            <Text className="font-bold text-2xl text-black">$440.00</Text>

            <TouchableOpacity className="flex flex-row items-center bg-black color-white py-3 px-6 rounded-md">
              <Shopping
                name="shopping"
                size={20}
                color="white"
                className="font-bold"
              />
              <Text className="mx-4 color-white font-bold text-base">
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Product;
