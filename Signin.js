import React from 'react';
import{Text,View,Image,TouchableOpacity,Modal,ActivityIndicator}from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import firebase from 'react-native-firebase'
import {
    TextField,
    FilledTextField,
    OutlinedTextField,
  } from 'react-native-material-textfield';
 export default class Signin extends React.Component{
    constructor(props){
        super(props);
        this.state = {email:'',password:'',errorMessage: null, isLoading: false,
        isVisible:false, name:"", Phonenumber:""
    };
    }
     
    handleSignUp = () => {
      
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(() => this.props.navigation.navigate('AddNotes'))
          .catch(error => {this.setState({ errorMessage: error.message })
                alert(this.state.errorMessage)
        })
      }

render(){
    return(
        
        <View
        style={{flex:1,backgroundColor:"rgb(66,170,245)"}}>
                
      
       <Modal
            animationType="slide" visible={this.state.isVisible}
            transparent={true}>
          <View style={{flex: 1,marginTop:60}}>
            <ActivityIndicator color='silver' size="large" />
          </View></Modal>
            
          <KeyboardAwareScrollView> 
            <View style={{ flex:1,backgroundColor:"white"
            ,justifyContent:"center",alignItems:"center"}}>
            <Image
            source= {require('./to.png')}
            style={{ width: 105, height: 105,marginTop:40}}
          />
           <View style={{borderRadius:10,borderColor:'silver',height:60,borderWidth:1,
          paddingLeft:30
          ,marginTop:25,width:"65%"}}>
            <TextField
                lineType="none"
                onChangeText={(text)=>this.setState({name:text})}
                label ="FirstName and LastName"
                    value={this.state.name}
                    inputContainerStyle={{paddingTop:2}}
                    > 
            </TextField></View>
            <View style={{borderRadius:10,borderColor:'silver',height:60,borderWidth:1,
          paddingLeft:30
          ,marginTop:10,width:"65%"}}>
            <TextField
                lineType="none"
                inputContainerStyle={{paddingTop:2}}
                    onChangeText={(text)=>this.setState({Phonenumber:text})}
                    label ="PhoneNumber"
                    value={this.state.Phonenumber}
                    keyboardType='phone-pad'

                    > 
            </TextField></View>
          <View style={{borderRadius:10,borderColor:'silver',height:60,borderWidth:1,
          paddingLeft:30
          ,marginTop:10,width:"65%"}}>
            <TextField
                lineType="none"
                 inputContainerStyle={{paddingTop:2}}
                 onChangeText={(text)=>this.setState({email:text})}
                    label ="example@gmail.com"
                    value={this.state.email}
                    > 
            </TextField></View>
            <View style={{borderRadius:10,borderColor:'silver',height:60,borderWidth:1,
          paddingLeft:30
          ,marginTop:10,width:"65%",marginBottom:15}}>
            <TextField
            lineType="none"
            inputContainerStyle={{paddingTop:2}}
                title="Minimum 6 characters"
                onChangeText={(text)=>this.setState({password:text})}
                value={this.state.password}
                    label="Password"
                    secureTextEntry={true}
                    >  </TextField></View>
                     <View style={{backgroundColor:"rgb(66,170,245)",height:50,width:"65%",borderRadius:10,
                     marginTop:25,justifyContent:'center',marginLeft:15,alignItems:'center'}}>
                <TouchableOpacity onPress={() =>{[this.handleSignUp(),
                this.setState({isLoading:true,isVisible:true})]}}>
               
                    <Text style={{color:'white',fontSize:20,alignContent:'center',fontWeight:"700"}}>Register</Text>
                </TouchableOpacity></View>
                <View style={{backgroundColor:"white",
                     marginTop:15,justifyContent:'center',alignItems:'center'}}>

<Text style={{color:'grey',fontSize:16,alignContent:'center'}}>________or with________</Text>
                     </View>
                     
                     <TouchableOpacity  style={{height:50,width:"35%",borderRadius:10,marginTop:20,
                     borderWidth:3,justifyContent:'center',marginRight:100,alignItems:'center',
                     borderColor:"rgb(66,170,245)"}}
                         onPress={() =>{}}>
            <Text
            style={{ fontSize:28,position:"absolute",right:90,color:"rgb(66,170,245)",fontWeight:"bold"}} >f </Text>
           
               <Text style={{color:'rgb(66,170,245)',fontSize:18,paddingLeft:20,pfontWeight:"500",paddingBottom:2}}> Facebook
                    </Text>
                 </TouchableOpacity>


                 <TouchableOpacity style={{height:50,width:"35%",borderRadius:10,marginTop:-50,
                     borderWidth:3,justifyContent:'center',marginLeft:160,alignItems:'center',borderColor:"red"}}
                 onPress={() =>{}}>
                      <Image
            source= {require('./gg.png')}
            style={{ width: 20, height: 20,position:"absolute",right:90,left:10}}
          />  
               
                    <Text style={{color:'red',fontSize:18,paddingLeft:20,fontWeight:"500",paddingBottom:2}}> Google
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('login')}}>
                <Text style={{color:'grey',fontSize:16,alignContent:'center',fontWeight:"500",paddingTop:20
                ,paddingBottom:30}}>Already have an account? Login </Text></TouchableOpacity>
            </View>
        
            
            
        
        </KeyboardAwareScrollView>
</View>
    )
}
}
