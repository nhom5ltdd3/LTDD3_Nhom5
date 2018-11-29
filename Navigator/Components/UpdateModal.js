import React from 'react';
import {
    StyleSheet,
    Platform,
    Text,
    TextInput,
    Dimensions,
    View,
    TouchableOpacity
} from 'react-native';
import Modal from 'react-native-modalbox';

var screen = Dimensions.get('window');

export default class UpdateModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            Name: "",
            Lop: "",
        }
    }
    showUpDateModal = () => {
        this.refs.myModal.open();
    }
    deleteStudent() {
        fetch('http://192.168.1.166/database/updatesinhvien.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: this.state.id,
                Name: this.state.Name,
                Lop: this.state.Lop,
            }),
        })
            .then((responseJson) => {
                alert("Sửa thành công");
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <Modal
                ref={"myModal"}
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'ios' ? 0 : 30,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 350
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    alert("Modal closed");
                }}
            >
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 40 
                }}>Sửa thông tin</Text>

                <TextInput style={styles.id}
                    placeholder="Mã Sinh Viên"
                    onChangeText={(id) => this.setState({ id })}
                    value={this.state.id}
                />
                 <TextInput style={styles.hoten}
                    placeholder="Họ tên"
                    onChangeText={(Name) => this.setState({ Name })}
                    value={this.state.Name}
                />
                 <TextInput style={styles.lop}
                    placeholder="Lớp"
                    onChangeText={(Lop) => this.setState({ Lop })}
                    value={this.state.Lop}
                />
                <View style={styles.btnxacnhan}>
                    <TouchableOpacity onPress={() => this.deleteStudent()}
                    >
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>Xác nhận</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    }
}
const styles = StyleSheet.create({
    id: {
        height: 40,
        borderBottomColor: 'gray',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        marginBottom: 10,
        borderBottomWidth: 1
    },
    hoten: {
        height: 40,
        borderBottomColor: 'gray',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        marginBottom: 10,
        borderBottomWidth: 1
    },
    lop: {
        height: 40,
        borderBottomColor: 'gray',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        marginBottom: 10,
        borderBottomWidth: 1
    },
    btnxacnhan: {
        marginLeft: 30,
        height: 50,
        marginRight: 30,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#1be11b',
    },
});