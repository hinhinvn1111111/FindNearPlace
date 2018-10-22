import React, { Component } from 'react';
import { 
    View,
    Text,
    ListView,
    Image,
    TouchableOpacity,
    TextInput,
    YellowBox
 } from 'react-native';

 import MapView from 'react-native-maps';

 YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
 YellowBox.ignoreWarnings([
   'Warning: componentWillMount is deprecated',
   'Warning: componentWillReceiveProps is deprecated',
 ]);

 import MapView from 'react-native-maps';

 export default class Map extends Component {
     
     constructor(props){
         super(props);
         this.state = {
            data : [
                // {latitude:10.872790,longitude:106.767284},
                // {latitude:10.877808,longitude:106.766172},
                // {latitude:10.878735,longitude:106.766386}
            ],
            isFind:false,
            keyWord:'',
            dataSearch:[]
         }
     }
     _Search(){
        fetch('http://192.168.40.2:8888:8888/DemoMapPHP/getSearch.php',{
            method:'POST',
            headers:{},
            body:JSON.stringify({
                name:'aaa',
                pass:'bbb'
            })
        })
        .catch((e)=>{
            console.log(e);
        })
     }
     _addMarkerFromServer(){
         for(let i of mang){
             data.push({latitude:i.Latitude,longitude:i.Longitude})
         }
     }
     _getData(){
        return fetch('http://192.168.40.2:8888/DemoMapPHP/Demo1/connect.php')
        .then((response) => response.json())
        .then((responseJson) => {
          // let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          this.setState({
            data : responseJson
          }, function() {
            // In this block you can do something with new state.
          });
        })
        .catch((error) => {
          console.error(error);
        });
     }
     _renderHeader(){
        let isSearch = this.state.isFind;
        const k = this.props.ref;
        if(isSearch===false){
            return(
               <View style={{height:50,flexDirection:'row',justifyContent:'space-between',alignItems:'center', backgroundColor:'rgba(255,255,255,0)'}}>
                   <TouchableOpacity onPress={()=>k.openDrawer(0)}>
                       <Image style={{width:36, height:36, resizeMode:'cover'}}
                       
                       source={{uri:'https://png.icons8.com/nolan/2x/forward.png'}}
                       />
                   </TouchableOpacity>
                   <Text >What do you want to find ?</Text>
                   <TouchableOpacity onPress={()=>{this.setState({isFind:true})}}>
                       <Image style={{width:36, height:36, resizeMode:'cover'}}
                       
                       source={{uri:'https://png.icons8.com/nolan/2x/search.png'}}
                       />
                   </TouchableOpacity>
               </View>
            )
        }else{
            return(
               <View style={{height:50,flexDirection:'row',justifyContent:'space-between',alignItems:'center', backgroundColor:'rgba(255,255,255,0)'}}>
                   <TouchableOpacity onPress={this._Search.bind(this)}>
                       <Image style={{width:36, height:36, resizeMode:'cover'}}
                       
                       source={{uri:'https://png.icons8.com/color/2x/back.png'}}
                       />
                   </TouchableOpacity>
                   <TextInput sub={(vl)=>this.setState({wordSearch:vl})} style={{flex:1,height:40, backgroundColor:'lightblue',textAlign:'center',borderRadius:5,marginLeft:10,marginRight:10}} />
                   <TouchableOpacity onPress={this._Search.bind(this)}>
                       <Image style={{width:36, height:36, resizeMode:'cover'}}
                       
                       source={{uri:'https://png.icons8.com/nolan/2x/search.png'}}
                       />
                   </TouchableOpacity>
               </View>
            )
        }
    }
     componentDidMount(){
         this._getData();
     }
     _renderMarer(){
         views = [];
         for(let i of this.state.data){
                views.push(
                    <MapView.Marker
                        key={parseFloat(i.Latitude)}
                        coordinate={{
                            latitude:parseFloat(i.Latitude),
                            longitude:parseFloat(i.Longtitude)
                        }}
                    >
                        <MapView.Callout style={{width:200,height:200}}>
                            <View style={{flex:1,alignItems:'center'}}>
                                <Image style={{width:250, height:100, resizeMode:'cover',marginTop:10}}
                                    source={{uri:i.Image}} />
                                <Text style={{fontSize:18, fontWeight:'bold',color:'red', marginTop:10}}>{i.Title}</Text>
                                <Text style={{fontSize:12,color:'blue', marginTop:10}}>{i.Decription}</Text>
                            </View>
                        </MapView.Callout>
                    </MapView.Marker>
                )
         }
         return views;
     }
     render() {
         return (
             <View style={{flex:1}}>
                <View>{this._renderHeader()}</View>
                <MapView
                    style={{flex:1}}
                    
                    initialRegion={{
                        latitude:10.878173,
                        longitude:106.766559,
                        latitudeDelta:0.009,
                        longitudeDelta:0.0012
                    }}
                    
                >
                    {/* <MapView.Marker
                        coordinate={{
                            latitude:10.872790,
                            longitude:106.767284
                        }}
                    >

                    </MapView.Marker> */}
                    {this._renderMarer()}
                    
                </MapView>
             </View>
         );
     }
 }