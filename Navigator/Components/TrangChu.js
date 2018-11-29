
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput } from 'react-native';

const MenuDS = (props) => (
    <TouchableOpacity style={{ width: 30 }}
        onPress={() => { props.navigation.navigate('DanhSach') }}>
        <Image style={{ margin: 10 }}
            source={require('../icons/monitor.png')}
        >
        </Image>
    </TouchableOpacity>
);
const MenuTC = (props) => (
    <TouchableOpacity style={{ width: 30, marginLeft: 20 }}
        onPress={() => { props.navigation.navigate('TrangChu') }}>
        <Image style={{ margin: 10 }}
            source={require('../icons/list.png')}
        >
        </Image>
    </TouchableOpacity>
);

const MenuTK = (props) => (
    <TextInput style={{marginLeft: 30, borderWidth: 1,  flex: 1, marginRight:20, backgroundColor:'white',margin:5}}
    placeholder='Tìm kiếm'
    placeholderTextColor='#260808'
    autoFocus={true}
    returnKeyType='next'
    autoCorrect={false}//không hiện ra gợi ý khi nhập
    onSubmitEditing={() => this.refs.edtimkiem.focus()}
/>
);
const MenuBTTK = (props) => (
    <TouchableOpacity style={{ width: 20, marginRight:30  }}>
        <Image style={{ margin: 10 }}
            source={require('../icons/magnifying-glass.png')}
        >
        </Image>
    </TouchableOpacity>
);

export default class TrangChu extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header:
            <View style={{ backgroundColor: '#0a538b', flexDirection: 'row' }}>
                <MenuDS navigation={navigation} />
                <MenuTC navigation={navigation} />
                <MenuTK navigation={navigation} />
                <MenuBTTK navigation={navigation} />
            </View>
    });

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'column', marginTop: 10 }}>
                <View style={styles.btnquanlysinhvien}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'flex-start', }}
                        onPress={() => this.props.navigation.navigate('Details')}
                        >
                            <Image style={{ margin: 10 }}
                                source={require('../icons/group.png')}
                            >
                            </Image>
                            <Text style={{ fontSize: 15, color: 'black', margin: 10, marginLeft: 50 }}>Quản lý sinh viên</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.btnqualymonhoc}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'flex-start', }}
                        onPress={() => this.props.navigation.navigate('Monhoc')}
                        >
                            <Image style={{ margin: 10 }}
                                source={require('../icons/mortarboard.png')}
                            >
                            </Image>
                            <Text style={{ fontSize: 15, color: 'black', margin: 10, marginLeft: 50 }}>Quản lý môn học</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.btnquanlydiem}
                    >
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'flex-start' }}
                                 onPress={() => this.props.navigation.navigate('QLDiem')}
                        >
                            <Image style={{ margin: 10 }}
                                source={require('../icons/diploma.png')}
                            >
                            </Image>
                            <Text style={{ fontSize: 15, color: 'black', margin: 10, marginLeft: 50 }}>Quản lý điểm</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.btnthamgiasukien}
                    >
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'flex-start' }}
                        >
                            <Image style={{ margin: 10 }}
                                source={require('../icons/lecture.png')}
                            >
                            </Image>
                            <Text style={{ fontSize: 15, color: 'black', margin: 10, marginLeft: 50 }}>Tham gia sự kiện</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.btnsupport}
                    >
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'flex-start' }}
                        >
                            <Image style={{ margin: 10 }}
                                source={require('../icons/customer-service.png')}
                            >
                            </Image>
                            <Text style={{ fontSize: 15, color: 'black', margin: 10, marginLeft: 50 }}>Hướng dẫn sử dụng</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.btndoimatkhau}
                    >
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'flex-start' }}
                            onPress={() => this.props.navigation.navigate('DoiMatKhau')}
                        >
                            <Image style={{ margin: 10 }}
                                source={require('../icons/lock.png')}
                            >
                            </Image>
                            <Text style={{ fontSize: 15, color: 'black', margin: 10, marginLeft: 50 }}>Đổi mật khẩu</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.btndangxuat}
                    >
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'flex-start' }}
                            onPress={() => this.props.navigation.navigate('Home')}
                        >
                        <Image style={{ margin: 10 }}
                            source={require('../icons/exit.png')}
                        >
                        </Image>
                        <Text style={{ fontSize: 15, color: 'black', margin: 10, marginLeft: 50 }}>Đăng xuất</Text>
                        </TouchableOpacity>
                </View>
            </View>
            </View >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 5
    },
    btnquanlysinhvien:{
        height: 60,
        marginTop: 13
    },
    btnqualymonhoc: {
        height: 60,
        marginTop: 13
    },
    btnquanlydiem: {
        height: 60,
        marginTop: 13
    },
    btnthamgiasukien: {
        height: 50,
        marginTop: 13
    },
    btnsupport: {
        height: 60,
        marginTop: 13
    },
    btndoimatkhau: {
        height: 60,
        marginTop: 13
    },
    btndangxuat: {
        height: 60,
        marginTop: 13
    }
});