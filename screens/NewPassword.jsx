import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React from 'react';

const NewPassword = ({navigation}) => {
  const HideKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
  return (
    <HideKeyboard>
      <View className="w-screen  my-6">
        <Text className="text-center font-extrabold my-2 text-3xl color-gray-700">
          New Password
        </Text>
        <Text className="text-center my-3 w-3/4 mx-auto tracking-wider leading-5  text-gray-700 font-bold">
          Please enter your email to receive a link to create a new password via
          email
        </Text>
        <View className="my-3 ">
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            className="w-4/5 bg-gray-200  border border-gray-100 focus:border-gray-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none  text-gray-700 px-5  leading-8 rounded-lg transition-colors duration-200 ease-in-out m-auto"
          />
        </View>
        <View className="my-3">
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            className="w-4/5 bg-gray-200   border border-gray-100 focus:border-gray-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none  text-gray-700 px-5  leading-8 rounded-lg transition-colors duration-200 ease-in-out m-auto"
          />
        </View>
        <TouchableOpacity className=" w-4/5  bg-black focus:ring-4 focus:outline-none focus:ring-[#fc6013]/50 font-medium rounded-lg px-10 py-3.5 my-3 text-center  items-center dark:focus:ring-[#F7BE38]/50 mx-auto">
          <Text className="text-white text-base font-bold">Next</Text>
        </TouchableOpacity>
        <Text className="font-medium text-base text-gray-600 text-center" onPress={()=>navigation.navigate("OTP")}>
      Enter OTP Here
      </Text>
      </View>
      
    </HideKeyboard>
  );
};

export default NewPassword;
