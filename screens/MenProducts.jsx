import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Star from 'react-native-vector-icons/AntDesign';
import {Shirts} from '../components/specialOfferComponen/dummy';
import {ScrollView} from 'react-native';
import TopBar from "./TopBar"
import Shopping from 'react-native-vector-icons/MaterialCommunityIcons';
const MenProducts = () => {
  return (
    <View>
  <TopBar/>
      <ScrollView>
        <View className="flex flex-row flex-wrap mb-40">
          {Shirts.map(item => {
            return (
              <View className="w-[40%] mx-auto my-4   p-3 relative rounded-full bg-white shadow-inner-2xl">
                <TouchableOpacity>
                  <View className=" rounded-xl ">
                    <Image
                      source={{
                        uri: item.pic,
                      }}
                      className="w-24 h-24 m-auto object-cover"
                    />
                  </View>
                </TouchableOpacity>
                <Text className="font-semibold text-center  text-black">
                  {item.name}
                </Text>
                <Text className="font-semibold  text-center text-black text-xs">
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

export default MenProducts;
