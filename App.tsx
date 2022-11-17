/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';

import AppStack from './src/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <AppStack />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
