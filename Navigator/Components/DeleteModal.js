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

export default class DeleteModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
        }
    }
    showDeleteModal = () => {
        this.refs.myModal.open();
    }
    deleteStudent() {
        fetch('http://192.168.1.166/database/deletesinhvien.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: this.state.id,
            }),
        })
            .then((responseJson) => {
                alert("Xóa thành công");
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
                    height: 280
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
                }}>Xóa thông tin</Text>

                <TextInput style={styles.id}
                    placeholder="Nhập mã cần xóa"
                    onChangeText={(id) => this.setState({ id })}
                    value={this.state.id}
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
    btnxacnhan: {
        marginLeft: 30,
        height: 50,
        marginRight: 30,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#1be11b',
    },
});