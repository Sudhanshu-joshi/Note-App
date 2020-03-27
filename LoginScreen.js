import React from 'react';
import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Button,Image
} from 'react-native';


export default class LoginScreen extends React.Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor:"white",justifyContent:'center',alignItems:'center'}}>
                 <Image
          source={require('./to.png')}
          style={{ width: "80%", height: 240, justifyContent: "center", margin:20}}
        />
                
                <TouchableOpacity 
                    
                
                onPress={() => this.props.navigation.navigate("login")}>
                
                <Text style={{fontSize: 38,fontStyle:'italic',color:"rgb(66,170,245)",padding:45}}>Notes App</Text>

      
       
        </TouchableOpacity>
            </View>
        )
    }
}