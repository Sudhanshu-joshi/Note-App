import React from'react';
import{Text,View,TextInput,StyleSheet,TouchableOpacity,TouchableWithoutFeedback,Keyboard}from'react-native';
import firebase from 'react-native-firebase'
import AsyncStorage from '@react-native-community/async-storage'
class Sign extends React.Component{
    constructor(props){
        super(props);
        // this.ref = firebase.firestore().collection(firebase.auth().currentUser.uid)
        
      
    
        this.state = {email:'',errorMessage: null,password:'',name:'', loading: true,key:""
,    
    getValue: '',array:[]};
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
      
      setValueLocally = () => {
        AsyncStorage.setItem('Name', this.state.name);
         alert("Value Stored Successfully.")
        //console.log(Notes);
      }
      // getValueLocally = () => {
      //    AsyncStorage.getItem('Name').then((value) => this.setState({ Name: name }))
      //  }
      //  addRandom = () => {
      // //   alert("vvvvvvvvvv")
      //  this.ref.add({
        
      //   Name:this.state.name
          
      //   });
      //    alert("bbcmdvm")
      // }
      
      
  
  
    
  

    render(){
        return(
            
            
            <View style={{flex:1}}>
            
              <View style={{flex:0.5,backgroundColor:'orange',borderBottomLeftRadius:200,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:35,color:'white',marginLeft:-120,marginTop:30,paddingBottom:30}}>Signup</Text>
              </View>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
               <View style={{ flex:1,justifyContent:'center',borderBottomEndRadius:200,backgroundColor:'lightgrey'}}>
               <View style={styles.Input}>
            <TextInput style={{borderRadius:20,borderBottomColor:'silver',height:40,borderBottomWidth:3,
            padding:10,marginTop:20}}
                onChangeText={(text)=>this.setState({name:text})}
                
                    placeholder="Fullname"
                    value={this.state.name}> 

            </TextInput>

            </View>
                  <View style={styles.Input}>
                  <TextInput style={{borderRadius:20,borderBottomColor:'silver',height:40,borderBottomWidth:3,
                  padding:10}}
                      onChangeText={(text)=>this.setState({email:text})}
                          placeholder="example@gmail.com"
                          value={this.state.email}
                          > 
                          
                  </TextInput>
      
                  </View>
                  
                          <View style={styles.Input}>
                      <TextInput style={{borderRadius:20,borderBottomColor:'silver',height:40,borderBottomWidth:3
                      ,padding:10}}
                           onChangeText={(text)=>this.setState({password:text})}
                           value={this.state.password}
                           
                           secureTextEntry={true}
                           placeholder="Password"
                           >
                      
                      </TextInput>
                     

                  </View>
                 
      
                  
                  <View style={{backgroundColor:'orange',height:40,width:"50%",borderRadius:20,marginTop:10,
                  justifyContent:'center',marginLeft:60,alignItems:'center'}}>
                      <TouchableOpacity onPress={() =>{this.handleSignUp(),this.setValueLocally()}}>
                     
                          <Text style={{color:'white',fontSize:20,alignContent:'center'}}>Create Account</Text>
                      </TouchableOpacity></View>
                       
                  
                       
                      
                 </View>
                  
                </TouchableWithoutFeedback>  
              </View>
              
              
          )
        }
      }
              
      export default Sign ;
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
            
    


