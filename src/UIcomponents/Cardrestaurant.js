import React, {Component} from 'react';
import {StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
class CardRestaurant extends Component {
  constructor(props){
    super(props);
  }
  gotorestaurant(){
    this.props.navigation.navigate('menusrestaurante')
  }
  render() {
    let uriMainImg='https://images.vexels.com/media/users/3/124949/raw/47ac0f77cc09c591436b80b65dc55de6-burger-fast-food-logo-template.jpg'
    let RestaurantInfo={
        nombre:"Del Establo",
        categoria:"Hamburguesas",
        RangoPrecios:"$5000 - $30000"
    }
    return (
        <TouchableOpacity style={styles.containInfo} onPress={(()=> this.gotorestaurant())}>  
            <Image style={styles.mainImgRestaurant}  
            source={{uri: uriMainImg }}/>
            <View  style={{flexDirection:'column'}}>
            <Text style={styles.nameRestaurant}>{RestaurantInfo.nombre}</Text>
            <Text style={{fontSize:15}}>{RestaurantInfo.categoria}</Text>
            <Text style={{fontSize:15,marginTop:16}}>{RestaurantInfo.RangoPrecios}</Text>
            </View>
            </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    containInfo:{
        height:90,
        flexDirection:'row',
        backgroundColor:'#ffffff', 
        borderBottomColor:'#a3a1a199',
        borderBottomWidth:.5
    },
    mainImgRestaurant:{
        width:90,
        height:70, 
        margin:5, 
        borderRadius:10,
        shadowOffset: {width: 1,height: 3},
        shadowOpacity: 0.27,shadowRadius: 4.65
    },
    nameRestaurant:{
        fontSize:20, 
        fontWeight:'bold', 
        color:'rgb(0,0,0)'
    }
  });
export default withNavigation(CardRestaurant);


// return <View style={{
    //   height:100,
    //   flexDirection:'row',
    //   backgroundColor:'#ffffff', 
    //   borderBottomColor:'#a3a1a199',
    //   borderBottomWidth:.5}}>
    //   <Image style={{
    //   width:100,
    //   height:80, 
    //   margin:5, 
    //   borderRadius:10,
    //   shadowOffset: {width: 1,height: 3},
    //   shadowOpacity: 0.27,shadowRadius: 4.65,}} 
    //   source={{uri: 'https://images.vexels.com/media/users/3/124949/raw/47ac0f77cc09c591436b80b65dc55de6-burger-fast-food-logo-template.jpg'}}/>
    //   <View  style={{flexDirection:'column'}}>
    //   <Text style={{fontSize:20, fontWeight:'bold', color:'rgb(0,0,0)'}}>Del establo</Text>
    //   <Text style={{fontSize:15}}>Hamburguesas</Text>
    //   <Text style={{fontSize:15,marginTop:16}}>Precio envio: $5000</Text>
    //   </View>
    //   </View>
