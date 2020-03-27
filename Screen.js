import React from "react";
import{Text,View,TouchableOpacity,Image} from'react-native';
 export default class Screen extends React.Component{
   
    render(){
        return(
            <View style={{flex:2,background:"white"}}>
            <View style={{flex:0.4,flexDirection:"row"}}>
                <TouchableOpacity style={{height:105,width:"30%",borderWidth:1,backgroundColor:"rgb(66,170,245)",
                borderColor:"rgb(66,170,245)",marginTop:30,marginRight:10,marginLeft:6,borderRadius:10
            }} onPress={() =>{}}> 
              <Image
            source= {require('./alll.png')}
            style={{ width: 40, height: 40,resizeMode:"center",marginLeft:30,marginTop:20,borderRadius:10}}
          />                 

               <Text style={{fontSize:12,color:"white",textAlign:"center",paddingTop:5}}>All Notes</Text>
               <Text style={{fontSize:12,color:"white",textAlign:"center",paddingTop:3}}>65 Notes</Text>
           </TouchableOpacity>
           <TouchableOpacity style={{height:105,width:"30%",borderWidth:1,backgroundColor:"rgb(196,55,30)",
                borderColor:"rgb(196,55,30)",marginTop:30,marginRight:10,borderRadius:10
            }} onPress={() =>{}}>
               
               <Image
            source= {require('./red.jpeg')}
            style={{ width: 40, height: 40,resizeMode:"center",marginLeft:30,marginTop:20,borderRadius:30}}
          />   
           <Text style={{fontSize:12,color:"white",textAlign:"center",paddingTop:5}}>Completed Notes</Text>
           <Text style={{fontSize:12,color:"white",textAlign:"center",paddingTop:3}}>112 Notes</Text>
           </TouchableOpacity>
           <TouchableOpacity style={{height:105,width:"30%",borderWidth:1,backgroundColor:"rgb(123,7,245)",
                borderColor:"rgb(123,7,245)",marginTop:30,borderRadius:10
            }} onPress={() =>{}}>
               
               <Image
            source= {require('./pending.png')}
            style={{ width: 40, height: 40,resizeMode:"center",marginLeft:30,marginTop:20}}
          />   
                <Text style={{fontSize:12,color:"white",textAlign:"center",paddingTop:5}}>Pending Notes</Text>
                <Text style={{fontSize:12,color:"white",textAlign:"center",paddingTop:3}}>127 Notes</Text>
           </TouchableOpacity>
           </View>
           <View style={{flex:1}}>
           <Text style={{fontSize:20,paddingTop:100,fontWeight:"bold",paddingLeft:5}}>Task Progress</Text>
           
           </View>
           <View style={{flex:1,flexDirection:"row",backgroundColor:"lightgrey"}}>
               <View style={{flex:1,margin:2,backgroundColor:"white"}}>
               <Text style={{fontSize:26,paddingTop:20,paddingLeft:10}}>265</Text>
                <Text style={{fontSize:18,color:"lightgrey",paddingLeft:10,paddingTop:10}}>Completed Notes</Text>

               </View>
               <View style={{flex:1,margin:2,backgroundColor:"white"}}>
               <Text style={{fontSize:26,paddingLeft:20,paddingTop:20}}>25</Text>
                <Text style={{fontSize:18,color:"lightgrey",paddingTop:10,paddingLeft:20}}>Pending Notes</Text>
                   </View>
           </View>
           <View style={{flex:2.5}}>
           <Text style={{color:"rgb(66,170,245)",paddingTop:40,paddingLeft:10}}>All Notes</Text>
           
           <View style={{height:20,width:"90%",borderWidth:2,justifyContent:"center",
           alignItems:"center",marginLeft:10,borderColor:"lightgrey",borderRadius:10
           ,marginTop:10,flexDirection:"row"}}>
               
               <View style={{height:14,width:"80%",borderWidth:1
           ,borderColor:"lightgrey",borderRadius:10,marginRight:24
           ,backgroundColor:"rgb(66,170,245)"}}>
               

           </View>
           <View>
               <Text style={{fontSize:10,color:"rgb(66,170,245)",paddingRight:20}}> 75%</Text> 

           </View>

           </View>
           <Text style={{color:"rgb(196,55,30)",paddingTop:12,paddingLeft:10}}>Completed Notes</Text>
           <View style={{height:20,width:"90%",borderWidth:2,justifyContent:"center",
           alignItems:"center",marginLeft:10,borderColor:"lightgrey",borderRadius:10,
           marginTop:8,flexDirection:"row"
           }}>
               
            <View style={{height:14,width:"60%",borderWidth:1
           ,borderColor:"lightgrey",borderRadius:10,marginRight:88
           ,backgroundColor:"rgb(196,55,30)"}}>
               

           </View> 
           <View>
               <Text style={{fontSize:10,color:"rgb(196,55,30)",paddingRight:20}}> 45%</Text></View> 

           </View>
           <Text style={{color:"rgb(123,7,245)",paddingTop:12,paddingLeft:10}}>Pending Notes</Text>
           <View style={{height:20,width:"90%",borderWidth:2,justifyContent:"center",
           alignItems:"center",marginLeft:10,borderColor:"lightgrey",borderRadius:10
           ,marginTop:8,flexDirection:"row"}}>
               
               <View style={{height:14,width:"75%",borderWidth:1
           ,borderColor:"lightgrey",borderRadius:10,marginRight:41
           ,backgroundColor:"rgb(123,7,245)"}}>
               

           </View> 
           <View>
               <Text style={{fontSize:10,color:"rgb(123,7,245)",paddingRight:20}}> 65%</Text></View> 

           
           </View>
           </View>
           </View>
            
        
        )
    }
}