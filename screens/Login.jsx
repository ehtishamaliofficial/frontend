import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';
import Signup from '../screens/Signup';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import Google from 'react-native-vector-icons/AntDesign';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const Login = ({ navigation }) => {
  const HideKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);
  return (
    <HideKeyboard>
      <View className="my-2 bg-white w-screen h-screen body-font font-quicksand">
        <Text className="font-bold text-xl text-black text-center my-2">
          Login
        </Text>
        <Text className="font-normal text-xs text-black text-center">
          Please enter your login credentials
        </Text>
        <View className="mt-2 w-screen h-[38%]">
          <TextInput
            placeholder="Your Email"
            className="w-4/5  bg-gray-100  border border-gray-100 focus:border-gray-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none  text-gray-700 py-3.5 px-5  leading-8 rounded-lg transition-colors duration-200 ease-in-out m-auto"
          />
          <TextInput
            placeholder="Password"
            className="w-4/5  bg-gray-100  border border-gray-100 focus:border-gray-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3.5 px-5  leading-8 rounded-lg transition-colors duration-200 ease-in-out m-auto"
          />
          <TouchableOpacity className=" w-4/5 my-3 bg-black focus:ring-4 focus:outline-none focus:ring-[#fc6013]/50 font-medium rounded-lg px-10 py-3.5 text-center  items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2 m-auto">
            <Text className="text-white text-base font-bold">Login</Text>
          </TouchableOpacity>
          <Text
            className=" font-medium text-base text-gray-600 text-center"
            onPress={() => navigation.navigate('NewPassword')}>
            Forgot Password
          </Text>
        </View>
        <View className="my-4 w-screen h-[25%]">
          <Text className="my-2 font-medium text-base text-gray-600 text-center">
            or Login with
          </Text>

        </View>
        <View className="w-screen flex flex-row items-center justify-center gap-x-1.5">
          <Text className="  font-medium text-base text-gray-600 text-center">
            Dont have an Account ?
          </Text>
          <Text
            className=" color-black text-lg font-extrabold"
            onPress={() => navigation.navigate('Signup')}>
            Signup
          </Text>
        </View>
      </View>
    </HideKeyboard>
  );
};

export default Login;
