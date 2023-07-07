import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Star from 'react-native-vector-icons/AntDesign';
import {bags} from '../components/specialOfferComponen/dummy';
import {ScrollView} from 'react-native';
import Shopping from 'react-native-vector-icons/MaterialCommunityIcons';
import TopBar from './TopBar';
const WomenProducts = () => {
  return (
    <View>
      <TopBar />
      <ScrollView>
        <View className="flex flex-row flex-wrap mb-20">
          {bags.map(item => {
            return (
              <View className="w-[40%] mx-auto my-4  p-4 relative rounded-full bg-white shadow-inner-2xl">
                <TouchableOpacity>
                  <View className=" rounded-xl ">
                    <Image
                      source={{
                        uri: item.pic,
                      }}
                      className="w-20 h-20 m-auto object-cover"
                    />
                  </View>
                </TouchableOpacity>
                <Text className="font-semibold text-center  my-1  text-black">
                  {item.name}
                </Text>
                <Text className="font-bold  text-center text-black text-sm  ">
                  $120.00
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default WomenProducts;
