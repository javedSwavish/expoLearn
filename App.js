// In App.js in a new project

import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import * as React from 'react';
import StackNavigator from './src/stack/StackNavigator';

function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider >
        <StackNavigator />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default App;