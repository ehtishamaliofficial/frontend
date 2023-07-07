import { View, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from './Main';
import CustomDrawer from './CustomDrawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Bags from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/MaterialIcons';
import Home from '../Home';
import Products from '../Products';
import Login from '../Login';
import ElectronicsProducts from '../ElectronicsProducts';
import SpecialOffers from '../SpecialOffers';
import MenProducts from '../MenProducts';
import Sneakers from '../Sneakers';
import Cart from '../Cart';
import WomenProducts from '../WomenProducts';
import Signup from '../Signup';
import Product from '../Product';
import Dashboard from '../Dashboard';
import AddProduct from '../AddProduct';
import ShowProduct from '../ShowProduct';
import AddCategory from '../AddCategory';
import UpdateStatus from '../UpdateStatus';
import ShowCategory from '../ShowCategory.jsx';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      {/* <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}> */}
      <Drawer.Screen
        name="Menu"
        component={Main}
        options={{ headerShown: true }}
      />
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: 'Dashboard',
          drawerIcon: ({ focused }) => (
            <FontAwesome
              name="dashboard"
              size={focused ? 25 : 20}
              color={focused ? '#068FFF' : '#000000'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          drawerIcon: ({ focused }) => (
            <FontAwesome5
              name="home"
              size={focused ? 25 : 20}
              color={focused ? '#068FFF' : '#000000'}
            />
          ),
        }}
      />

      <Drawer.Screen
        name='Add Product'
        component={AddProduct}
        options={{
          title: 'Add Product',
          drawerIcon: ({ focused }) => (
            <FontAwesome
              name="add-shopping-cart"
              size={focused ? 25 : 20}
              color={focused ? '#068FFF' : '#000000'}
            />

          ),
        }}
      />

      <Drawer.Screen
        name='Show Products'
        component={ShowProduct}
        options={{
          title: 'Show Products',
          drawerIcon: ({ focused }) => (
            <FontAwesome
              name="shopping-cart"
              size={focused ? 25 : 20}
              color={focused ? '#068FFF' : '#000000'}
            />
          ),
        }}
      />

      <Drawer.Screen
        name='Add Category'
        component={AddCategory}
        options={{
          title: 'Add Category',
          drawerIcon: ({ focused }) => (
            <FontAwesome
              name="add-box"
              size={focused ? 25 : 20}
              color={focused ? '#068FFF' : '#000000'}
            />
          )
        }}
      />

      <Drawer.Screen
        name='All Categories'
        component={ShowCategory}
        options={{
          title: 'All Categories',
          drawerIcon: ({ focused }) => (
            <FontAwesome
              name="list"
              size={focused ? 25 : 20}
              color={focused ? '#068FFF' : '#000000'}
            />
          )
        }}
      />

      <Drawer.Screen
        name='UpdateStatus'
        component={UpdateStatus}
        options={{
          title: 'Update Status',
          drawerIcon: ({ focused }) => (
            <FontAwesome
              name="check-circle"
              size={focused ? 25 : 20}
              color={focused ? '#068FFF' : '#000000'}
            />
          )
        }}
      />

      <Drawer.Screen
        name="Recent"
        component={Products}
        options={{
          title: 'Products',
          drawerIcon: ({ focused }) => (
            <Icon
              name="checkbox-blank-badge"
              size={focused ? 25 : 20}
              color={focused ? '#0080ff' : '#999999'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Special Offers"
        component={SpecialOffers}
        options={{ headerShown: true }}
      />
      <Drawer.Screen
        name="Electronics"
        component={ElectronicsProducts}
        options={{
          title: 'Electronics',
          drawerIcon: ({ focused }) => (
            <FontAwesome
              name="camera-alt"
              size={focused ? 25 : 20}
              color={focused ? '#068FFF' : '#000000'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Product"
        component={Product}
        options={{
          title: 'Product',
          drawerIcon: ({ focused }) => (
            <FontAwesome
              name="camera-alt"
              size={focused ? 25 : 20}
              color={focused ? '#068FFF' : '#000000'}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="MenProdcuts"
        component={MenProducts}
        options={{
          title: 'Casual shirts',
          drawerIcon: ({ focused }) => (
            <Icon
              name="tshirt-crew"
              size={focused ? 25 : 20}
              color={focused ? '#068FFF' : '#000000'}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Sneakers"
        component={Sneakers}
        options={{
          title: 'Sneakers',
          drawerIcon: ({ focused }) => (
            <Icon
              name="shoe-formal"
              size={focused ? 25 : 20}
              color={focused ? '#068FFF' : '#000000'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="WomenProducts"
        component={WomenProducts}
        options={{
          title: 'Hand bags',
          drawerIcon: ({ focused }) => (
            <Bags
              name="shopping-bag"
              size={focused ? 25 : 20}
              color={focused ? '#068FFF' : '#000000'}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Cart"
        component={Cart}
        options={{
          title: 'Cart',
          drawerIcon: ({ focused }) => (
            <FontAwesome
              name="shopping-bag"
              size={focused ? 25 : 20}
              color={focused ? '#068FFF' : '#000000'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
          drawerIcon: ({ focused }) => (
            <FontAwesome
              name="person-add"
              size={focused ? 25 : 20}
              color={focused ? '#068FFF' : '#000000'}
            />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="Signup"
        component={Signup}
        options={{
          title: 'Signup',
          drawerIcon: ({focused}) => (
            <FontAwesome
              name="person-pin"
              size={focused ? 25 : 20}
             color={focused ? '#068FFF' : '#000000'}
            />
          ),
        }}
      /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
