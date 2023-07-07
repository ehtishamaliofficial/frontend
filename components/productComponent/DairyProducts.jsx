import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Star from 'react-native-vector-icons/AntDesign';
import {dairy} from '../productsDummy';
import { useNavigation } from '@react-navigation/native';
const DairyProducts = () => {
  const navigation=useNavigation()
  return (
    <View className="w-screen mx-auto  flex flex-row items-center justify-around flex-wrap ">
    {dairy.map(item => {
      return (
        <View className="w-[38%]  my-2 relative " >
          <TouchableOpacity onPress={()=>{navigation.navigate("Product")}}>
            <View className="bg-[#eaeaea] py-3 rounded-xl " >
              <Image
                source={{
                  uri: item.pic,
                }}
                className="w-24 h-20 mx-auto object-cover"
              />
            </View>
          </TouchableOpacity>
          <Text className="font-semibold text-center mt-1 text-black">
            {item.name}
          </Text>
          <View className="flex flex-row items-center justify-around my-1">
            <View className="flex flex-row items-center ">
              <Star name="star" color="black" size={15} />
              <Text className="text-xs font-extralight px-2 mx-1 mr-2 rounded-2xl bg-[#e8e8e8]">
                4.2
              </Text>
            </View>
            <Text className="font-semibold  text-justify text-black text-xs  ">
              $120.00
            </Text>
          </View>
        </View>
      );
    })}
  </View>
  );
};

export default DairyProducts;
