import {View, Text, Image} from 'react-native';
import React from 'react';
import {slider} from '../specialOfferComponen/dummy';
import Swiper from 'react-native-swiper';
const Slider = () => {
  return (
    <View className="w-screen h-40">
      <Swiper showsButtons={true} autoplay={true} autoplayTimeout={3}autoplayDirection={true} dotColor="white" activeDotColor="black"  >
        {slider.map((item, index) => {
          return (
            <Image
              source={{uri: item.pic}}
              className="w-screen h-40 object-cover"
            />
          );
        })}
      </Swiper>
    </View>
  );
};

export default Slider;
