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
import {electronics2, electronics1} from '../productsDummy';
import {useNavigation}  from '@react-navigation/native';
const Electonics = () => {
  const navigation=useNavigation()
  return (
    <View className="body-font font-quicksand ">
      <ScrollView horizontal={true}>
        {electronics2.map(item => {
          return (
            <View className="w-[20%] mx-4 my-4 relative ">
              <TouchableOpacity onPress={()=>navigation.navigate("Product")}>
                <View className="bg-[#eaeaea] py-4 rounded-full ">
                  <Image
                    source={{
                      uri: item.pic,
                    }}
                    className="w-20 h-20 m-auto object-cover"
                  />
                </View>
              </TouchableOpacity>
              <Text className="my-2 text-center text-sm text-black">
                {item.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>

      <ScrollView horizontal={true}>
        {electronics1.map(item => {
          return (
            <View className="w-[15%] mx-2 my-4 relative ">
            <TouchableOpacity>
              <View className="bg-[#eaeaea] py-4 rounded-full ">
                <Image
                  source={{
                    uri: item.pic,
                  }}
                  className="w-20 h-20 m-auto object-cover"
                />
              </View>
            </TouchableOpacity>
            <Text className="my-2 text-center text-sm text-black">
              {item.name}
            </Text>
          </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Electonics;
