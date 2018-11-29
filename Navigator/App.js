import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import HomeScreen from './Components/HomeScreen';
import DetailsScreen from './Components/DetailsScreen';
import DoiMatKhau from './Components/DoiMatKhau';
import AddCountNew from './Components/AddCountNew';
import DanhSach from './Components/DanhSach';
import TrangChu from './Components/TrangChu';
import Monhoc from './Components/Monhoc';
import QLDiem from './Components/QLDiem';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    TrangChu:TrangChu,
    DoiMatKhau:DoiMatKhau,
    QLDiem:QLDiem,
    Monhoc:Monhoc,
    Details: DetailsScreen,
    AddCountNew:AddCountNew,
    DanhSach:DanhSach,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
