import React, {Component} from 'react';
import { View} from 'react-native';
import SanPham from './SanPham';

export default class dssanpham extends Component {
  render() {
    return (
      <View>
       <SanPham masp="SP001" tensp="Áo" soluongton="20"/>
       <SanPham masp="SP002" tensp="Quần"soluongton="10"/>
      </View>
    );
  }
}

