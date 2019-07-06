import React, {Component} from 'react';
import {StyleSheet, Text, View,FlatList} from 'react-native';
import CardRestaurant from './Cardrestaurant.js';
import HeaderLanding from './Headerlanding.js';
import CardPromotions from './Cardpromotions.js'

import { Container, Header, Title, Content, Button, Left, Right, Body, Icon,Tab, Tabs } from 'native-base';
// import gql from 'graphql-tag';
// import { graphql } from 'react-apollo';

// const repoQuery = gql`
// query($name: String!){
//   search(query: $name, last: 10, type: REPOSITORY) {
//     edges {
//       node {
//         ... on Repository {
//           id
//           name
//           description
//           url
//         }
//       }
//     }
//   }
// }`
// const AppWithData= graphql(
//   repoQuery,
//   {
//     options:{
//       variables:{
//         name:"daafaguilar98"
//       }
//   }
// }
// )(Landing)

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
    console.log(this.props)
    if(this.state.isLoading){
      return <View style={{flex:1, justifyContent:'center'}}><Text>CARGANDO</Text></View>
    }else{
      return (
        <Tabs tabBarPosition="bottom">
          <Tab heading="Inicio">
          
          <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>AppRestaurant</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={styles.container}>
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

        </Content>
        
      </Container>
          </Tab>
          <Tab heading="Tab2">
            {/* <Tab2 /> */}
          </Tab>
          <Tab heading="Tab3">
            {/* <Tab3 /> */}
          </Tab>
        </Tabs>
        
        
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