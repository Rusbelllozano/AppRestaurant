import React, {Component} from 'react';
import { Text, View,TouchableOpacity} from 'react-native';
export default class selectadd extends Component {
  
  render() {
    return (
    <View>
        <TouchableOpacity onPress={(()=>this.props.navigation.navigate('mainpage'))}>
        <Text>Holaaaaaaa</Text>
        </TouchableOpacity>
    </View>
    );
  }
}