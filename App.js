import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import Login from './LoginScreen'
import LoginForm from './ LoginForm'
import AddNotes from './AddNotes'
import detail from './detail';

const Stack = createStackNavigator();



export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="LoginForm" component={LoginForm} />
          <Stack.Screen name="AddNotes" component={AddNotes} />
          <Stack.Screen name="Detailed Notes" component={detail} />
          

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}