import React from'react';
import{Text,View,TextInput,StyleSheet,TouchableOpacity,TouchableWithoutFeedback,Keyboard}from'react-native';
import firebase from 'react-native-firebase'
export default class Sign extends React.Component{
    constructor(props){
        super(props);
        this.ref = firebase.firestore().collection('Notes')
    }
      addRandom = () => {
        // alert("vvvvvvvvvv")
        this.ref.add({
          Note:"bvvbvbnn"
          
        });
        alert("bbcmdvm")
      }
      render(){
          return(
              <View style={{flex:1}}>
                  <TouchableOpacity onPress={() =>{
                        this.addRandom()}}>
                     
                          <Text style={{color:'black',fontSize:20,alignContent:'center'}}>Create Account</Text>
                      </TouchableOpacity>
              </View>
          )
      }
}