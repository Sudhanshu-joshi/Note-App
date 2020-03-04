import React from 'react'
import { FlatList,TouchableOpacity, Text,View,Image  } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state =[
    ];
  }
  componentDidMount(){
    return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(Json =>{
        this.setState({
          dataSource: Json,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

   

    return(
      <View style={{flex: 1, paddingTop:10}}>
        <FlatList
          data={this.state.dataSource}
    renderItem={({item}) =><View style={{margin:10,backgroundColor:'lightgrey'}}> 
    <TouchableOpacity onPress={()=>this.props.navigation.navigate("fetch",{ userId: item.userId ,id:item.id,
    title: item.title,completed:item.completed}
    )}>
    <Text style={{fontSize:15,fontWeight:'bold',paddingLeft:10}}>
        
        
        userId:{item.userId},
    id: {item.id},
    title:{item.title}
   
   
    </Text>

    
        </TouchableOpacity>
    
    </View>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}
