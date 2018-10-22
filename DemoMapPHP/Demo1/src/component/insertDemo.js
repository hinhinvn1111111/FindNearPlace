import React, { Component } from 'react';
import { 
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ListView
 } from 'react-native';
 export default class InsertDemo extends Component {
     constructor(props){
         super(props);

        var ds  = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !==r2});
        arrOj= [];
         this.state = {
             Username : '',
             Email : '',
             Password : '',
             Loading : false,
             adata : ds.cloneWithRows(arrOj)
         }
     }
     _InsertData(){
        this.setState({Loading:true},()=>{
            fetch('http://192.168.40.2:8888/DemoMapPHP/Server/getSearch.php',{
                method: 'POST',
                headers:{

                },
                body: JSON.stringify({
                    username : this.state.Username,
                    email : this.state.Email,
                    password : this.state.Password
                })
            })
            .then((response) => response.json()).then((responseJsonFromServer) =>
            {
                alert(responseJsonFromServer);
                this.setState({adata:responseJsonFromServer});
                this.setState({ Loading : false });
                for(let i of this.state.adata){
                    alert(i.ID);
                }
 
            })
            .catch((error)=>{
                console.error(error);
                this.setState({Loading:false});
            })

        })
     }
     render() {
         return (
             <View style={{flex:1,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
                <TextInput onChangeText={(value)=>this.setState({Username:value})}  placeholder='Username' style={{height:40,width:200,margin:10,borderWidth:2,borderColor:'black',padding:10}} />
                <TextInput onChangeText={(value)=>this.setState({Email:value})}  placeholder='Email' style={{height:40,width:200,margin:10,borderWidth:2,borderColor:'black',padding:10}} />
                <TextInput onChangeText={(value)=>this.setState({Password:value})}  placeholder='Password' style={{height:40,width:200,margin:10,borderWidth:2,borderColor:'black',padding:10}} />
                <TouchableOpacity onPress={this._InsertData.bind(this)} style={{width:100,height:40,backgroundColor:'green',justifyContent:'center',alignItems:'center',borderRadius:5}}>
                    <Text style={{fontSize:16,fontWeight:'bold',color:'#fff'}}>INSERT</Text>
                </TouchableOpacity>
             </View>
         );
     }
 }