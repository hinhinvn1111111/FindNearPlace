
// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View,ListView} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });


// ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2});
// export default class App extends Component {
  
//   constructor(props){
//     super(props);
//     arrList = [{ID:'1'}];
    
//     this.state = {
//       dataSource : ds.cloneWithRows(arrList)
//     }
//   }
//   getData(){
//     return fetch('http://192.168.40.2:8888/DemoMapPHP/Demo1/connect.php')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         arrList.push(responseJson);
//         alert(responseJson)
//         this.setState({dataSource:ds.cloneWithRows(arrList)})
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }
//   componentDidMount(){
//     this.getData();
//   }
//   _renderRows(property){
//     return(
//       <View style={{flex:1,backgroundColor:'blue'}}>
//         <Text>{property.ID}</Text>
//       </View>
//     )
//   }
//   render() {
//     return (
//       <View style={{flex:1,backgroundColor:'lightblue'}}>
//           <ListView 
//             style={{width:100,height:100,backgroundColor:'red'}}
//             dataSource={this.state.dataSource}
//             renderRow={(data)=><Text>{data.ID}</Text>}
//           />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

import React, { Component } from 'react';

import { AppRegistry, StyleSheet, ActivityIndicator, ListView, Text, View, Alert, StatusBar, YellowBox } from 'react-native';

//import Map from './src/component/Map';



import InsertDemo from './src/component/insertDemo';

import DemoDrawerLayoutAndroid from './src/component/DemoDrawer';

import Main from './src/component/Main';

StatusBar.setHidden(true);
ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);
import Demo from './src/component/DemoNavigation';
export default class App extends Component {
  
  constructor(props) {
    super(props);
    arrOJ=[];
    this.state = {
      isLoading: true,
      dataSource:ds.cloneWithRows(arrOJ)
    }
  }
GetItem (fruit_name) {
   
  Alert.alert(fruit_name);
 
  }
 
 
  componentDidMount() {
 
    return fetch('http://192.168.40.2:8888/DemoMapPHP/Demo1/connect.php')
      .then((response) => response.json())
      .then((responseJson) => {
        // let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
          // In this block you can do something with new state.
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
 
  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }
 
  
  _renderRow(rowData){
    return(
      <View>
        <Text>{rowData.ID} + {rowData.Latitude} + {rowData.Longtitude}</Text>
      </View>
    )
  }

  render() { 
    return (
      <Main />
       
    );
  }
}
 
const styles = StyleSheet.create({
 
MainContainer :{
 
// Setting up View inside content in Vertically center.
justifyContent: 'center',
flex:1,
margin: 10
 
},
 
   rowViewContainer: {
        fontSize: 20,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
      }
 
});
 
