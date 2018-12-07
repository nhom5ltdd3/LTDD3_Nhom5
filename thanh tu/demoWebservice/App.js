import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import Monhoc from './Monhoc';
import Danhsach from './Danhsach';
const RootStack = createStackNavigator(
  {
    Monhoc: Monhoc,
    Danhsach:Danhsach
  },
  {
    initialRouteName: 'Monhoc',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
