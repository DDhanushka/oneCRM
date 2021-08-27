import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WelcomeScreen from '../screens/WelcomeScreen';
import Other from '../screens/Other';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={WelcomeScreen} />
        <Tab.Screen name="Settings" component={Other} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
