 import 'react-native-gesture-handler';
 import * as React from 'react';
 import{Text,View,TouchableOpacity,Modal,Image}from'react-native'
 import { NavigationContainer } from '@react-navigation/native';
 import firebase from 'react-native-firebase'
 import { createStackNavigator } from '@react-navigation/stack';
import Login from './LoginScreen'
import login from './login';
import Signin from './Signin'
import AddNotes from './AddNotes'
 import detail from './detail';
 import fetch from './fetch';
 import fetchs from './fetchs';

// import Crop from './Crop';

const Stack = createStackNavigator();



 export default class App extends React.Component {
   constructor(props){
   super(props);
   this.state={
     isvisible:false
   }
   }
   signOutUser = async () => {
    try {
        await firebase.auth().signOut();
    } catch (e) {
        alert(e);
    }
  }
  render() {
     return (
       
       <NavigationContainer>
          <Stack.Navigator
      screenOptions={{
          headerStyle: {
            backgroundColor: '"rgb(66,170,245)"',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
           <Stack.Screen name="Login" component={Login} 
           options={{
            header:()=>(null)}}/>
           < Stack.Screen name="login" component={login} />
          <Stack.Screen name="Signin" component={Signin}
          options={{
            header:()=>(null)}}
         
           />
           <Stack.Screen name="AddNotes" component={AddNotes}
           options={{
             header:()=>(null)}}
          
           />
           <Stack.Screen name="Detailed Notes" component={detail }
           options={{
            
            headerRight: () => (
                
              <TouchableOpacity onPress={() => {
                this.setState({ isvisible: true })
                //this.logout();
              }}>
                <Image style={{ height: 32, width: 32, marginRight: 20, alignContent: "center",borderRadius:16}}
                 source={require('./log.jpeg')}

                /></TouchableOpacity>
                
          
                   
                
            ),
          }}
           /> 
         < Stack.Screen name="fetchs" component={fetchs} />
         {/* < Stack.Screen name="Crop" component={Crop} /> */}

          

        </Stack.Navigator>
        <Modal visible={this.state.isvisible}
          animationType="slide"
          transparent={true}  >
          <View style={{
            backgroundColor: "lightgrey", alignItems: "center", justifyContent: "center",
            position: "absolute", left: 30, right: 30, top: 250, bottom: 250
          }}>
            <View>
              <Text style={{ fontSize: 16, marginTop: 15,color:"rgb(66,170,245)" }}>Are you sure you want to Logout?</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={() => { this.signOutUser(); this.setState({ isvisible: false }) }} 
              style={{ backgroundColor: "rgb(66,170,245)", margin: 30 ,height:40,width:60,borderRadius:30}}>
                <Text style={{ fontSize: 20, fontWeight: "bold",textAlign:'center',color:"silver",paddingVertical:5 }}>Yes</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => { this.setState({ isvisible: false }) }}
               style={{ backgroundColor: "rgb(66,170,245)", margin: 30,height:40,width:60,borderRadius:30 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold",textAlign:'center',color:"silver",paddingVertical:5}}>No</Text></TouchableOpacity>
            </View>
          </View>

        </Modal>
       </NavigationContainer>
     );
   }
 }