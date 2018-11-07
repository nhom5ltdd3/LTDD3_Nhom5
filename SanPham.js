import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class SanPham extends Component {
    constructor(props) {
        super(props);
        this.state = {
            soluong: 0
        }

    }

    onPressTangSL = () => {

        // alert("chọn sản phẩm");
        console.log(this.state.soluong);
        this.setState({
            soluong: this.state.soluong + 1
        })
    }

    onPressGiamSL = () => {

        // alert("chọn sản phẩm");
        console.log(this.state.soluong);
        this.setState({
            soluong: this.state.soluong - 1
        })
    }
    render() {
        return (
            <View style={styles.sp}>
                <TextInput style={styles.masp}
                    placeholder='Mã sản phẩm:'
                    placeholderTextColor='red'
                    returnKeyType='next'
                    autoFocus={true}
                    autoCorrect={false}
                    ref={"edmasp"}
                    onSubmitEditing={() => this.refs.edlop.focus()}
                />
                <TextInput style={styles.tensp}
                    placeholder='Tên sản phẩm:'
                    placeholderTextColor='red'
                    returnKeyType='next'
                    //autoFocus={true}
                    autoCorrect={false}
                    ref={"edtensp"}
                    onSubmitEditing={() => this.refs.edlop.focus()}
                />
                <TextInput style={styles.soluongton}
                    placeholder='Số lượng tồn:'
                    placeholderTextColor='red'
                    returnKeyType='next'
                    //autoFocus={true}
                    autoCorrect={false}
                    ref={"edtensp"}
                    onSubmitEditing={() => this.refs.edlop.focus()}
                />
                <Text style={{ color: 'red', margin: 10 }}>Danh sách sản phẩm: </Text>
                <TextInput style={styles.dssp}
                    //placeholder='Danh sách sản phẩm'
                    placeholderTextColor='rgba(255,255,255,0.2)'
                    returnKeyType='next'
                    //autoFocus={true}
                    autoCorrect={false}
                    ref={"edtensp"}
                    onSubmitEditing={() => this.refs.edlop.focus()}
                />
                <View style={styles.button}>
                    <TouchableOpacity style={styles.btntang}
                    onPress={() => { this.onPressTangSL() }}>
                <Text style={styles.plus}>+</Text>
                </TouchableOpacity>

               <Text style={{marginTop:10, borderColor: 'gray', borderWidth: 1, height: 50,backgroundColor: 'rgba(255,255,255,0.2)',}}>Số lượng: {this.state.soluong}</Text>  

                <TouchableOpacity style={styles.btngiam}
                    onPress={() => { this.onPressGiamSL() }}>
                    <Text style={styles.plus2}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.chitiet}
                    onPress={this.addcount}>
                    <Text style={styles.plus3}>Chi tiết</Text>
                </TouchableOpacity>

            </View>
            </View >

        );
    }
}
const styles = StyleSheet.create({
    sp: {
        justifyContent: 'flex-start',
        flex: 1,
        backgroundColor: '#1050b7',
    },
    masp: {
        borderColor: 'gray',
        borderWidth: 1,
        height: 30,
        backgroundColor: '#51c95d',
        marginBottom: 5,
        margin: 10
    },
    tensp: {
        borderColor: 'gray',
        borderWidth: 1,
        height: 30,
        backgroundColor: '#51c95d',
        marginBottom: 5,
        margin: 10
    },
    soluongton: {
        borderColor: 'gray',
        borderWidth: 1,
        height: 30,
        backgroundColor: '#51c95d',
        marginBottom: 5,
        margin: 10
    },
    dssp: {
        borderColor: 'gray',
        borderWidth: 1,
        height: 150,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginTop: 5,
        margin: 10
    },
    button: {
        flexDirection: 'row'

    },
    btntang: {
        //position:'absolute',
        width: 50,
        height: 50,
        //borderRadius:50,
        backgroundColor: '#357ae8',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginTop: 10,
        margin: 10
    },
    plus: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',

    },
    btnsoluong: {
        //position:'absolute',
        width: 50,
        height: 50,
        //borderRadius:50,
        backgroundColor: '#357ae8',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginTop: 10,
        margin: 10
    },
    plus1: {
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold',

    },
    btngiam: {
        //position:'absolute',
        width: 50,
        height: 50,
        //borderRadius:50,
        backgroundColor: '#357ae8',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginRight: 30,
        margin: 10
    },
    plus2: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',

    },
    chitiet: {
        //position:'absolute',
        width: 140,
        height: 50,
        //borderRadius:50,
        backgroundColor: '#357ae8',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    plus3: {
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold',

    }
});
