import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import DanhSach from './DanhSach';
export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Thông Tin Sinh Viên', // to add letter spacing on Android
    headerStyle: {
      backgroundColor: '#0a538b',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      marginLeft: 40
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      HOTEN: '',
      ANH: '',
      LOP: '',
    }
  }

  InsertStudent() {
        fetch('http://192.168.1.166/database/ThemSinhVien.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                HOTEN: this.state.HOTEN,
                ANH: this.state.ANH,
                LOP: this.state.LOP,
            }),
        })
            .then((responseJson) => {
                alert("Tạo tài khoản thành công");
                DanhSach.push();
            })
            .catch((error) => {
                console.error(error);
            });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logocontainer}>
          <Image style={styles.logo}
            source={require('../icons/TDC.jpg')}
          >
          </Image>
          <Text style={{ color: '#c0b01d', margin: 5 }}>fit.edu.vn</Text>

        </View>
        <View style={styles.infocontainer}>
          <TextInput style={styles.hoten}
            onChangeText={(HOTEN) => this.setState({ HOTEN })}
            value={this.state.HOTEN}
            placeholder='Họ tên sinh viên'
            placeholderTextColor='red'
            returnKeyType='next'
            autoCorrect={false}
            ref={"edhoten"}
            onSubmitEditing={() => this.refs.edlop.focus()}
          />
          <TextInput style={styles.hinh}
            onChangeText={(ANH) => this.setState({ ANH })}
            value={this.state.ANH}
            placeholder='Ảnh'
            placeholderTextColor='red'
            returnKeyType='next'
            autoCorrect={false}
            ref={"edanh"}
          />
          <TextInput style={styles.lop}
            onChangeText={(LOP) => this.setState({ LOP })}
            value={this.state.LOP}
            placeholder='Lớp'
            placeholderTextColor='red'
            returnKeyType='next'
            autoCorrect={false}
            ref={"edlop"}
            onSubmitEditing={() => this.refs.edanh.focus()}
          />
          <View style={styles.button}>
            <View style={{ flexDirection: 'column' }}>
              <View style={styles.btnthem}>
                <TouchableOpacity
                  onPress={() => this.InsertStudent()}
                >
                  <Image style={styles.plus}
                    source={require('../icons/add.png')}
                  >
                  </Image>
                </TouchableOpacity>

              </View>

            </View>
            <View style={{ flexDirection: 'column' }}>
              <View style={styles.btnchitiet}>
                <TouchableOpacity
                >
                  <Image style={styles.plus}
                    source={require('../icons/x-button.png')}
                  >
                  </Image>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,// co giản màn hình
    backgroundColor: 'white',
  },
  infocontainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 300,

  },
  logocontainer: {
    alignItems: 'center',
    flex: 1,
    marginTop: 20
  },
  logo: {
    width: 140,
    height: 140

  },
  hoten: {
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 5,
    height: 40,

  },
  hinh: {
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 5,
    height: 40,
  },
  lop: {
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 5,
    height: 40,

  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  btnthem: {
    width: 150,
    height: 80,
    marginTop: 10,
    margin: 10
  },
  btnchitiet: {
    width: 150,
    height: 80,
    marginTop: 10,
    margin: 10
  },
  plus: {
    marginTop: 10,
    marginLeft: 40

  },

});