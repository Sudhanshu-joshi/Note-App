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
  Modal, Button,Alert
} from 'react-native';
import { BackHandler } from 'react-native';
import firebase from 'react-native-firebase'
import AsyncStorage from '@react-native-community/async-storage'
 function update(key,islike) {
 
firebase.firestore().collection(firebase.auth().currentUser.uid).doc(key).update({
    islike: islike,
  })

}
export class Item extends Component {
  constructor(props) {
    super(props);
    if(this.props.islike==1)
    {
      this.setState({image:require('./strr.jpeg')})
    }
  
  }

  
  
  

  state = {
    
    image: require('./strr.jpeg'),
    key: "", array: [],
    islike:this.props.islike

  }

  componentDidMount(){

 
    if(this.props.islike==1)
    {
      this.setState({image:require('./strr.jpeg')})
    }
  
  }
  image()
  {
  
    if(this.props.imageUrl!=null)
   { 
     return  <Image source={{uri:this.props.imageUrl}} style={{height:60,width:60,borderRadius:30}}/>
     
  }
}

 
  render() {
    return (
     
<View>

      <TouchableOpacity onPress={() => { this.props.shift(); }}
        style={{ backgroundColor: "white", marginBottom: 10, height: 90, width:"95%",borderRadius:20,
        flexDirection: "row", justifyContent: "center",margin:5,borderColor:"rgb(60,145,220)",
        borderWidth:4.5,flexDirection:'row'
         }}>

<View style={{flex:1,margin:6,borderColor:"grey"}}>
          
          {
              this.image()
            }
            
            
            
          </View>
          <View style={{flexDirection:"column",marginRight:140,marginTop:2}}>
        <Text style={{
          color: "rgb(66,170,245)", fontStyle:"italic",
          fontSize:22,paddingLeft:35,paddingTop:10
        }}>

          {this.props.title}</Text>
          <Text style={{textAlign:"center",color:"rgb(66,170,245)",fontSize:16,paddingLeft:30,paddingTop:10}}>
            {this.props.time} {this.props.fulldate} </Text>
          </View>
          
          
        <TouchableOpacity
          onPress={() => {
            if (this.state.islike == 0) {
              
              this.setState({ image: this.state.image = require('./strr.jpeg'),islike:1});
              
            }
            else {
              
              this.setState({ image: this.state.image = require('./stre.jpeg'),islike:0 });
            
            }
          }
          }
        >
          <Image
            source={this.state.image}
            style={{ width: 30, height: 30, justifyContent:'flex-end',borderRadius:15,marginVertical:25,marginRight:15
            
            }}
          />
        </TouchableOpacity>
        
           {/* <TouchableOpacity onPress={() => {
          this.props.delete();

        }} >
          <Image
            source={require('./delete.webp')}
            style={{ width: 40, height: 40, justifyContent: "center", marginRight: 50, marginTop: 3 }}
          /></TouchableOpacity> */}
     
     </TouchableOpacity>
      </View>
    




    );
  }
}

export default class homepage extends Component {
  Date()
  {
    var d = new Date();
    var n = d.getTime();
  return n;
  }
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection(firebase.auth().currentUser.uid)
    this.getref=firebase.firestore().collection(firebase.auth().currentUser.uid).orderBy("date","desc")
    this.unsubscribe = null;
    // this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      array: [],
      color: 'grey',
      text: "",
      isVisible: false,
      loading:true,
      date:"",
      name:"",
      image: require('./strr.jpeg'),
      islike:0
  
    }
    
  }
 
  
  
  componentDidMount() {
    this.unsubscribe = this.getref.onSnapshot(this.onCollectionUpdate)
    AsyncStorage.getItem('Notes').then((value) => this.setState({ name: value }))

    
}

