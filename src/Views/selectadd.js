import React, {Component} from 'react';
import { Text, View,TouchableOpacity,FlatList} from 'react-native';
export default class selectadd extends Component {
  _renderMenus(){
    return (
      <TouchableOpacity style={{width:100, height:30}} onPress={(()=>this.gotorestaurant())}>  
          <Text style={{fontSize:15,marginLeft:10}}>Papas</Text>
      </TouchableOpacity>
    )
 }
 _returnKey(item){
    return item.toString();
 } 
  render() {
    return (
    <View>
        <TouchableOpacity onPress={(()=>this.props.navigation.navigate('mainpage'))}>
        <Text>Holaaaaaaa</Text>
        </TouchableOpacity>
        <View>
        <FlatList
        data={[1,2,3,4,5,6,7,8,9,10]}
        keyExtractor={this._returnKey}
        renderItem={this._renderMenus}
        />
        </View>
    </View>
    );
  }
}