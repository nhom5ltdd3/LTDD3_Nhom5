import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import Monhoc from './Monhoc';
import QLDiem from './QLDiem';
//import MuaHang from './MuaHang';

const RootStack = createStackNavigator(
  {
    Monhoc: Monhoc,
    QLDiem: QLDiem,
    //MuaHang: MuaHang,
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
