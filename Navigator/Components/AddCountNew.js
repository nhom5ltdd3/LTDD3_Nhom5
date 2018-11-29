
import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
export default class AddCountNew extends React.Component {
    static navigationOptions = {
        title: 'Registration', // to add letter spacing on Android
        headerStyle: {
            backgroundColor: '#0b2e05',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            marginLeft: 70
        },
    };
    constructor(props) {
        super(props);
        this.state = {
            HOTEN: "",
            USERNAME: "",
            PASSWORD: "",
        }
    }
    insertaccount() {
        fetch('http://192.168.1.166/database/account.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                HOTEN: this.state.HOTEN,
                USERNAME: this.state.USERNAME,
                PASSWORD: this.state.PASSWORD,
            }),
        })
            .then((responseJson) => {
                alert("Tạo tài khoản thành công");
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.hoten}
                    onChangeText={(HOTEN) => this.setState({ HOTEN })}
                    value={this.state.HOTEN}
                    placeholder='Họ tên'
                    placeholderTextColor='rgba(255,255,255,0.8)'
                    autoFocus={true}
                    returnKeyType='next'
                    autoCorrect={false}//không hiện ra gợi ý khi nhập
                    onSubmitEditing={() => this.refs.USERNAME.focus()}
                />
                <TextInput style={styles.username}
                    onChangeText={(USERNAME) => this.setState({ USERNAME })}
                    value={this.state.USERNAME}
                    placeholder='Tài khoản'
                    placeholderTextColor='rgba(255,255,255,0.8)'
                    returnKeyType='next'
                    autoCorrect={false}//không hiện ra gợi ý khi nhập
                    onSubmitEditing={() => this.refs.PASSWORD.focus()}
                />
                <TextInput style={styles.matkhau}
                    onChangeText={(PASSWORD) => this.setState({ PASSWORD })}
                    value={this.state.PASSWORD}
                    placeholder='Mật khẩu'
                    placeholderTextColor='rgba(255,255,255,0.8)'
                    returnKeyType='next'
                    secureTextEntry={true}
                    autoCorrect={false}//không hiện ra gợi ý khi nhập
                />
                <View style={{ flexDirection: 'column' }}>
                    <View style={styles.btnxacnhan}>
                        <TouchableOpacity onPress={() => this.insertaccount()}
                        >
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', }}>Đăng Ký</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1e2c',
    },
    hoten: {
        borderColor: 'gray',
        margin: 20,
        marginTop: 5,
        borderWidth: 1,
        marginBottom: 5,
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    username: {
        borderColor: 'gray',
        margin: 20,
        marginTop: 5,
        borderWidth: 1,
        height: 40,
        marginBottom: 5,
        backgroundColor: 'rgba(255,255,255,0.2)',

    },
    matkhau: {
        margin: 20,
        borderColor: 'gray',
        marginTop: 5,
        borderWidth: 1,
        height: 40,
        marginBottom: 5,
        backgroundColor: 'rgba(255,255,255,0.2)',

    },
    result: {
        margin: 20,
        borderColor: 'gray',
        marginTop: 5,
        borderWidth: 1,
        height: 40,
        marginBottom: 5,
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    btnxacnhan: {
        borderColor: 'gray',
        marginTop: 5,
        borderWidth: 1,
        alignItems: 'center',
        margin: 20,
        height: 40,
        marginBottom: 5,
        backgroundColor: '#1be11b',
    },
});