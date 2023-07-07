import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import ReviewComponent from '../components/ReviewComponent';

const Review = () => {
  return (
    <View className="mb-28">
      <View
        className="flex flex-row items-center gap-x-2
        mt-8 mb-4 mx-6">
        <Text className="text-2xl font-extrabold text-black">4.8 </Text>
        <Text className="text-lg font-bold text-black">(120 reviews)</Text>
      </View>
      <ScrollView>
        <ReviewComponent />
        <ReviewComponent />
        <ReviewComponent />
        <ReviewComponent />
        <ReviewComponent />
      </ScrollView>
    </View>
  );
};

export default Review;
