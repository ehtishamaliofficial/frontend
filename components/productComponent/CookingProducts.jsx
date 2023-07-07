import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Star from 'react-native-vector-icons/AntDesign';
import {cookingOil} from '../productsDummy';
const CookingProducts = () => {
  return (
    <View className="body-font font-quicksand">
      <ScrollView horizontal={true}>
        {cookingOil.map(item => {
          return (
            <View className="w-[10%] mx-3 mt-6 relative ">
              <TouchableOpacity>
                <View className="bg-[#eaeaea] p-4 rounded-full ">
                  <Image
                    source={{
                      uri: item.pic,
                    }}
                    className="w-14 h-16 m-auto object-cover"
                  />
                </View>
              </TouchableOpacity>
           
              {item?.new && (
                <Text className="absolute bg-black px-3 py-1.5 top-[-10px] left-[-10px] text-white text-xs font-bold rounded-full">
                  {item.new}
                </Text>
              )}
            
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CookingProducts;
