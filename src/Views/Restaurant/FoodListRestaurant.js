import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
export default class FoodList extends Component {
  
gotoselectadd(){
    this.props.navigation.navigate('selectadd')
}
render() {
    return (
        <TouchableOpacity style={styles.contentFood} onPress={(()=> this.gotoselectadd())}>  
        <View  style={{flexDirection:'column'}}>
        <Text>Comida</Text>
        <Text style={{fontSize:15}}>Precio:5000</Text>
        </View>
        </TouchableOpacity>
    );
}
}
const styles = StyleSheet.create({
    contentFood:{
        height:90,
        flexDirection:'row',
        backgroundColor:'#ffffff', 
        borderBottomColor:'#a3a1a199',
        borderBottomWidth:.5
    }
})
