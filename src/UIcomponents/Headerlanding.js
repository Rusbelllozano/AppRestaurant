import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View,TextInput} from 'react-native';
import { Button } from 'native-base';
 class HeaderLanding extends Component {
    constructor(props){
        super(props);
        this.state ={
          text:''
        }
      }
  render() {
    return (
        <View style={styles.header}>
        <View style={{marginHorizontal:10}}>  
        <Text style={styles.title}>Restaurantes</Text>
        <View style={styles.search}>
          <TextInput
            placeholder="Busca un restaurante"
            style={styles.inputsearch}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          /> 
          <Button style={styles.buttonsearch} onPress={() => {Alert.alert(this.state.text);}} >
              <Text>Buscar</Text>
          </Button>
        </View>
      </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    search:{
      flex:1,
      flexDirection:'row',
      borderColor: 'gray', 
        borderWidth: .5, 
        borderRadius:5,
        height: 45,
        marginBottom:5,

    },
    header:{
        width: 100+'%',
        backgroundColor:'#b5afaf14',
        justifyContent:'center',
        borderBottomColor:'#a3a1a199',
        borderBottomWidth:.5
    },
    title:{
        fontSize: 25,
        fontWeight:'bold',
        color:'rgb(0,0,0)'
    },
    buttonsearch:{
      width:20+'%',
      height:100+'%',
      justifyContent:'center',
    },
    inputsearch:{
      padding:10,
        width:80+'%', 
    }
})
export default HeaderLanding;



// <View style={styles.header}>
//         <Text style={styles.title}>Restaurantes</Text>
//         <TextInput
//         style={{marginBottom:5,height: 45,width:90+'%', borderColor: 'gray', borderWidth: .5, borderRadius:5}}
//         onChangeText={(text) => this.setState({text})}
//         value={this.state.text}
//       />
//         </View>