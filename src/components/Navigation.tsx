import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import {Home} from '../screens/Home';
import {AddTask} from '../screens/AddTask';
import {Welcome} from '../screens/Welcome';

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  AddTask: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export type ScreenProps = NativeStackScreenProps<RootStackParamList>;

export const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddTask" component={AddTask} />
    </Stack.Navigator>
  );
};
