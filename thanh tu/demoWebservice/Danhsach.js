import React,{Component} from 'react';
import {Platform, StyleSheet, Text, View,ListView,StatusBar} from 'react-native';

var URL='http://192.168.174.2/demo/DanhSach.php';
export default class Danhsach extends Component{

    constructor(props){
        super(props);
        this.state={
            dataSource : new ListView.DataSource({rowHasChanged:(r1,r2) => r1!==r2 })
        }
    }

    fetchData(){
        fetch(URL,{method:"POST",body:null})
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(responseData)
            });
        })
        .done()
    }

    componentDidMount(){
        this.fetchData();
    }


    taoHang(property){
        return (
        <View style={styles.hang}>
            <View style={styles.hienthi}>
                <Text>Môn học: {property.MonHoc}</Text>
            </View>
            <View style={styles.hienthi}>
                <Text>Học phí: {property.HocPhi}</Text>
            </View>
        </View>
        );
    }

    render() {
        return(
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontsize:24,color:'red'}}>Danh Sách Môn Học</Text>
                </View>
                <View style={styles.danhsach}>
                    <ListView dataSource={this.state.dataSource}
                        renderRow={this.taoHang}/>

                </View>
            
            </View>
        );
    }

}

var styles=StyleSheet.create({
    container:{
        flex:1,
    },
    danhsach:{
        flex:1,
    },
    hang:{
        flexDirection:'column',
        flex:1,
        borderBottomWidth:1,
    },
    hienthi:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        padding:20
    },
});