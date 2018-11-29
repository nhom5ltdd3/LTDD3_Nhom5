
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Button} from 'react-native';


export default class Monhoc extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={{textAlign:'center',fontSize: 20,color:'red'}}>Quản Lý Môn Học</Text>
        <View style={styles.nhap}>
       {/*  <View style={{flexDirection:'row',margin:20}}>
          <Text style={styles.label}>Mã môn học</Text>
          <TextInput style={styles.edittext}></TextInput>
        </View> */}
        <View style={{flexDirection:'row',margin:15}}>
          <Text style={styles.label}>Mã môn học</Text>
          <TextInput style={styles.edittext}></TextInput>
        </View>
        <View style={{flexDirection:'row',margin:15}}>
          <Text style={styles.label}>Tên môn học</Text>
          <TextInput style={styles.edittext}></TextInput>
        </View>   
          <View style={{flexDirection:'row',margin:15}}>
            <Text style={styles.label}>Tên giáo viên</Text>
            <TextInput style={styles.edittext}></TextInput>
          </View>
            
        </View>
        <View style={styles.button}>
        <Button
            title="Thêm"
            color='green'
            accessibilityLabel="Thêm mới môn học"
        />
        <Button 
            title="Quản Lý Điểm"
            color='green'
            onPress={() => this.props.navigation.navigate('QLDiem')}
            accessibilityLabel="Go to quản lý điểm"
        />
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
      flexDirection:'column',
  },
  label: {
    alignItems: 'flex-start',
    marginRight:25,
    color: '#333333',
    marginBottom: 5,
  },

  edittext: {
    alignItems: 'flex-end',
    borderColor: 'gray',
    width:200,
    height:25, 
    borderWidth: 1,
    marginBottom: 5,
  },
  button:{
    flexDirection:'row',
    justifyContent:'space-around',
    
   
  },
});
