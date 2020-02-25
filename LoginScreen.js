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
            <View style={{flex:1,backgroundColor:'grey',justifyContent:'center',alignItems:'center'}}>
                 <Image
          source={require('./r.jpeg')}
          style={{ width: "90%", height: 400, justifyContent: "center", margin:20}}
        />
                
                <TouchableOpacity 
                    
                
                onPress={() => this.props.navigation.navigate("LoginForm")}>
                
                <Text style={{fontSize: 30,fontStyle:'italic',color:'silver',padding:45}}>Note App</Text>

      
       
        </TouchableOpacity>
            </View>
        )
    }
}