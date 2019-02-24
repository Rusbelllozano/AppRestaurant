import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity,FlatList,Image} from 'react-native';
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
     _renderMenus(){
      return (
        <TouchableOpacity style={{width:100, height:30}} onPress={(()=>this.gotorestaurant())}>  
            <Text style={{fontSize:15,marginLeft:10}}>Menus</Text>
        </TouchableOpacity>
      )
   }
   _returnKey(item){
      return item.toString();
   } 
  render() {
    let uriMainImg='https://images.vexels.com/media/users/3/124949/raw/47ac0f77cc09c591436b80b65dc55de6-burger-fast-food-logo-template.jpg'
    
    return (
        <View style={styles.header}>
        <Image style={styles.mainImgRestaurant}  
            source={{uri: uriMainImg }}/>
        <Text style={styles.title}>Del establo</Text>
        <FlatList
        horizontal
        data={[1,2,3,4,5,6,7,8,9,10]}
        keyExtractor={this._returnKey}
        renderItem={this._renderMenus}
        />
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
    },
    title:{
        fontSize: 25,
        fontWeight:'bold',
        color:'rgb(0,0,0)'
    },
    mainImgRestaurant:{
      width:100+"%",
      height:80, 
      resizeMode:"contain"
  },
})
export default MenusRestaurant;