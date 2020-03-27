import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  TextInput, TouchableOpacity,Button,Modal,Alert
} from 'react-native';
import firebase from 'react-native-firebase'
import uuid from 'uuid/v4';
// import ImagePicker from 'react-native-image-crop-picker';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage'
import ImagePicker from 'react-native-image-crop-picker'

function updateurl(imageUrl, key) {

  firebase.firestore().collection(firebase.auth().currentUser.uid).doc(key).update({
     imageUrl: imageUrl,
     date: new Date().getTime(),
   }).catch((error) => {
     console.log("Api call error");
     alert(error.message);
   });
 
 }
export default class  detail extends Component {
  constructor(props){
    super(props);
    this.ref = firebase.firestore().collection(firebase.auth().currentUser.uid)
    this.unsubscribe = null;
    this.state={
       array: [],name: '', loading: true, getValue: '',text:this.props.route.params.text,
     key:"",
     
     uploading: false,
     progress: 0,
     images: [],
       isVisible:false,

       imageSource: this.props.route.params.imageUrl, filename: ""
    }
    key = this.props.route.params.key;

  filename = ""
  ext = ""
  
  }
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
    AsyncStorage.getItem('Name').then((value) => this.setState({ name: value }))
    
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
        AsyncStorage.getItem('Notes').then((value) => this.setState({ name:value }))
   AsyncStorage.getItem('Notes').then((value) => this.setState({ Note: text }))
    // AsyncStorage.getItem('islike').then((value) => this.setState({ islike: islike }))
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
        Note,
        //  Notes,
      // islike // DocumentSnapshot

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
  
  
  deleteUser = () => {
    // alert(firebase.auth().currentUser.uid)
   const dbRef = firebase.firestore().collection(firebase.auth().currentUser.uid).doc(this.props.route.params.key)
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
  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
 

  updateUser() {
    this.setState({
      isLoading: true,
    });

     const updateDBRef = firebase.firestore().collection(firebase.auth().currentUser.uid).doc(this.props.route.params.key);
 updateDBRef.update({
      
      //  Name:this.state.name,
       Note: this.state.text,
       date: new Date().getTime(),
      //  islike:this.state.islike,
       imageSource:this.state.imageSource
       
          
      
    }).then((docRef) => {
      this.setState({
        key:"",
        
       Name:this.state.name,
       Note: this.state.text,
       date: new Date().getTime(),
        islike:this.state.islike,
        imageSource:this.state.imageSource,
      //  islike:this.props.route.params.islike,
        
      
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
   image() {

    if (this.state.imageSource != null)
     {
      return <Image source={{ uri: this.state.imageSource }} style={{ height: 400, width: 300,marginVertical:20 ,
        marginHorizontal:15}} />

    }
  }


  
  
  

  // ChoosePhoto = () => {
   
  //   ImagePicker.openPicker({
  //     cropping: true,
  //     width: 300,
  //     height: 300,
  //   }).then(images => {
  //     this.setState({
  //       pickedImage: images.path
  //     })
  //     alert(images.path);
  //   });
  // };
  // Camera =()=>{
  //   ImagePicker.openCamera({
  //     width: 300,
  //     height: 400,
  //     cropping: true,
  //   }).then(image => {
  //     this.setState({
  //       pickedImage:image.path
  //     })
  //   });
  // }


  uploadImage = (imageSource,id) => {
    
    const ext = imageSource.split('.').pop(); // Extract image extension
    const filename = `${uuid()}.${ext}`; // Generate unique name
    this.setState({ filename: this.state.filename = filename })

    firebase
      .storage()
      .ref(`Notes/images/${filename}`)
      .putFile(imageSource)
      .on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        snapshot => {
          let state = {};
          state = {
            ...state,
            progress: (snapshot.bytesTransferred / snapshot.totalBytes) * 100, // Calculate progress percentage

          };
this.setState({loading:this.state.loading=true})

          if (snapshot.state === firebase.storage.TaskState.SUCCESS) {
            // console.log(snapshot, "snapSj")
            // alert("Image Uploaded Successfully");
            this.geturl(filename, id);
            this.setState({loading:this.state.loading=false})
          }


          this.setState(state);
        },
        error => {
          unsubscribe();
          alert('Sorry, Try again.');
        }
      );

  }
  geturl(filename, key) {
    firebase.storage().ref(`Notes/images/${filename}`).getDownloadURL().then(function (url) {
      updateurl(url, key);
    }).catch((error) => {
      console.log("Api call error");
      alert(error.message);
    });
  }
  
    render(){
      const{imageSource}=this.state;
    return (

      <View style={{flex:1, backgroundColor:"white"}}>
 
                
                <View style={{flexDirection:'row',backgroundColor:"rgb(224,255,255)",marginHorizontal:10,marginVertical:3,
                borderBottomWidth:3,
                borderColor:"rgb(175,238,238)"}}>
                 <TouchableOpacity onPress={() =>{
          this.deleteUser()}}>

         
          <Image
            source={require('./delete.png')}
            style={{ width: 45, height: 45, justifyContent: "center",  marginTop:6,borderRadius:15,marginLeft:40}}
          /></TouchableOpacity>
          <TouchableOpacity onPress={() =>{this.updateUser(),this.props.navigation.navigate("AddNotes")}}

>
 <Image
   source={require('./update.png')}
   style={{ width: 48, height: 48, justifyContent: "center", marginLeft: 55, marginTop:6,borderRadius:25}}
 /></TouchableOpacity>
 <TouchableOpacity onPress={() =>{ this.setState({ isVisible: true }) }}

>
 <Image
   source={require('./camera.png')}
   style={{ width: 60, height: 60, justifyContent: "center", marginLeft: 55, marginTop:3,borderRadius:20}}
 /></TouchableOpacity>
                
                </View>
                <View style={{flex:1, backgroundColor:"white",margin:20}}> 

 <TextInput style={{
                 paddingVertical:10,height:50,width:"100%",
                fontSize: 20,
                 margin:6
                , borderColor: "grey", backgroundColor:"white"

              }}
                placeholder=" "
                // onChangeText={(text) => {
                //   this.notes = text;
                //   this.setState({ text: text })
                // }}
               multiline={true}
               numberOfLines={4}
              value={this.state.text}
              
              onChangeText={(val) => this.inputValueUpdate(val, 'text')}/></View>
   
 
         
         {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
          <Image
            source={{uri:pickedImage}}
            style={{ width: 300, height: 300 }}
          />
        
        <Button title="Choose Photo" onPress={()=>this.ChoosePhoto()} />
      </View> */}
  
  <Modal visible={this.state.isVisible}
          animationType="slide"
          transparent={true} onRequestClose={() => { this.setState({ isVisible: false }) }}  >
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <View style={{ margin: 5, elevation: 10 }}><Button title="Take  Photo" onPress={() => {
              ImagePicker.openCamera({
                width: 300,
                height: 400,
                cropping: true,
              }).then(image => {
                this.setState({ imageSource: this.state.imageSource = image.path, isVisible: this.state.isVisible = false });

                this.uploadImage(this.state.imageSource, this.props.route.params.key);
                this.setState({ isVisible: false });


              });


            }} /></View>
            <View style={{ margin: 5, elevation: 10}}><Button title="Upload  Photo" onPress={() => {
              ImagePicker.openPicker({
                width: 300,
                height: 400,
                cropping: true,
              }).then(image => {
                this.setState({ imageSource: this.state.imageSource = image.path, isVisible: this.state.isVisible = false });

                this.uploadImage(this.state.imageSource, this.props.route.params.key);
                // this.geturl(this.state.filename)
                // alert(this.state.filename)
                this.setState({ isVisible: false });
              });
            }} /></View>


            <View style={{ margin: 5, elevation: 10,}}
            ><Button style={{height:70,width:"50%"}}
             title="Cancel" onPress={() => { this.setState({ isVisible: false }) }} /></View>



          </View>

        </Modal>
      
        <View style={{ alignSelf: "center" }}>{this.image()}</View>
    
      </View>
        
    );
    }
  }
  