import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity,FlatList} from 'react-native';
import FoodList from './FoodListRestaurant.js';
 class MenusRestaurant extends Component {
    constructor(props){
        super(props);
      }
      gotorestaurant(){
        this.props.navigation.navigate('selectadd')
      }

      _renderMeals(){
        return <FoodList/>
     }
   _returnKey(item){
      return item.toString();
   } 
  render() {
    return (
        <View style={styles.header}>
        <Text style={styles.title}>AppRestaurante</Text>

        <TouchableOpacity onPress={(()=>this.gotorestaurant())}>  
            <Text style={{fontSize:15,marginTop:16}}>Holaaaa</Text>
        </TouchableOpacity>
        <FlatList
        data={[1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,17,18,19,20]}
        keyExtractor={this._returnKey}
        renderItem={this._renderMeals}
        />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    header:{
        width: 100+'%',
        backgroundColor:'#b5afaf14',
        justifyContent:'center',
        marginHorizontal: 10
    },
    title:{
        fontSize: 25,
        fontWeight:'bold',
        color:'rgb(0,0,0)'
    }
})
export default MenusRestaurant;