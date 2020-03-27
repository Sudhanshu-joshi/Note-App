import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Modal,
  Button,
  BackHandler,Alert
  
} from 'react-native';
import firebase from 'react-native-firebase'



async function addnotes(notes, islike,date) {
  await firebase.firestore().collection(firebase.auth().currentUser.uid).add({
    note: notes,
    islike:islike,
    date:date
  });
}
async function update(id,islike) {
 if(islike==0)
   { await firebase.firestore().collection(firebase.auth().currentUser.uid).doc(id).update({
      islike: 1,
    })
  }
  else
    await firebase.firestore().collection(firebase.auth().currentUser.uid).doc(id).update({
      islike: 1,
    });

}

async function deletenotes(id) {
  await firebase.firestore().collection(firebase.auth().currentUser.uid).doc(id).delete();

}




export class Item extends Component {
  constructor(props){
    super(props)
  }


  state = {
    color:'white',
    image: require('./fblike.png'),
  }
  
islike=this.props.islike;

componentDidMount(){

 
  if(this.props.islike==1)
  {
    this.setState({color:'red',image:require('./fbliked.png')})
  }
}
  render() {
    return (
      <View style={{borderBottomColor: 'black',borderBottomColor: 'black',
      borderBottomWidth: 1,}}>
      <TouchableOpacity onPress={() => {  this.props.shift();}}
        style={{ 
         backgroundColor: this.state.color, height: 80, flexDirection: "row", justifyContent: "center", alignItems:"center" }}>
        <Text style={{
          marginLeft: 5, color: "black", fontWeight: "bold",
          fontSize: 20, marginLeft: 5, textAlignVertical: "center", height: 50, width: 270
        }}>
          {this.props.title}</Text>
        <TouchableOpacity
          onPress={() => {
            if (this.state.image == require('./fblike.png')) {

             this.setState({ color: this.state.color = "red", image: this.state.image = require('./fbliked.png') })
             update();
            }
            else {

              this.setState({ color: this.state.color = "white", image: this.state.image = require('./fblike.png') })
              update();
            }
          }
          }
        >
          <Image
            source={this.state.image}
            style={{ width: 40, height: 40, justifyContent: "center", alignSelf: "center", margin: 2 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.delete();
          deletenotes();

        }} >
          <Image
            source={require('./delete.png')}
            style={{ width: 40, height: 40, justifyContent: "center", margin: 2 }}
          /></TouchableOpacity>
         
      </TouchableOpacity>
      <Text>{this.props.time}  {this.props.date}</Text>
      </View>
    );
  }
}

export default class homepage extends Component {
  onBackPress = () => {
    Alert.alert(
        'Exit',
        'Are you sure?',
        [
            { text: 'Yes', onPress: () => BackHandler.exitApp() },
            { text: 'No', onPress: () => console.log('User not exit'), style: 'cancel' },
        ],
        {
            cancelable: true
        }
    );
    return true;
  }
  
  
  Date()
{
  var d = new Date();
  var n = d.getTime();
return n;
}
 
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      text: "",
      isVisible: false,
      image: require('./fblike.png'),
      islike:0,
      date:""
    }

  }

  color = "";


  notes = '';
  delete = (index) => {

    deletenotes(index)
  }
  
  
  useEffect = (querySnapshot) => {
      const array = [];
      querySnapshot.forEach((doc) => {
        const { note,islike,date } = doc.data();
        var fulldate=new Date(date).toDateString();
        var time=new Date(date).toTimeString();
        array.push({
          id: doc.id,
          note,
          islike,
          fulldate,
          time
        });
      })
      
      this.setState({ array,})
    }
  componentDidMount(){
    this.unsubscribe=firebase.firestore().collection(firebase.auth().currentUser.uid).onSnapshot(this.useEffect)
    
  }
  componentWillUnmount()
  {
    this.unsubscribe();
    
  }
  
render() {

  
 this.useEffect;
    return (
      <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "white" }}>
        <SafeAreaView style={{ flex: 10, backgroundColor: "white" }}>
          <FlatList
            data={this.state.array}
            renderItem={({ item, index }) => <Item
              title={item.note} date={item.fulldate} time={item.time}
              delete={() => {
                this.delete(item.id)
              }} islike={item.islike} 
              shift={() => this.props.navigation.navigate("Detailed Notes", { note: item.note, id:item.id })}>
            </Item>}
            keyExtractor={(item, index) => item.id}
          ></FlatList>
        </SafeAreaView>
        

          <TouchableOpacity style={{ position:"absolute", bottom:13, right:12, }}
            onPress={() => {
              this.setState({ isVisible: true });
            }}
          >
            <Image source={require('./add.png')} style={{ height: 60, width: 60 ,backgroundColor:"white"}} />
          </TouchableOpacity>
          <Modal
            visible={this.state.isVisible}
            animationType="slide"
            transparent={true}
            style={{ height: 100, width: 300 }}
            onRequestClose={() => { alert("Exit"); this.setState({ isVisible: false }) }}>
            <View style={{
              position: "absolute",
              bottom: 1,
              flexDirection: "row",
              backgroundColor: "red",

            }}>
              <TouchableOpacity
                onPress={() => {
                  if (this.state.islike == 0) {
                    
                    this.setState({islike:1, image: this.state.image = require('./fbliked.png') })
                    
                  }
                  else {
                    
                    this.setState({islike:0, image: this.state.image = require('./fblike.png') })
                    
                  }
                }
                }
              >
                <Image
                  source={this.state.image}
                  style={{ width: 40, height: 40, justifyContent: "center", alignSelf: "center", marginTop: 15 }}
                />
              </TouchableOpacity>
              <TextInput style={{ backgroundColor: "white", width: 280, height: 80, borderTopColor: 'black', borderTopWidth: 2 }}
                placeholder="Enter to Add notes" keyboardType="default"
                onChangeText={(text) => {
                  this.notes = text;
                  this.setState({ text: text })
                }}
                value={this.state.text}
              />
              <TouchableOpacity style={{ justifyContent: "center", backgroundColor: "red", width: 40, height: 80 }}
                onPress={() => {
                  this.like += 1;
                  if (this.notes == "") { alert("Add Notes First"); }
                  else {

                    this.setState({date:this.state.date=this.Date()}) 
                    addnotes(this.notes,this.state.islike, this.state.date);
                   
                    this.setState({ text: this.state.text = "" });
                    this.setState({ isVisible: false });
                    this.notes = "";
                    this.islike = 0;
                    this.setState({ image: this.state.image = require('./fblike.png') })
                    this.color = "white"

                  }
                }}>

                <Text style={{ textAlign: "center" }}>ADD</Text></TouchableOpacity>
            </View>
          </Modal>
          

       

      </KeyboardAvoidingView>
    );
  }
}  