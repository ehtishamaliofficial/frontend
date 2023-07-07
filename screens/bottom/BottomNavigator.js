import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginSignup from '../LoginSignup';
import Cart from '../Cart';
import Home from '../Home';
import SpecialOffers from '../SpecialOffers';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Products from '../Products';
import ElectronicsProducts from '../ElectronicsProducts';

const Bottom = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Bottom.Navigator
      screenOptions={({route}) => ({
        activeTintColor: '#000000',
        inactiveTintColor: 'black',
        activeBackgroundColor: 'white',
        inactiveBackgroundColor: 'white',
        tabBarShowLabel: false,
        labelStyle: {fontSize: 14},
        showIcon: true,
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
            size = focused ? 25 : 20;
            color = focused ? '#000000' : '#2b2929';
          } else if (route.name === 'SpecialOffers') {
            iconName = 'weight';
            size = focused ? 25 : 20;
            color = focused ? '#000000' : '#2b2929';
          } else if (route.name === 'Products') {
            iconName = 'braille';
            size = focused ? 25 : 20;
            color = focused ? '#000000' : '#2b2929';
          } else if (route.name === 'Cart') {
            iconName = 'shopping-bag';
            color = focused ? '#000000' : '#2b2929';
            size = focused ? 25 : 20;
          } else if (route.name === 'Account') {
            iconName = 'user-alt';
            color = focused ? '#000000' : '#2b2929';
            size = focused ? 25 : 20;
          } else if (route.name === 'ElectronicsProducts') {
            iconName = 'user-alt';
            color = focused ? '#000000' : '#2b2929';
            size = focused ? 25 : 20;
          }
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
      activeColor="black"
      inactiveColor="white"
      barStyle={{backgroundColor: 'white'}}>
      <Bottom.Screen
        name="Home"
        component={Home}
        screenOptions={{
          headerShown: () => false,
        }}
      />

      <Bottom.Screen
        name="SpecialOffers"
        component={SpecialOffers}
        options={{headerShown: false}}
      />
      <Bottom.Screen
        name="Products"
        component={Products}
        options={{headerShown: false}}
      />
      <Bottom.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: false}}
      />
      <Bottom.Screen
        name="Account"
        component={LoginSignup}
        options={{headerShown: false}}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;
