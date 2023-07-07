import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'

const OTP = () => {
    const HideKeyboard = ({ children }) => (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          {children}
        </TouchableWithoutFeedback>
      );
  return (
    <HideKeyboard>

    <View className="w-screen my-6">
        <Text className=" w-3/4 mx-auto text-center font-extrabold my-2 text-2xl color-gray-700">We have sent an OTP to your Mobile</Text>
        <Text className="text-center my-2 w-4/5 mx-auto tracking-wider leading-5  text-gray-500 font-bold">Please check your mobile number 124*****567 to continue to reset password</Text>
        <View className="my-6 flex flex-row items-center justify-center">

         <TextInput
          keyboardType='number-pad'
          className="w-16 bg-gray-200  border border-gray-100 focus:border-gray-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none  text-gray-700 px-8 py-4  leading-8 rounded-md transition-colors duration-200 ease-in-out mx-1"
          /> 
           <TextInput
          keyboardType='number-pad'

          className="w-16 bg-gray-200  border border-gray-100 focus:border-gray-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none  text-gray-700 px-4 py-4  leading-8 rounded-md transition-colors duration-200 ease-in-out mx-1"
          /> 
           <TextInput
          keyboardType='number-pad'
          className="w-16 bg-gray-200  border border-gray-100 focus:border-gray-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none  text-gray-700 px-4 py-4  leading-8 rounded-md transition-colors duration-200 ease-in-out mx-1"
          />
              <TextInput
          keyboardType='number-pad'

          className="w-16 bg-gray-200  border border-gray-100 focus:border-gray-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none  text-gray-700 px-4 py-4  leading-8 rounded-md transition-colors duration-200 ease-in-out mx-1"
          />
          </View>
         <TouchableOpacity className=" w-4/5  bg-black focus:ring-4 focus:outline-none focus:ring-[#fc6013]/50 font-medium rounded-lg px-10 py-3.5 my-2 text-center  items-center dark:focus:ring-[#F7BE38]/50 mx-auto">
          <Text className="text-white text-base font-bold">Next</Text>
        </TouchableOpacity> 
        <View className="w-screen flex flex-row items-center justify-center gap-x-1.5">
            <Text className="  font-medium text-base text-gray-600 text-center">
              Didn't received code?
            </Text>
            <Text className=" color-black text-base font-extrabold ">Send again</Text>
          </View>
    </View>
    </HideKeyboard>
  )
}

export default OTP