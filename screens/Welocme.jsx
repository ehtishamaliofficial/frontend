import {View, Text, TextComponent, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Welocme = () => {
  return (
    <View className="relative body-font font-quicksand">
      <Image
        source={{
          uri: 'https://i.ibb.co/VjPX7JH/group-smiling-friends-fashionable-jeans-young-men-women-posing-studio-fashion-people-happy-lifestyle.png',
        }}
        className="w-screen h-[95%] object-cover"
      />
      <View className="w-screen absolute top-[85%] left-0 right-0 ">
      <TouchableOpacity className=" w-4/5 my-6 bg-black focus:ring-4 focus:outline-none focus:ring-[#fc6013]/50 font-medium rounded-lg px-10 py-3.5 text-center  items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2 m-auto">
            <Text className="text-white text-base font-bold">One Step Forward</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welocme;
