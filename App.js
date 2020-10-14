import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainStackNavigator from './source/navigation/main-stack-navigator/main-stack-navigator.navigation'

class App extends Component {
  render(){
    return (
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    )
  }
}

export default App;
