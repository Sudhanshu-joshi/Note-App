 import 'react-native-gesture-handler';
 import * as React from 'react';
 import { NavigationContainer } from '@react-navigation/native';

 import { createStackNavigator } from '@react-navigation/stack';
import Login from './LoginScreen'
import Signup from './Signup'
import AddNotes from './AddNotes'
 import detail from './detail';
 import fetch from './fetch';
 import fetchs from './fetchs';
 import LoginForm from './ LoginForm';


const Stack = createStackNavigator();



 export default class App extends React.Component {
  render() {
     return (
       <NavigationContainer>
          <Stack.Navigator
      screenOptions={{
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
           <Stack.Screen name="Login" component={Login} />
           < Stack.Screen name="LoginForm" component={LoginForm} />
          <Stack.Screen name="Signup" component={Signup} />
           <Stack.Screen name="AddNotes" component={AddNotes} />
           <Stack.Screen name="Detailed Notes" component={detail} />  
         < Stack.Screen name="fetchs" component={fetchs} />
         < Stack.Screen name="fetch" component={fetch} />

          

        </Stack.Navigator>
       </NavigationContainer>
     );
   }
 }