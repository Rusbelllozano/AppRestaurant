import React, {Component} from 'react';
import {StyleSheet,FlatList,TouchableOpacity,Image} from 'react-native';
class CardPromotions extends Component {
  constructor(props){
    super(props);
    this.state ={
      isLoading: true,
      dataSource: null,
    }
  }
  passpage(){
    this.props.navigation.navigate('restaurantes')
    alert("Prueba")
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
  render() {
    return (
      <FlatList
      horizontal
        data={this.state.dataSource}
        renderItem={({item}) => 
        <TouchableOpacity  onPress={(()=>this.passpage())} style={{justifyContent:'space-between', marginLeft:10 }}>
         <Image style={styles.imgpromotion}  
          source={{uri:'http://afindemes.republica.com/files/2013/04/promocion-el-corte-ingles.jpg' }}/>
        </TouchableOpacity>
        }
        keyExtractor={({id}, index) => id}
      />
    );
  }
}
const styles = StyleSheet.create({
  imgpromotion:{width:150,
    height:100,
    resizeMode: 'contain', 
    borderRadius:10,
    shadowOffset: {width: 1,height: 3},
    shadowOpacity: 0.27,shadowRadius: 4.65}
})
export default CardPromotions;


{/* <FlatList
        horizontal
          data={this.state.dataSource}
          renderItem={({item}) => 
          <View style={{justifyContent:'space-between', marginLeft:10 }}>
           <Image style={{width:150,
            height:100,
            resizeMode: 'contain', 
            borderRadius:10,
            shadowOffset: {width: 1,height: 3},
            shadowOpacity: 0.27,shadowRadius: 4.65}}  
            source={{uri:'http://afindemes.republica.com/files/2013/04/promocion-el-corte-ingles.jpg' }}/>
          </View>
          }
          keyExtractor={({id}, index) => id}
        /> */}