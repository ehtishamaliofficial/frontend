import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './normal/Splash';
import Parent from './normal/Parent';
import Login from './Login';
import Signup from './Signup';
import Sneakers from './Sneakers';
import NewPassword from './NewPassword';
import SpecialOfferComponent from './SpecialOfferComponent';
import MenProducts from './MenProducts';
import Review from './Review';
import Product from './Product';
import ProductCard from '../components/productComponent/ProductCard';
import Mens from '../components/productComponent/Mens';
import OTP from './OTP';
import Cart from './Cart';
import WomenProducts from './WomenProducts';
import LoginSignup from './LoginSignup';
import Products from './Products';
import SpecialOffers from './SpecialOffers';
import ElectronicsProducts from './ElectronicsProducts';
import Electonics from '../components/productComponent/Electonics';
import DairyProducts from '../components/productComponent/DairyProducts';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Parent"
          component={Parent}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="LoginSignup" component={LoginSignup} />
        <Stack.Screen name="WomenProducts" component={WomenProducts} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Electronics" component={ElectronicsProducts} />
        <Stack.Screen name="MenProducts" component={MenProducts} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Sneakers" component={Sneakers} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="DairyProducts" component={DairyProducts} />
        <Stack.Screen name="Review" component={Review} />
        <Stack.Screen name="Mens" component={Mens} />
        <Stack.Screen name="ProductCard" component={ProductCard} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="Electonics" component={Electonics} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="SpecialOffers" component={SpecialOffers} />
        <Stack.Screen name="noman" component={SpecialOfferComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
