import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity, TouchableHighlight, ScrollView, AsyncStorage } from 'react-native'
//import { white } from 'ansi-colors';
//import Iconics from 'react-native-ionicons';
//import MyView from './HideView';
//import { getUniqueId, getManufacturer, isTablet, getPhoneNumber } from 'react-native-device-info';
//import AndroidOpenSettings from 'react-native-android-open-settings'; fetchuser
import {fetchuser} from '../Home/action';
import {connect} from 'react-redux';
import Logo from '../Images/loo.jpg';
import home from '../Images/homepage.png';
import contact from '../Images/contact.png';
import order from '../Images/delivery.png';
import term from '../Images/terms-and-conditions.png';
import logout from '../Images/logout.png';
import cart from '../Images/shopping-cart.png';


class drawerContentComponents extends Component {
    componentDidMount() {
        //alert('ok');
        //console.log('ok');
        //this.props.fetchuser(this.props.Catories.auth.token.token);
    }
    navigateToScreen = ( route ) =>(
        () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    });
    
            

    toggleCancel() {
        console.log('toggle');
        this.setState({
            showCancel: !this.state.showCancel
        });
    }
    
    
    

  render() {
    return (
        <ScrollView >
            <View style={styles.headerContainer,{borderWidth:0}}>
                <View style={{flex: 1,flexDirection:'row', width: 220, justifyContent: 'center',marginTop:40, marginBottom:20}} >
                <Image source={Logo}
               style={{width: 60, height: 60, borderRadius: 150/2}} /> 
              <View style={{marginTop:10,borderWidth:0,justifyContent:'center',alignItems:'center',marginLeft:8}}>
                  <Text>Welcome to Rashan</Text>
              
                    
              </View>
                  
                </View>
            </View>
            <View style={{flexDirection:'row', width: 220, justifyContent: 'center'}} >
         
         {
                 this.props.Catories.auth.token !== '' ?
               <Text style={styles.headerText1}>Hi Customer!</Text>
                 : <Text style={styles.headerText1}>Hi Guest!</Text>
               }
             </View>
         
            <View style={styles.textContainer}>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    marginBottom:40,
                    marginTop:10
                }}
                />
            </View>
            <ScrollView style={styles.screenContainer}>
                <TouchableOpacity style={[styles.screenStyle, (this.props.activeItemKey=='Home') ? styles.activeBackgroundColor : null]} onPress={this.navigateToScreen('Home')}>
                    <Image source={home} style={{width:20,height:20,marginLeft:10}}/>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Home') ? styles.selectedTextStyle : null]} >Home</Text>
                    
                </TouchableOpacity>
                <View
                style={{
                    borderBottomColor: '#cccccc',
                    borderBottomWidth: 1
                }}
                />
                <TouchableOpacity style={[styles.screenStyle, (this.props.activeItemKey=='Cart') ? styles.activeBackgroundColor : null]} onPress={this.navigateToScreen('Cart')}>
                <Image source={cart} style={{width:20,height:20,marginLeft:10}}/>
                    
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Cart') ? styles.selectedTextStyle : null]} >My Cart</Text>
                    
                </TouchableOpacity>
                <View
                style={{
                    borderBottomColor: '#cccccc',
                    borderBottomWidth: 1
                }}
                />
                <TouchableOpacity style={[styles.screenStyle, (this.props.activeItemKey=='Order') ? styles.activeBackgroundColor : null]} onPress={this.navigateToScreen('Order')}>
                <Image source={order} style={{width:20,height:20,marginLeft:10}}/>
                    
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Order') ? styles.selectedTextStyle : null]} >My Order</Text>
                    
                </TouchableOpacity>
                <View
                style={{
                    borderBottomColor: '#cccccc',
                    borderBottomWidth: 1
                }}
                />
                <TouchableOpacity style={[styles.screenStyle, (this.props.activeItemKey=='contact') ? styles.activeBackgroundColor : null]} onPress={this.navigateToScreen('contact')}>
                <Image source={contact} style={{width:20,height:20,marginLeft:10}}/>
                    
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='contact') ? styles.selectedTextStyle : null]} >Contact Us</Text>
                    
                </TouchableOpacity>
                <View
                style={{
                    borderBottomColor: '#cccccc',
                    borderBottomWidth: 1
                }}
                />
                 <TouchableOpacity style={[styles.screenStyle, (this.props.activeItemKey=='Term') ? styles.activeBackgroundColor : null]} onPress={this.navigateToScreen('Term')}>
                 <Image source={term} style={{width:20,height:20,marginLeft:10}}/>
                
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Term') ? styles.selectedTextStyle : null]} >Terms and Conditions</Text>
                    
                </TouchableOpacity>
                <View
                style={{
                    borderBottomColor: '#cccccc',
                    borderBottomWidth: 1
                }}
                />
                <TouchableOpacity style={[styles.screenStyle,{alignSelf:'flex-end'}, (this.props.activeItemKey=='Order') ? styles.activeBackgroundColor : null]} onPress={async()=>{
                    await AsyncStorage.removeItem('userData');
                    this.props.navigation.navigate('firstpage')
                    }}>
                        <Image source={logout} style={{width:20,height:20,marginLeft:12}}/>
                
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Order') ? styles.selectedTextStyle : null]} >Sign Out</Text>
                    
                </TouchableOpacity>
                <View
                style={{
                    borderBottomColor: '#cccccc',
                    borderBottomWidth: 1
                }}
                />
                 {/* <TouchableOpacity style={[styles.screenStyle, (this.props.activeItemKey=='EditProfile') ? styles.activeBackgroundColor : null]} onPress={this.navigateToScreen('EditProfile')}>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='EditProfile') ? styles.selectedTextStyle : null]} >Profile</Text>
                    
                </TouchableOpacity>
                <View
                style={{
                    borderBottomColor: '#cccccc',
                    borderBottomWidth: 1
                }}
                /> */}

         
            </ScrollView>
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    headerContainer: {
        
    },
    headerText: {
        marginLeft: 5,
        marginTop: 5,
        fontWeight: 'bold'
    },
    headerText1: {
        marginLeft: 10,
        fontSize:18
    },
    screenContainer: { 
        width: '100%',
        paddingBottom: 20
    },
    screenStyle: {
        height: 50,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    screenTextStyle:{
        fontSize: 16,
        marginLeft: 20, 
        textAlign: 'center'
    },
    selectedTextStyle: {
        fontWeight: 'bold',
       // color: '#00adff'
    },
    activeBackgroundColor: {
      //  backgroundColor: '#c2bcbc',
       // alignItems: 'flex-start'
    },
    textContainer: {
        marginTop: 2,
        paddingTop: 2,
        width: '100%'
    },
    headingContainer:{
        width:'100%',
        fontSize: 20,
        paddingTop: 5,
        paddingLeft: 5,
        alignItems: 'center',
        height: 40,
        borderWidth: 1,      
    }
});

const mapStateToProps = state => {
    //console.log('Ledger',state.ledger.data);
    // const sortedActivities = state.ledger.data.sort((a, b) => b.created_at - a.created_at);
    //console.log(sortedActivities);
    return {Catories: state};
  };
  
  export default connect(
    mapStateToProps,
    {fetchuser},
  )(drawerContentComponents);
  