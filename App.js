import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screen/Home';
import ResturentDetail from './src/screen/ResturentDetail.screen';



import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Business Search" component={Home} />
      <Stack.Screen name="Gallery" component={ResturentDetail} />
      {/*     <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer><MyStack /></NavigationContainer>
  );
}