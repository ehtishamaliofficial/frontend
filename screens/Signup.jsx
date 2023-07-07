import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React from 'react';

const Signup = ({navigation}) => {
  const HideKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
  return (
    <HideKeyboard>
      <View className="my-2 bg-white w-screen h-screen body-font font-quicksand">
        <View className="my-2 w-screen h-[80%]">
          <TextInput
            placeholder="Name"
            className="w-4/5  bg-gray-100  border border-gray-100 focus:border-gray-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none  text-gray-700 py-3 px-5  leading-8 rounded-full transition-colors duration-200 ease-in-out m-auto"
          />
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            className="w-4/5  bg-gray-100  border border-gray-100 focus:border-gray-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none  text-gray-700 py-3 px-5  leading-8 rounded-full transition-colors duration-200 ease-in-out m-auto"
          />
          <TextInput
            placeholder="Address"
            className="w-4/5  bg-gray-100  border border-gray-100 focus:border-gray-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none  text-gray-700 py-3 px-5  leading-8 rounded-full transition-colors duration-200 ease-in-out m-auto"
          />
          <TextInput
            placeholder="Mobile"
            keyboardType="number-pad"
            className="w-4/5 bg-gray-100  border border-gray-100 focus:border-gray-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none  text-gray-700 py-3 px-5  leading-8 rounded-full transition-colors duration-200 ease-in-out m-auto"
          />
          <TextInput
            placeholder="Password"
            className="w-4/5 my-2 bg-gray-100  border border-gray-100 focus:border-gray-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3 px-5  leading-8 rounded-full transition-colors duration-200 ease-in-out m-auto"
          />
          <TextInput
            placeholder="Password"
            className="w-4/5 my-2 bg-gray-100  border border-gray-100 focus:border-gray-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3 px-5  leading-8 rounded-full transition-colors duration-200 ease-in-out m-auto"
          />
          <TouchableOpacity className=" w-4/5 my-6 bg-black focus:ring-4 focus:outline-none focus:ring-[#fc6013]/50 font-medium rounded-lg px-10 py-3.5 text-center  items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2 m-auto">
            <Text className="text-white text-lg font-bold">Signup</Text>
          </TouchableOpacity>
          <View className="w-screen flex flex-row items-center justify-center gap-x-1.5">
            <Text className="  font-medium text-base text-gray-600 text-center">
              Already have an Account ?
            </Text>
            <Text className=" color-black text-lg font-extrabold " onPress={()=>navigation.navigate("Login")}>Login</Text>
          </View>
        </View>
      </View>
    </HideKeyboard>
  );
};

export default Signup;
