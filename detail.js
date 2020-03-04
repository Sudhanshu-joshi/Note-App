import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  TextInput, TouchableOpacity
} from 'react-native';
import firebase from 'react-native-firebase'
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage'

export default class  detail extends Component {
  constructor(props){
    super(props);
    this.ref = firebase.firestore().collection(firebase.auth().currentUser.uid)
    this.unsubscribe = null;
    this.state={
      key: "", array: [],name: '', loading: true, getValue: '',text:''

    }
  }
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
    AsyncStorage.getItem('Name').then((value) => this.setState({ name: value }))

    // alert(firebase.auth().currentUser.uid);
  }

  componentWillUnmount() {
    this.unsubscribe();

  }
  setValueLocally = () => {
    AsyncStorage.setItem('Notes', this.state.name);
     alert("Value Stored Successfully.")
    //console.log(Notes);
  }
  getValueLocally = () => {
    //  AsyncStorage.getItem('Name').then((value) => this.setState({ name: value }))
   AsyncStorage.getItem('Notes').then((value) => this.setState({ Note: text,islike:islike }))
  }
  getKey = ""

  onCollectionUpdate = (querySnapshot) => {
    // console.log(",hjjbb")
    const array = [];
    querySnapshot.forEach((doc) => {
      const { Note } = doc.data();
      array.push({
        key: doc.id, // Document ID
        doc,
        Note, // DocumentSnapshot

      });
      this.getKey = doc.id
      console.log(doc.data());
    });

    this.setState({
      array,
      loading: false,
      key: this.getKey

    });

  
  }
  
  addRandom = () => {
    // alert("vvvvvvvvvv")
    this.ref.add({
      name:this.state.name,
    

      Note: this.props.route.params.text,
      
    

    });
    // alert("bbcmdvm")
  }
  deleteUser = () => {
    // alert(firebase.auth().currentUser.uid)

    const dbRef = firebase.firestore().collection(firebase.auth().currentUser.uid).doc(this.getKey)
    dbRef.delete().then((res) => {
      alert('Item removed from database')
      // this.props.navigation.navigate('UserScreen');
    })
    // .then(() => this.props.navigation.navigate("AddNotes"))
  }
  
  

  signOutUser = async () => {
    try {
        await firebase.auth().signOut();
    } catch (e) {
        alert(e);
    }
  }
  updateUser() {
    this.setState({
      isLoading: true,
    });
const updateDBRef = firebase.firestore().collection(firebase.auth().currentUser.uid).doc(this.getKey);
updateDBRef.set({
      Note: this.state.Note,
      islike: this.state.islike,
      
    }).then((docRef) => {
      this.setState({
        key: this.getKey,
        Note: this.props.route.params.text,
        islike:this.props.route.params.islike,
        
      
        isLoading: false,
      });
     alert("Updated Data"); 
    })
    .catch((error) => {
      console.error("Error: ", error);
      this.setState({
        isLoading: false,
      });
    });
  }
    render(){
    return (

      <View style={{flex:1, backgroundColor:"white"}}>
 <View style={{flex:0.9, backgroundColor:"lightgrey",margin:20}}> 
 <Text style={{margin:20, fontSize:30, fontStyle:'italic'}}>{this.props.route.params.text}</Text>
 
   
  <View style={{flex:1,flexDirection:'row'}}>
  <TouchableOpacity onPress={() => {this.setValueLocally(),this.getValueLocally(),
          this.addRandom()

        }} >
          <Image
            source={require('./add.jpeg')}
            style={{ width: 50, height: 50, justifyContent: "center", marginRight: 22, marginTop:320,borderRadius:25,
            marginLeft:20 }}
          /></TouchableOpacity>
           <TouchableOpacity onPress={() =>{
          this.deleteUser()}}>

         
          <Image
            source={require('./dd.png')}
            style={{ width: 50, height: 50, justifyContent: "center", marginRight: 22, marginTop:320,borderRadius:25}}
          /></TouchableOpacity>
          <TouchableOpacity onPress={() =>{this.updateUser()}}

>
 <Image
   source={require('./up.png')}
   style={{ width: 50, height: 50, justifyContent: "center", marginRight: 22, marginTop:320,borderRadius:25}}
 /></TouchableOpacity>
           <TouchableOpacity 
        onPress={() =>[this.signOutUser(),this.props.navigation.navigate("LoginForm")
]
        } >
          <Image
            source={require('./logs.jpeg')}
            style={{ width: 50, height: 50, justifyContent: "center", marginRight: 22, marginTop: 320,borderRadius:25}}
          /></TouchableOpacity>
  
  
         </View></View>
         </View>
    );
    }
  }
  