// componentWillMount() {
//   BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
// }



    componentWillUnmount() {
      this.unsubscribe();
      // BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
      
  //   handleBackButtonClick() {
  //     this.props.navigation.goBack("detail");
  //     // BackHandler.exit AddNotes();
  //     return true;
  // }
      
    
    
    setValueLocally = () => {
      AsyncStorage.setItem('Note', this.state.Note);
       alert("Value Stored Successfully.")
      //console.log(Notes);
    }
    getValueLocally = () => {
      
     AsyncStorage.getItem('Note').then((value) => this.setState({ Note: text }))
     
    }
    getKey = ""

  onCollectionUpdate = (querySnapshot) => {
    // console.log(",hjjbb")
    const array= [];
    querySnapshot.forEach((doc) => {
      const { Note ,date,Notes,islike,imageUrl} = doc.data();
      var fulldate=new Date(date).toDateString();
        var time=new Date(date).toTimeString();
      array.push({
        key: doc.id, // Document ID
        doc,
        Note, // DocumentSnapshot
        date,
        time,Notes,islike,
        imageUrl
      });
      this.getKey = doc.id
      console.log(doc.data());
    });

    this.setState({
      array:array,
      loading: false,
      key: this.getKey

    });

  
  }
  
  addRandom = () => {
    // alert("vvvvvvvvvv")
    this.ref.add({
      Name:this.state.name,
  Note: this.state.text,
  date: new Date().getTime(),
  islike:this.state.islike,
  imageUrl:null
  
      
    

    });
    // alert("bbcmdvm")
  }
  

  notes = '';
  delete = (index) => {u
         var rem = this.state.array.splice(index, 1);
    this.setState({ array: this.state.array })

  }
  formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  signOutUser = async () => {
    try {
        await firebase.auth().signOut();
    } catch (e) {
        alert(e);
    }
  }

openTwoButtonAlert=()=>{
  Alert.alert(
    'LogOut',
    'Are you sure?',
    [
      {text: 'Yes', onPress: () => this.signOutUser()},
      {text: 'No', onPress: () => console.log('You are on same page'), style: 'cancel'},
    ],
    { 
      cancelable: true 
    }
  );
}
 
  render() {
     this.onCollectionUpdate
return (

      <KeyboardAvoidingView style={{ flex: 1 }}>
          <View style={{flex:2.2,backgroundColor:"rgb(66,170,245)",justifyContent:"center",
          alignItems:"center",flexDirection:"row"}}>
           <Text style={{fontSize:40,color:"white",
         fontWeight:"bold",padding:20}}>
         All Notes</Text>
         
         
            <TouchableOpacity style={{ marginLeft: 115, marginTop:-50,justifyContent: "center"}} onPress={() => {
          this.openTwoButtonAlert();

        }} >
          <Image
            source={require('./dot.png')}
            style={{ width: 45, height: 45,borderRadius:15,backgroundColor:"rgb(66,170,245)"}}
          /></TouchableOpacity> 
    
         </View>
        <SafeAreaView style={{ flex: 10, backgroundColor: "rgb(66,170,245)"}}>
          <FlatList
          // numColumns={2}
          // columnWrapperStyle={{flex: 1,
          //   justifyContent: "space-around"}}
          multiline={true}
          
            data={this.state.array}
            renderItem={({ item, index }) => <Item
             title={item.Note} Name={item.Notes} islike={item.islike} key={item.key} imageUrl={item.imageUrl}
             fulldate={this.formatAMPM(new Date(item.date))} 
              delete={() => { this.delete(index) }}
              shift={() => this.props.navigation.navigate("Detailed Notes", { text:item.Note,key:item.key,
                imageUrl:item.imageUrl })}>
              

            </Item>}
            keyExtractor={(item, index) => index}
          ></FlatList>
          </SafeAreaView>
        
        <View style={{ elevation: 10, flex: 1, justifyContent: "flex-end", flexDirection: "row", marginBottom: 30 }}>

          <TouchableOpacity onPress={() => {

            this.setState({ isVisible: true });

          }}>
            <Image
              source={require('./Add.png')}

              style={{ width: 50, height: 50, justifyContent: "center", margin: 15, marginRight: 22}} />
          </TouchableOpacity>
</View>

          <Modal 
            animationType="slide" visible={this.state.isVisible}
            transparent={true}>
               <View style={{flex:0.2,backgroundColor:"rgb(66,170,245)"}}>
                <TouchableOpacity onPress={() => {
                  this.setState({isVisible:false})
          

        }} >
          <Image
            source={require('./back.jpg')}
            style={{ width: 50, height:50, justifyContent: "flex-start",  margin:10 ,borderRadius:25}}
          /></TouchableOpacity></View>  
            <View style={{flex:1,backgroundColor:"rgb(66,170,245)"}}>
          
              <TextInput style={{
                backgroundColor: "white", width: "75%", height: 150, padding: 30,
                fontSize: 20,
              
                borderWidth: 10, top: 40, position:'absolute'
                , borderRadius: 16, borderColor:"rgb(66,150,220)",left:50

              }}
              
                placeholder="Enter to Add notes"
                onChangeText={(text) => {
                  this.notes = text;
                  this.setState({ text: text })
                }}
                
                value={this.state.text}
              />
            
              
            

              <TouchableOpacity style={{
                justifyContent: "center", width: "45%", height: 60,
                 backgroundColor:'white',borderColor:"rgb(66,150,220)",borderWidth:8,
                 borderRadius: 12,marginLeft:130,marginTop:190
                 


              }}
                onPress={() => {
                
                  if (this.notes == "") { alert("Add Notes First"); }
                  else {
                    const updatedArray = this.state.array
                    updatedArray.push({ islike: this.islike, title: this.note })
                    this.setState({date:this.state.date=this.Date()}) 
                    this.setState({ array: updatedArray, isVisible: false, text: "" });
                    this.notes = "";
                    this.addRandom();



                  }
                }}>

                <Text style={{ textAlign: "center",fontSize:20,color:"grey" }}>ADD</Text></TouchableOpacity>
                <View style={{flex:1}}>
                <TouchableOpacity style={{position:"absolute",top:-50,left:85}}
          onPress={() => {
            if (this.state.islike == 0) {
              
              this.setState({ image: this.state.image = require('./strr.jpeg'),islike:1});
              
            }
            else {
              
              this.setState({ image: this.state.image = require('./stre.jpeg'),islike:0 });
            
            }
          }
          }
        >
          <Image
                  source={this.state.image}
                
                
            style={{ width: 44, height: 44,borderRadius:22
            
            }}
          /> 
        </TouchableOpacity>

       
        </View>
        


              


</View>
        

          </Modal>
         
        

    

      </KeyboardAvoidingView>
    );
  }
}  