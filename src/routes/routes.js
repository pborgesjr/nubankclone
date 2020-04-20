import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '~/pages/Main';

export default function createRouter() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={Main} />
    </Stack.Navigator>
  );
}
