
import React from 'react';
import { StyleSheet, Button, View, Text, TextInput, TouchableOpacity } from 'react-native';
export default class DoiMatKhau extends React.Component {
    static navigationOptions = {
        title: 'Forgot Your Passwords', // to add letter spacing on Android
        headerStyle: {
            backgroundColor: 'tomato',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            marginLeft: 20
        },
    };

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            username: "",
            password: "",
        }
    }

    updatepasswords() {

        fetch('http://192.168.1.166/database/DoiMatKhau.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: this.state.id,
                password: this.state.password,
            }),
        })
            .then((responseJson) => {
                alert("Đổi thành công");
            })
                .catch((error) => {
                    console.error(error);
                });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.id}
                    onChangeText={(id) => this.setState({ id })}
                    value={this.state.id}
                    placeholder='Mã sinh viên'
                    placeholderTextColor='rgba(255,255,255,0.8)'
                    autoFocus={true}
                />
                <TextInput style={styles.xacmatkhauhan}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                    placeholder='Mật khẩu mới'
                    secureTextEntry={true}
                    placeholderTextColor='rgba(255,255,255,0.8)'
                />
                <View style={styles.btnxacnhan}>
                    <TouchableOpacity onPress={() => this.updatepasswords()}
                    >
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', }}>Xác nhận</Text>
                    </TouchableOpacity>
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
    id: {
        borderColor: 'gray',
        margin: 20,
        marginTop: 5,
        borderWidth: 1,
        marginBottom: 5,
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    xacmatkhauhan: {
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
        alignItems: 'center',
        borderWidth: 1,
        marginTop: 5,
        margin: 20,
        height: 40,
        marginBottom: 5,
        backgroundColor: '#1be11b',
    },
});