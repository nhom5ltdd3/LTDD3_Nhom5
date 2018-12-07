import React,{Component} from 'react';
import {Platform, StyleSheet, Text, View,ListView,StatusBar,TextInput,TouchableOpacity} from 'react-native';

var URL = 'http://192.168.174.2/demo/NhapMonHoc.php';

export default class NhapMonHoc extends Component {


    XoaMonHoc(){
        <DeleteModel/>
    }

    NhapMonHoc(){
        fetch(URL,{ method: "POST" ,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: 
        JSON.stringify({ 
            MonHoc: this.state.MonHoc , 
            HocPhi: this.state.HocPhi
            })
        })
        //.then((response) => response.text())
        .then((responseData) =>
        {
            alert("Đã nhập thành công!")
        })
        .catch((error) => {
            console.error(error);
        });
        //.done()
    }

    constructor(props){
        super(props);
        this.state={
            MonHoc:'',
            HocPhi:''
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.textInput}
                    onChangeText={(MonHoc) => this.setState({MonHoc})}
                    value={this.state.MonHoc}
                    placeholder='Nhập môn học'
                />

                 <TextInput style={styles.textInput}
                    onChangeText={(HocPhi) => this.setState({HocPhi})}
                    value={this.state.HocPhi}
                    placeholder='Nhập học phí'
                />
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity 
                onPress={() => this.NhapMonHoc()}
                style={{backgroundColor:'green',marginRight:15}}
                >
                    <Text style={{color:'white',fontSize:16}}>Nhap</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={() => this.XoaMonHoc()}
                style={{backgroundColor:'green',marginRight:15}}
                >
                    <Text style={{color:'white',fontSize:16}}>Xoa</Text>
                </TouchableOpacity>

                <TouchableOpacity
                 onPress={() => this.props.navigation.navigate('Danhsach')}
                style={{backgroundColor:'green'}}>
                <Text style={{color:'white',fontSize:16}}>Danh Sách MH</Text>
                </TouchableOpacity>
            </View>
                
            </View>
        );
    }


}

var styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        flex:1,
        alignItems:'center'
    },
    textInput:{
        margin:5,
        height:45,
        width:300,
        borderWidth:1,
        borderColor:'#09C',
        marginBottom:15,
    }
});

module.exports=NhapMonHoc;