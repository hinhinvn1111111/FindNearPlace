import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    Image
 } from 'react-native';

 import {createStackNavigator,createBottomTabNavigator,createSwitchNavigator} from 'react-navigation';
 import TabNavigator from 'react-native-tab-navigator';
class Demo1 extends Component {
     state = {  }
     render() {
         return (
            <View style={{flex:1,backgroundColor:'red'}}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Demo2')}>
                <Text>Go to Demo2</Text>
            </TouchableOpacity>
        </View>
         );
     }
 }
 class Demo2 extends Component {
    state = {  }
    render() {
        return (
            <View style={{flex:1,backgroundColor:'blue'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Demo3')}>
                    <Text>Go to Demo3</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
class Demo3 extends Component {
    state = {  }
    render() {
        return (
            <View style={{flex:1,backgroundColor:'lightblue'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Demo1')}>
                    <Text>Go to Demo1</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default class Demo extends Component {
    state = {  }
    render() {
        return (
            <TabNavigator>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'Demo1'}
                title="Home"
                renderIcon={() => <Image style={{width:26,height:26,resizeMode:'cover'}} source={{uri:'https://png.icons8.com/color/2x/cottage.png'}} />}
                renderSelectedIcon={() => <Image source={{uri:'https://png.icons8.com/color/2x/cottage.png'}} />}
                badgeText="1"
                onPress={() => this.setState({ selectedTab: 'Demo1' })}>
                {<View style={{flex:1,backgroundColor:'lightblue'}}></View>}
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'Demo2'}
                title="Profile"
                renderIcon={() => <Image source={{uri:'https://png.icons8.com/color/2x/administrator-male.png'}} />}
                renderSelectedIcon={() => <Image source={{uri:'https://png.icons8.com/color/2x/administrator-male.png'}} />}
                // renderBadge={() => <CustomBadgeView />}
                onPress={() => this.setState({ selectedTab: 'Demo2' })}>
                {<View style={{flex:1,backgroundColor:'blue'}}></View>}
            </TabNavigator.Item>
            </TabNavigator>
        );
    }
}
