/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */



import React from 'react';
import {View, Text,TextInput,TouchableOpacity,StyleSheet,secureTextEntry,ActivityIndicator,Modal} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import firebase from 'react-native-firebase'


class Appp extends React.Component{
    constructor(props){
        super(props);
        this.state = {email:'',password:'',errorMessage: null, isLoading: false,isVisible:false};
    }
    componentDidMount() {
      firebase.auth().onAuthStateChanged(user => {
        this.props.navigation.navigate(user ? 'AddNotes' : 'LoginForm')
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
        <KeyboardAwareScrollView>
            
      <View style={{flex:1}}>
       <Modal
            animationType="slide" visible={this.state.isVisible}
            transparent={true}>
          <View style={{flex: 1,marginTop:60}}>
            <ActivityIndicator color='silver' size="large" />
          </View></Modal>
           
        <View style={{flex:1,backgroundColor:'orange',borderBottomLeftRadius:100,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:35,color:'white',marginEnd:-200,marginTop:120,paddingBottom:30}}>Login</Text>
        </View>
    
        <View style={{justifyContent:'center'}}>
        
            

            <View style={styles.Input}>
            <TextInput style={{borderRadius:20,borderColor:'grey',height:40,borderWidth:1,padding:10,marginTop:40}}
                onChangeText={(text)=>this.setState({email:text})}
                
                    placeholder="example@gmail.com"
                    value={this.state.email}> 
            </TextInput>

            </View>
            
                    
                    <View style={styles.Input}>
                <TextInput style={{borderRadius:20,borderColor:'grey',height:40,borderWidth:1,padding:10}}
                     onChangeText={(text)=>this.setState({password:text})}
                     value={this.state.text}
                     secureTextEntry={true}
                     placeholder="Password"
                     value={this.state.password} >
                
                </TextInput>
                

    
            </View>
            
            <View style={{backgroundColor:'orange',height:40,width:"70%",borderRadius:20,marginTop:50,justifyContent:'center',marginLeft:60,alignItems:'center'}}>
                <TouchableOpacity onPress={() =>[this.handleLogin(),
                this.setState({isLoading:true,isVisible:true})]}>
               
                    <Text style={{color:'white',fontSize:20,alignContent:'center'}}>Login</Text>
                </TouchableOpacity></View>
                <View style={{justifyContent:'center',alignItems:'center',marginBottom:5,flexDirection:'row'}}>
                    <View>
                    <Text style={{fontSize:15}}>Already a Member?</Text>
                </View>
                <View style={{margin:5}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Signup')}>
                      <Text style={{color:'red'}}>Signup</Text>
                      </TouchableOpacity>
                </View>
                </View>
                   
                
            </View>
            
        
        </View>
        
        </KeyboardAwareScrollView>
       
    )
  }
}
        
export default Appp ;
const styles=StyleSheet.create({
    Input:{
        justifyContent:'center', 
        marginLeft:20,
        marginRight:20,
        marginBottom:30,
    },
    txt:{
        color:'black',
        fontSize:20
    }
    
 })



	
