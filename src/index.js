import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import '~/config/ReactotronConfig';

import Router from '~/routes/index';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#8b10ae" />
      <Router />
    </NavigationContainer>
  );
}
