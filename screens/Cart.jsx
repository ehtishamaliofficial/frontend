import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Table, Row, Rows} from 'react-native-table-component';
const Cart = ({navigation}) => {
  return (
    <ScrollView>
      <View className="my-2 bg-white w-screen h-screen body-font font-quicksand mb-44">
        <Text className="font-bold text-xl text-black text-center my-2">
          Your Cart & Checkout Please
        </Text>

        <View className="w-11/12 my-6 mx-auto bg-slate-100 shadow-2xl border border-gray-300 py-4">
          <View className=" flex flex-row items-center justify-around mt-2 mb-4">
            <Text className="font-bold text-black text-base">Product</Text>
            <Text className="font-bold text-black text-base">Name</Text>
            <Text className="font-bold text-black text-base">Quantity</Text>
            <Text className="font-bold text-black text-base">Price (RS)</Text>
          </View>
          <View className="">
            <View className="flex flex-row  items-center justify-around gap-6  my-1">
              <Image
                source={{
                  uri: 'https://i.ibb.co/30HGKLG/loody-g200s-gaming-headset1-tejar-removebg-preview.png',
                }}
                className="w-16 h-16 object-cover "
              />
              <Text className="font-semibold text-black text-sm mr-6">
                Headphone
              </Text>
              <Text className="font-semibold text-black text-sm mr-6"> 2 </Text>
              <Text className="font-semibold text-black text-sm mr-6">
                4000
              </Text>
            </View>
            <View className="flex flex-row  items-center justify-around gap-6 my-1">
              <Image
                source={{
                  uri: 'https://i.ibb.co/0f1N3r8/71-Nsd-UEF7-L-AC-SX569-removebg-preview.png',
                }}
                className="w-16 h-16 object-cover "
              />
              <Text className="font-semibold text-black text-sm mr-6">
                Shirt
              </Text>
              <Text className="font-semibold text-black text-sm mr-6"> 2 </Text>
              <Text className="font-semibold text-black text-sm mr-6">
                4000
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <View className="w-[90%]  bg-black focus:ring-4 focus:outline-none focus:ring-[#fc6013]/50 font-medium rounded-lg px-10 py-4 text-center  items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2 m-auto my-4">
              <Text className="text-white text-base font-bold">
                Total : Rs 2000
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text className="font-normal text-sm text-black text-center">
          Please enter your Address
        </Text>
        <View className="my-4 w-screen">
          <TextInput
            placeholder="Your Name"
            className="w-[90%]  bg-white shadow-2xl border border-gray-300 focus:border-gray-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none  text-gray-700 py-3.5 px-5  leading-8 rounded-lg transition-colors duration-200 ease-in-out mx-auto my-1"
          />
          <TextInput
            placeholder="Your Phone"
            className="w-[90%]  bg-white shadow-2xl border border-gray-300 focus:border-gray-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none  text-gray-700 py-3.5 px-5  leading-8 rounded-lg transition-colors duration-200 ease-in-out mx-auto my-1"
          />
          <TextInput
            placeholder="Your City"
            className="w-[90%]  bg-white shadow-2xl border border-gray-300 focus:border-gray-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none  text-gray-700 py-3.5 px-5  leading-8 rounded-lg transition-colors duration-200 ease-in-out mx-auto my-1"
          />
          <TextInput
            placeholder="Address"
            className="w-[90%]  bg-white shadow-2xl border border-gray-300 focus:border-gray-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none  text-gray-700 py-3.5 px-5  leading-8 rounded-lg transition-colors duration-200 ease-in-out mx-auto my-1"
          />
          <TouchableOpacity className="w-[90%]  bg-black focus:ring-4 focus:outline-none focus:ring-[#fc6013]/50 font-medium rounded-lg px-10 py-4 text-center  items-center dark:focus:ring-[#F7BE38]/50 mr-2  m-auto my-2">
            <Text
              className="text-white text-base font-bold"
             >
              Pay Amount
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Cart;
