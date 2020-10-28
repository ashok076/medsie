import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { Root } from "native-base";

import MainStackNavigator from './source/navigation/main-stack-navigator/main-stack-navigator.navigation'

class App extends Component {
  render(){
    return (
      <Root>
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
      </Root>
    )
  }
}

export default App;
