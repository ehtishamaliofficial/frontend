import {View, Text, Image} from 'react-native';
import React from 'react';
import Edit from 'react-native-vector-icons/MaterialCommunityIcons';
import Star from 'react-native-vector-icons/AntDesign';

const ReviewComponent = () => {
  return (
    <View className="w-screen mt-5 px-3">
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row items-center gap-4">
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTICtOvOGF_qDZf1xRb7038Q0BS1eimBfvspMpE10kx&s',
            }}
            className="w-12 h-12 rounded-full"
          />
          <Text className="font-bold text-base">Noman Sanaullah</Text>
        </View>
        <View className="flex flex-row items-center gap-5">
          <View className="flex flex-row items-center bg-black  px-3 py-1 rounded-full ">
            <Star name="star" color="white" size={13} />

            <Text className="font-semibold text-white text-sm mx-2">4.2</Text>
          </View>
          <Edit name="dots-vertical-circle-outline" color="black" size={20} />
        </View>
      </View>
      <View className="mt-3">
        <Text className="text-gray-500 font-semibold text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
          dolorum numquam quam ad, veritatis architecto saepe minus adipisci
          aspernatur eos!
        </Text>
        <Text className=" w-32 text-center border border-black py-1 rounded-full text-black my-3">46 days ago</Text>
      </View>
      <Text className="w-screen h-0.5 border border-gray-300 "></Text>
    </View>
  );
};

export default ReviewComponent;
