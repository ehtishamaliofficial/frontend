import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Shopping from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
const TopBar = () => {
  const navigation=useNavigation()
  return (
    <View className="flex flex-row items-center justify-between mt-8 mb-4 mx-6">
      <Text className="text-base font-medium text-black">Welcome </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Shopping
          name="shopping"
          size={25}
          color="black"
          className="font-bold"
        />
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;
