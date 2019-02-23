import React, {Component} from 'react';
import MainStack from './src/router.js';
import { createAppContainer} from 'react-navigation';
// import Landing from './src/UIcomponents/Landing.js';

const AppMain = createAppContainer(MainStack);
export default class App extends Component {
  
  render() {
    return (
    <AppMain/>
    );
  }
}

