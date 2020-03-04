import React from'react'
import{Text,View,FlatList,TouchableOpacity} from'react-native';
export default class Async extends React.Component{
    constructor(props){
    super(props);
    this.state = { listData : [ ] };
    
    

    }
    componentDidMount(){
        const fetchData = async () => {
            return await fetch('https://jsonplaceholder.typicode.com/todos')
          }
          
          const printData = async () => {
            try {
              const data = await fetchData()
              const json = await data.json()
              
            this.setState({ listData : json });
              
            } catch(err) {
              console.error("Problem", err)
            }
          }
          
       printData()  
    }
    render(){
        return(
            <View style={{flex: 1, paddingTop:10}}>
            <FlatList
              data={this.state.listData}
        renderItem={({item}) =><View style={{margin:10,backgroundColor:'lightgrey'}}> 
       
        <Text style={{fontSize:15,fontWeight:'bold',paddingLeft:10}}>
            
            
            userId:{item.userId},
        id: {item.id},
        title:{item.title}
       
       
        </Text>
    
        
      
        
        </View>}
              keyExtractor={({id}, index) => id}
            />
          </View>
            


            
        )
    }
}

