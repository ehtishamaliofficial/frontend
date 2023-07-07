import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import CommonCard from '../common/CommonCard';
const data = [
  {
    title: 'Starred',
    icon: require('../star.png'),
    isNew: false,
    count: 2,
  },
];
const CustomDrawer = ({navigation}) => {
  return (
    <SafeAreaView>
      <View className="w-3/4 my-2">
        <Text className=" font-bold text-center text-2xl">Menu</Text>
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;
