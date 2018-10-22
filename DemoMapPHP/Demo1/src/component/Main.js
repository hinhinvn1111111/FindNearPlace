import React, { Component } from 'react';
import { 
    View,
    Text,
    DrawerLayoutAndroid,
    TouchableOpacity,
    Image,
    TextInput
 } from 'react-native';

 import {createStackNavigator} from 'react-navigation';

 import MapView from 'react-native-maps';

 export default class Main extends Component {
     _renderNavigationView(){
         return(
             <View>
                 <Text>DrawerLayout</Text>
             </View>
         )
     }
     render() {
         return (
            <DrawerLayoutAndroid
                drawerBackgroundColor='#fff'
                drawerWidth={300}
                ref={'drawe1'}
                renderNavigationView={this._renderNavigationView.bind(this)}
             >
            <Header />
            <Map />   
             </DrawerLayoutAndroid>
         );
     }
 }

 class Header extends Component {
     render() {
         return (
             <View style={{width:"100%",height:35,backgroundColor:'lightblue',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                <Image 
                    style={{width:26,height:26,resizeMode:'cover', marginLeft:7}}
                    source={{uri:'https://png.icons8.com/nolan/2x/search.png'}}
                />
                <TextInput placeholder="Bạn muốn tìm gì thế ?" style={{flex:1, padding:10}}/>
                <Image 
                    style={{width:26,height:26,resizeMode:'cover', marginRight:7}}
                    source={{uri:'https://png.icons8.com/ultraviolet/2x/plus.png'}}
                />
             </View>
         );
     }
 }

 class Map extends Component {
     render(){
         return(
            <View>
                
                <MapView style={{width:"100%",height:"100%"}}
                    initialRegion={{
                        latitude:10.878173,
                        longitude:106.766559,
                        latitudeDelta:0.009,
                        longitudeDelta:0.0012
                    }}
                >
                
                </MapView>
            </View>
         )
     }
 }