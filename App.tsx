import { blue } from '@material-ui/core/colors';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
import ColorPalatte from './screens/ColorPalatte';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='ColorPalatte' component={ColorPalatte}/>

    </Stack.Navigator>
  </NavigationContainer>
  );
};

//List

export default App;
