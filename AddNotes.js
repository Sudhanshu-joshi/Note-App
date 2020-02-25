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
} from 'react-native';


export class Item extends Component {
  islike=0;
  state={
    color:"white",
    image:require('./t.jpg')
  }

render(){
  return (
  
    <TouchableOpacity onPress={()=>{this.props.shift();}}
      style={{ backgroundColor:"white", marginBottom: 10, height: 50, flexDirection: "row", justifyContent:"center" }}>
      <Text  style={{  color: "black", fontWeight: "bold", 
      fontSize: 20, paddingLeft:30, textAlignVertical: "center", height: 50, width: 270}}>
        {this.props.title}</Text>
      <TouchableOpacity
         onPress={()=>{
           if(this.islike==0){
            this.islike=1;
            this.setState({ image: this.state.image=require('./t.jpg')})
           }
           else{
            this.islike=0;
            this.setState({  image: this.state.image=require('./index.png')})
           }
        }
      }
      >
        <Image
          source={this.state.image}
          style={{ width: 70, height: 40, justifyContent: "center" ,alignSelf:"center", margin:1}}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        this.props.delete();

      }} >
        <Image
          source={require('./delete.webp')}
          style={{ width: 40, height: 40, justifyContent: "center", marginRight:20}}
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
      color:'grey',
      text:""
    }

  }

  like=()=>{
    this.setState({color:this.state.color="red"})
  }

  notes = '';
  delete=(index)=>{
    var rem= this.state.array.splice(index,1);
    this.setState({array: this.state.array})
    
    }
    
  render() {


    return (

      <KeyboardAvoidingView style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 10, backgroundColor: "orange" }}>
          <FlatList
            data={this.state.array}
            renderItem={({ item, index }) => <Item
              title={item.title} 
                 delete={()=>{this.delete(index)}}
                 shift={()=>this.props.navigation.navigate("Detailed Notes",{username:item.title})}>

              </Item>}
            keyExtractor={(item,index) => index}
          ></FlatList>
        </SafeAreaView>
        <View style={{elevation:10, flex: 1, justifyContent: "flex-end", flexDirection: "row", marginBottom:30 }}>
          
          <TextInput style={{ backgroundColor: "white", width:"90%", height: 60, borderColor: 'grey', borderWidth:3,padding:10 }}
                placeholder="Enter to Add notes"
                onChangeText={(text) => {
                  this.notes = text;
                  this.setState({ text: text })
                }}
                value={this.state.text}
              />
          <TouchableOpacity style={{ justifyContent: "center", backgroundColor: "grey", width: 40, height:60 }}
            onPress={() => {
              this.like += 1;
              if (this.notes == "") { alert("Add Notes First"); }
              else {
                const updatedArray = this.state.array
                updatedArray.push({ id: this.like, title: this.notes  })
                this.setState({ array: updatedArray });
                
              
              }
            }}>

            <Text style={{ textAlign: "center" }}>ADD</Text></TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}  