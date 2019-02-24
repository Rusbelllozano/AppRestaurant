import React, {Component} from 'react';
import {StyleSheet, Text, View,TextInput} from 'react-native';
 class HeaderLanding extends Component {
    constructor(props){
        super(props);
        this.state ={
          text:'Buscar productos y restaurantes'
        }
      }
  render() {
    return (
        <View style={styles.header}>
        <View style={{marginHorizontal:10}}>  
        <Text style={styles.title}>Restaurantes</Text>
        <TextInput
        style={styles.inputsearch}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
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
    inputsearch:{
        marginBottom:5,
        height: 45,
        width:90+'%', 
        borderColor: 'gray', 
        borderWidth: .5, 
        borderRadius:5
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