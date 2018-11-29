
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class QLDiem extends React.Component {
  render() {
    
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center', fontSize: 20, color: 'red' }}>Quản Lý Điểm</Text>
        <View style={styles.nhap}>
          {/*  <View style={{flexDirection:'row',margin:20}}>
          <Text style={styles.label}>Mã môn học</Text>
          <TextInput style={styles.edittext}></TextInput>
        </View> */}
          <View style={{ flexDirection: 'row', margin: 15 }}>
            <Text style={styles.label}>     Điểm gữa kỳ</Text>
            <TextInput style={styles.edittext}></TextInput>
          </View>
          <View style={{ flexDirection: 'row', margin: 15 }}>
            <Text style={styles.label}>     Điểm cuối kỳ</Text>
            <TextInput style={styles.edittext}></TextInput>
          </View>
          <View style={{ flexDirection: 'row', margin: 15 }}>
            <Text style={styles.label}>Điểm trung bình</Text>
            <TextInput style={styles.edittext}></TextInput>
          </View>

        </View>
        <View style={styles.button}>
          <TouchableOpacity>
            <Text style={{ fontSize: 15, color: 'green', textAlign: 'center' }}>Thêm</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontSize: 15, color: 'red', textAlign: 'center' }}>Hủy</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nhap: {
    flexDirection: 'column',
  },
  label: {
    alignItems: 'flex-start',
    marginRight: 25,
    color: '#333333',
    marginBottom: 5,
  },

  edittext: {
    alignItems: 'flex-end',
    borderColor: 'gray',
    width: 200,
    height: 25,
    borderWidth: 1,
    marginBottom: 5,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',


  },
});
