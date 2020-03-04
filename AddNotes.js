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
  Modal, Button
} from 'react-native';
import firebase from 'react-native-firebase'

export class Item extends Component {
  constructor(props) {
    super(props);
  
  }
  

  state = {
    color: "white",
    image: require('./t.jpg'),
    key: "", array: [],
islike:0
  }
  

  render() {
    return (

      <TouchableOpacity onPress={() => { this.props.shift(); }}
        style={{ backgroundColor: "white", marginBottom: 10, height: 70, width:"100%",borderRadius:30,
        flexDirection: "row", justifyContent: "center",margin:2,borderBottomWidth:8,borderBottomColor:"silver" }}>
        <Text style={{
          color: "black", fontStyle:"italic",
          fontSize: 20, paddingLeft: 50, textAlignVertical: "center", height: 50, width: 270
        }}>
          {this.props.title}</Text>
        <TouchableOpacity
          onPress={() => {
            if (this.state.islike == 0) {
              
              this.setState({ image: this.state.image = require('./t.jpg'),islike:1 })
            }
            else {
              
              this.setState({ image: this.state.image = require('./index.png'),islike:0 })
            }
          }
          }
        >
          <Image
            source={this.state.image}
            style={{ width: 70, height: 40, justifyContent: "center", alignSelf: "center", marginTop: 5 }}
          />
        </TouchableOpacity>
       
           <TouchableOpacity onPress={() => {
          this.props.delete();

        }} >
          <Image
            source={require('./delete.webp')}
            style={{ width: 40, height: 40, justifyContent: "center", marginRight: 50, marginTop: 3 }}
          /></TouchableOpacity>
      </TouchableOpacity>




    );
  }
}

export default class homepage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      array: [],
      color: 'grey',
      text: "",
      isVisible: false,
      
    }

  }



  notes = '';
  delete = (index) => {
    var rem = this.state.array.splice(index, 1);
    this.setState({ array: this.state.array })

  }
   
  render() {
return (

      <KeyboardAvoidingView style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 10, backgroundColor: "orange" }}>
          <FlatList
            data={this.state.array}
            renderItem={({ item, index }) => <Item
              title={item.title}
              delete={() => { this.delete(index) }}
              shift={() => this.props.navigation.navigate("Detailed Notes", { text:item.title,islike:this.state.islike })}>

            </Item>}
            keyExtractor={(item, index) => index}
          ></FlatList>
          </SafeAreaView>
        
        <View style={{ elevation: 10, flex: 1, justifyContent: "flex-end", flexDirection: "row", marginBottom: 30 }}>

          <TouchableOpacity onPress={() => {

            this.setState({ isVisible: true });

          }}>
            <Image
              source={require('./s.png')}

              style={{ width: 50, height: 50, justifyContent: "center", margin: 30, marginRight: 150 }} />
          </TouchableOpacity>


          <Modal
            animationType="slide" visible={this.state.isVisible}
            transparent={true}>

            <View>

              <TextInput style={{
                backgroundColor: "white", width: "90%", height: 50, width: "70%", padding: 10,
                fontSize: 20,
                borderWidth: 2, marginTop: 200, marginLeft: 10
                , borderRadius: 20, borderColor: "grey"

              }}
                placeholder="Enter to Add notes"
                onChangeText={(text) => {
                  this.notes = text;
                  this.setState({ text: text })
                }}
                value={this.state.text}
              /></View>
            <View style={{ flexDirection: 'row' }}>

              <TouchableOpacity style={{
                justifyContent: "center", backgroundColor: "grey", width: "30%", height: 45, width: "20%", borderRadius: 15,
                marginLeft: 260, marginTop: -45


              }}
                onPress={() => {
                
                  if (this.notes == "") { alert("Add Notes First"); }
                  else {
                    const updatedArray = this.state.array
                    updatedArray.push({ islike: this.islike, title: this.notes })
                    this.setState({ array: updatedArray, isVisible: false, text: "" });
                    this.notes = "";



                  }
                }}>

                <Text style={{ textAlign: "center" }}>ADD</Text></TouchableOpacity>


              



            </View>

          </Modal>
         
        </View>

    

      </KeyboardAvoidingView>
    );
  }
}  