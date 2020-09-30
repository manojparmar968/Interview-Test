import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/HomeScreen';
import Details from './src/Details';

const AuthStack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <AuthStack.Navigator
      initialRouteName='Home'
    >
      <AuthStack.Screen 
        name='Home'
        component={Home}
        options={{
          // title: 'Home',
          headerShown: false
        }}
      />
      <AuthStack.Screen 
        name='Details'
        component={Details}
        options={{
          // title:'Details',
          headerShown: false
        }}
      />
    </AuthStack.Navigator>
  </NavigationContainer>
);
