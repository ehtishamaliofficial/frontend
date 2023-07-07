import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
const LoginSignup = ({navigation}) => {

  return (
    <View className="w-screen h-screen">
      <Image
        source={{uri: 'https://i.ibb.co/ckYphfS/2-7-removebg-preview.png'}}
        className="w-screen h-[45%] mx-auto object-cover "
      />
      {/* <Image
        source={{uri:"https://i.ibb.co/ckYphfS/2-7-removebg-preview.png"}}
        className="w-44 h-32 object-cover mx-auto  "
      /> */}
      <Text className="text-center mt-2 w-3/4 mx-auto tracking-wider leading-5  text-gray-800 font-bold ">
        Discover the best items for yourself from store and get incredible
        discounts
      </Text>
      <TouchableOpacity
        className=" w-4/5 mb-0 bg-black focus:ring-4 focus:outline-none focus:ring-[#fc6013]/50 font-medium rounded-lg px-10 py-3.5 mt-10 text-center  items-center dark:focus:ring-[#F7BE38]/50 mx-auto"
        onPress={() => navigation.navigate('Login')}>
        <Text className="text-white text-base font-bold">Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className=" w-4/5 border-2 border-black focus:ring-4 focus:outline-none focus:ring-[#fc6013]/50 font-medium rounded-lg px-10 py-3.5 text-center items-center dark:focus:ring-[#F7BE38]/50 my-4 mx-auto"
        onPress={() => navigation.navigate('Signup')}
      >
        <Text className="text-black font-semibold text-base">
          Create New Account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginSignup;
