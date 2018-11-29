import React from 'react';
import { StyleSheet, View, FlatList, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import DeleteModal from './DeleteModal';
import UpdateModal from './UpdateModal';

const MenuDS = (props) => (
    <TouchableOpacity style={{ width: 30 }}
        onPress={() => { props.navigation.navigate('DanhSach') }}
        >
        <Image style={{ margin: 10 }}
            source={require('../icons/monitor.png')}
        >
        </Image>
    </TouchableOpacity >
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
    <TextInput style={{ marginLeft: 30, borderWidth: 1, flex: 1, marginRight: 20, backgroundColor: 'white', margin: 5 }}
        placeholder='Tìm kiếm'
        placeholderTextColor='#260808'
        //autoFocus={true}
        returnKeyType='next'
        autoCorrect={false}//không hiện ra gợi ý khi nhập
        onSubmitEditing={() => this.refs.edtimkiem.focus()}
    />
);
const MenuBTTK = (props) => (
    <TouchableOpacity style={{ width: 20, marginRight: 30 }}>
        <Image style={{ margin: 10 }}
            source={require('../icons/magnifying-glass.png')}
        >
        </Image>
    </TouchableOpacity>
);

export default class DanhSach extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header:
            <View style={{ backgroundColor: '#0a538b', flexDirection: 'row' }}>
                <MenuDS navigation={navigation} />
                <MenuTC navigation={navigation} />
                <MenuTK navigation={navigation} />
                <MenuBTTK navigation={navigation} />
            </View>
    });

    constructor(props) {
        super(props);
        this.state = {
            mang: [],
            refresh: false,
            trang: 1,
        }
    }
    DELETEMODAL () {
        this.refs.deleteModal.showDeleteModal();
    }
    UPDATE() {
        this.refs.updateModal.showUpDateModal();
    }
    render() {
        return (
            <View style={styles.cotainer}>
                <FlatList
                    //ref="danhsach"
                    refreshing={this.state.refresh}// load xoay dữ liệu trên sv vê true xoay, false dừng
                    onRefresh={() => { this.refresh() }}
                    onEndReached={this.myFunction}
                    onEndThreshold={0.5}
                    // onRefresh={() => { this.myFunction() }}
                    data={this.state.mang}
                    renderItem={({ item }) =>
                        <View style={styles.title}>
                            <View style={styles.trai}>
                                <Image style={{ width: 100, height: 100, borderRadius: 50 }}
                                    source={{ uri: item.HINH }} />
                            </View>
                            <View style={styles.phai}>
                                <Text>{item.HOTEN}</Text>
                                <Text>{item.LOP}</Text>
                                <Text style={{ color: 'red', margin: 10 }}>{item.key}</Text>
                            </View>
                            <View style={styles.delete}>
                                <TouchableOpacity
                                    onPress={() => this.DELETEMODAL()}>
                                    <Image style={{ alignItems: 'flex-end', height: 45, width: 50, marginBottom: 15 }}
                                        source={require('../icons/delete.jpg')}
                                    >
                                    </Image>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                onPress={() => this.UPDATE()}>
                                    <Image style={{ alignItems: 'flex-end', height: 40, width: 40 }}
                                        source={require('../icons/images.jpg')}
                                    >
                                    </Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                />
                <DeleteModal ref={'deleteModal'} parentFlatList={this} >
                </DeleteModal>
                <UpdateModal ref={'updateModal'} parentFlatList={this} >
                </UpdateModal>
            </View>
        );
    }
    refresh() {
        this.setState({
            refresh: true
        });
        fetch('http://192.168.1.166/database/demo2.php')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    mang: responseJson,
                    refresh: false
                });
            })
            .catch((error) => {
                console.error(error);
            });

    }
    myFunction = () => {
        this.setState({ trang: this.state.trang++ });
        fetch('http://192.168.1.166/database/demo2.php')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    mang: responseJson,
                    refresh: false
                });
            })
            .catch((error) => {
                console.error(error);
            });
    };
    componentDidMount() {
        fetch('http://192.168.1.166/database/demo3.php?trang=1')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    mang: responseJson
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
}
const styles = StyleSheet.create({
    cotainer: {
        flex: 1,// co giản màn hình
        justifyContent: 'flex-start',// xuất phát từ điêm đầu tiên, flex-end cố định ỏ dưới
        // space-between khoảng cách đều nhau giữa các cột, space-around cách trên dưới 1 khoảng, center nằm giữa
        flexDirection: 'column',//chia cột dọc, row chia cột ngang
        //alignItems: 'center',flex-end, stretch tự động kéo căng full màn hình
        backgroundColor: 'white',
        borderColor: '#1d1b1b',
    },
    title: {
        //alignItems: 'center',
        borderBottomWidth: 1,
        padding: 5,
        borderColor: 'gray',
        borderRightWidth: 1,
        flexDirection: 'row'
    },
    trai: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    phai: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    delete: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    }
});