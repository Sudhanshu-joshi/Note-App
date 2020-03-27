import React from 'react';
import{Text,View,Image,TouchableOpacity,Modal,ActivityIndicator}from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import firebase from 'react-native-firebase'
import {
    TextField
    
  } from 'react-native-material-textfield';
 export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {email:'',errorMessage: null,password:'', loading: true,isVisible:false
   
};
    }

 
    componentDidMount() {
      firebase.auth().onAuthStateChanged(user => {
        this.props.navigation.navigate(user ? 'AddNotes' : 'login')
      })
  }

    handleLogin = () => {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password)
          .then(() =>{
              //alert("sucess")
              this.setState({isLoading:false,isVisible:false})
             this.props.navigation.navigate('AddNotes')
             
        
          } )
          .catch(error =>{
            this.setState({ errorMessage: error.message ,isLoading: false})
    

          } )
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
            style={{ width: 110, height: 110,marginTop:60}}
          />
          <View style={{borderRadius:10,borderColor:'silver',height:60,borderWidth:1,
          paddingLeft:30
          ,marginTop:35,width:"65%"}}>
            <TextField
                 onChangeText={(text)=>this.setState({email:text})}
                lineType="none"
                inputContainerStyle={{paddingTop:2}}
                    label ="example@gmail.com"
                    value={this.state.email}
                    > 
            </TextField></View>
            <View style={{borderRadius:10,borderColor:'silver',height:60,borderWidth:1,
          paddingLeft:30
          ,marginTop:15,width:"65%"}}>
            <TextField
            lineType="none"
            inputContainerStyle={{paddingTop:2}}
            onChangeText={(text)=>this.setState({password:text})}
            value={this.state.password}
                    label="Password"
                    secureTextEntry={true}
                    >  </TextField></View>
                     <View style={{backgroundColor:"rgb(66,170,245)",height:50,width:"65%",borderRadius:10,
                     marginTop:30,justifyContent:'center',marginLeft:15,alignItems:'center'}}>
                <TouchableOpacity onPress={() =>{[this.handleLogin(),this.setState({isLoading:true,isVisible:true})]}}>
               
                    <Text style={{color:'white',fontSize:20,alignContent:'center',fontWeight:"700"}}>Login</Text>
                </TouchableOpacity></View>
                <View style={{backgroundColor:"white",
                     marginTop:20,justifyContent:'center',alignItems:'center'}}>

<Text style={{color:'grey',fontSize:16,alignContent:'center'}}>________or with________</Text>
                     </View>
                     
                     <TouchableOpacity  style={{height:50,width:"35%",borderRadius:10,marginTop:15,
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
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Signin')}}>
                <Text style={{color:'grey',fontSize:16,alignContent:'center',fontWeight:"500",paddingTop:20
                ,paddingBottom:30}}>Don't have an account? Register </Text>
         </TouchableOpacity>  
          </View>
        
            
            
        
        </KeyboardAwareScrollView>
</View>
    )
}
}
