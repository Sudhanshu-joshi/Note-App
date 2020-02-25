/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */



import React from 'react';
import {View, Text,TextInput,TouchableOpacity,StyleSheet,secureTextEntry} from 'react-native';


class Appp extends React.Component{
    constructor(props){
        super(props);
        this.state = {name:'',email:'',password:'',phonenumber:''};
    }

    validation=()=>{
        if(this.state.text!=''){
            alert(" You are  Successfully Registered");}
        
            else{
                alert(" You are not Successfully Registered");
    }}
  
  render(){
    return(
      <View style={{flex:1}}>
        <View style={{flex:1,backgroundColor:'orange',borderBottomLeftRadius:100,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:25,color:'white',marginEnd:-200,marginTop:100}}>Register</Text>
        </View>
    
        <View style={{justifyContent:'center'}}>
            <TextInput style={{borderRadius:20,borderColor:'grey',height:40,borderWidth:1,marginLeft:20,marginRight:20,marginBottom:30,marginTop:30}}
            onchangeText={(text)=>this.setState({name:text})}
            placeholder="full name">
             </TextInput>

            <View style={styles.Input}>
            <TextInput style={{borderRadius:20,borderColor:'grey',height:40,borderWidth:1}}
                onChangeText={(text)=>this.setState({email:text})}
                    placeholder="Email"> 
            </TextInput>

            </View>
            <View style={styles.Input}>
                <TextInput style={{borderRadius:20,borderColor:'grey',height:40,borderWidth:1}}
                 onchangeText={(text)=>this.setState({phonenumber:text})}
                 placeholder="Phonenumber">
                </TextInput>
                </View>
                    
                    <View style={styles.Input}>
                <TextInput style={{borderRadius:20,borderColor:'grey',height:40,borderWidth:1}}
                     onchangeText={(text)=>this.setState()}
                     value={this.state.text}
                     secureTextEntry={true}
                     placeholder="Password"
                     >
                
                </TextInput>
    
            </View>
            
            <View style={{backgroundColor:'orange',height:40,width:"70%",borderRadius:20,marginTop:50,justifyContent:'center',marginLeft:60,alignItems:'center'}}>
                <TouchableOpacity onPress={() =>{this.props.navigation.navigate("AddNotes")}}>
               
                    <Text style={{color:'white',fontSize:20,alignContent:'center'}}>Register</Text>
                </TouchableOpacity></View>
                <View style={{justifyContent:'center',alignItems:'center',marginBottom:5,flexDirection:'row'}}>
                    <View>
                    <Text style={{fontSize:15}}>Already a Member?</Text>
                </View>
                <View style={{margin:5}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Navigate')}></TouchableOpacity>
                <Text style={{color:'red'}}>Login</Text>
                </View>
                </View>
                   
                
            </View>
            
        
        </View>
        
       
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



	
