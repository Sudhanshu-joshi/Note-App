import React from 'react';
import {  Text, View ,TouchableOpacity,Image } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ //userId:"",
    //id:"",
    //title:"",
    completed:require('./c.jpeg'),
    

  
  };
}




  render(){

   

    return(
      <View style={{flex: 1, paddingTop:20,margin:20,backgroundColor:'lightgrey',marginBottom:400}}>
       
    <Text style={{fontSize:19,color:'blue',fontWeight:'bold',paddingLeft:10}}>userId:<Text>{this.props.route.params.userId}</Text></Text>
    <Text style={{fontSize:17,color:'green',fontWeight:'600',paddingLeft:10}}>id: {this.props.route.params.id}</Text>
    <Text style={{fontSize:17,color:'red',fontWeight:'600',paddingLeft:10}}>title:{this.props.route.params.title}</Text>
    <View style={{backgroundColor:'lightgrey'}}>
   
          <Image
            source={!this.props.route.params.completed?require('./c.jpeg'):require('./cc.png')}
            style={{ width: 50, height: 50, justifyContent: "center", alignSelf: "center", margin: 30,borderRadius:30 }}
          />
        
        </View>
    

      </View>
    );
  }
}
