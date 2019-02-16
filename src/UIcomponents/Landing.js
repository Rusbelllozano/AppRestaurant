import React, {Component} from 'react';
import {StyleSheet, Text, View,FlatList} from 'react-native';
import CardRestaurant from './Cardrestaurant.js';
import HeaderLanding from './Headerlanding.js';
import CardPromotions from './Cardpromotions.js'

class Landing extends Component {
  _renderCardsRestaurant(){
     return <CardRestaurant/>
  }
_returnKey(item){
   return item.toString();
} 

constructor(props){
  super(props);
  this.state ={
    isLoading: false,
  }
}
  render() {
    if(this.state.isLoading){
      return <View style={{flex:1, justifyContent:'center'}}><Text>CARGANDO</Text></View>
    }else{
      return (
      <View style={styles.container}>
      <View style={{ paddingTop:20, height:50}}>
        <Text>
        Consumido de api de facebook
        </Text>
      </View>
        <HeaderLanding/>
        <Text>Promociones</Text>
        <View style={{ paddingTop:15, height:130}}>
        <CardPromotions/>
        </View>
        <View>
        <FlatList
        data={[1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,17,18,19,20]}
        keyExtractor={this._returnKey}
        renderItem={this._renderCardsRestaurant}
        />
        </View>
      </View>
    );
  }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
export default Landing;