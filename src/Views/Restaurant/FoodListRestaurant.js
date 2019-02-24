import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';
import {withNavigation} from 'react-navigation';
class FoodList extends Component {
  
gotoselectadd(){
    this.props.navigation.navigate('selectadd')
}
render() {
    let uriMainImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThU0ZGeEOg3AHcqMiPQBppTG0hgCKr2aIJo9ifU7YZiUFfQ0zL'
    
    return (
        <TouchableOpacity style={styles.contentFood} onPress={(()=> this.gotoselectadd())}>  
        <View>
        <Image style={styles.mainImgRestaurant}  
            source={{uri: uriMainImg }}/>
        </View>
        <View  style={{flexDirection:'column'}}>
        <Text>Hamburguesa con todo</Text>
        <Text style={{fontSize:15}}>$10000</Text>
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
    },
    mainImgRestaurant:{
        width:90,
        height:70, 
        margin:5, 
        borderRadius:10,
        shadowOffset: {width: 1,height: 3},
        shadowOpacity: 0.27,shadowRadius: 4.65
    },
})
export default withNavigation(FoodList)