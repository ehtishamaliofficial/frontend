import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Home from '../Home';

const Splash = ({navigation}) => {
  const navigationToParent = () => {
    setTimeout(() => {
      navigation.navigate('Parent');
    }, 100);
  };
  useEffect(() => {
    navigationToParent();
  }, []);

  return (
    <View>
      <Text>
        <Home />
      </Text>
    </View>
  );
};

export default Splash;
