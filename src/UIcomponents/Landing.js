import React, {Component} from 'react';
import {StyleSheet, Text, View,FlatList,Image,TextInput} from 'react-native';

class Landing extends Component {
  constructor(props){
    super(props);
    this.state ={
      isLoading: true,
      dataSource: null,
      text:'Buscar productos y restaurantes'
    }
  }
  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading:false,
          dataSource: responseJson.movies,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  _renderPost(){
    return <View style={{
      height:100,
      flexDirection:'row',
      backgroundColor:'#ffffff', 
      borderBottomColor:'#a3a1a199',
      borderBottomWidth:.5}}>
      <Image style={{
      width:100,
      height:80, 
      margin:5, 
      borderRadius:10,
      shadowOffset: {width: 1,height: 3},
      shadowOpacity: 0.27,shadowRadius: 4.65,}} 
      source={{uri: 'https://images.vexels.com/media/users/3/124949/raw/47ac0f77cc09c591436b80b65dc55de6-burger-fast-food-logo-template.jpg'}}/>
      <View  style={{flexDirection:'column'}}>
      <Text style={{fontSize:20, fontWeight:'bold', color:'rgb(0,0,0)'}}>Del establo</Text>
      <Text style={{fontSize:15}}>Hamburguesas</Text>
      <Text style={{fontSize:15,marginTop:16}}>Precio envio: $5000</Text>
      </View>
      </View>
}
_returnKey(item){
   return item.toString();
} 
  render() {
    if(this.state.isLoading){
      return <View style={{flex:1, justifyContent:'center'}}><Text>CARGANDO</Text></View>
    }else{
      return (
      <View style={styles.container}>
      <Text>Consumido de api de facebook</Text>
      <View style={{ paddingTop:20, height:50}}>
        <FlatList
        horizontal
          data={this.state.dataSource}
          renderItem={({item}) => <View style={{justifyContent:'space-between', marginLeft:10 }}><Text>{item.title}, {item.releaseYear}</Text></View>}
          keyExtractor={({id}, index) => id}
        />
      </View>
        <View style={styles.header}>
        <Text style={styles.title}>Restaurantes</Text>
        <TextInput
        style={{marginBottom:5,height: 45,width:90+'%', borderColor: 'gray', borderWidth: .5, borderRadius:5}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
        </View>
        <View>
        <FlatList
        data={[
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17
        ]}
        // horizontal={true}
        keyExtractor={this._returnKey}
        renderItem={this._renderPost}
        />
        </View>
      </View>
    );
  }
  }
}

const styles = StyleSheet.create({
  header:{
    width: 100+'%',
    backgroundColor:'#b5afaf14',
    justifyContent:'center'
  },
  title:{
    fontSize: 25,
    fontWeight:'bold',
    color:'rgb(0,0,0)'
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
export default Landing;