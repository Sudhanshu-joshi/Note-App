import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  TextInput, Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default class  detail extends Component {

    render(){
    return (

      <View style={{flex:1, backgroundColor:"white"}}>
 <View style={{flex:3, backgroundColor:"lightgrey",margin:20}}> 
 <Text style={{margin:10, fontSize:20, fontStyle:'italic'}}>{this.props.route.params.username}</Text>
   </View>
  <View style={{flex:1}}></View>
         </View>
    );
    }
  }
  