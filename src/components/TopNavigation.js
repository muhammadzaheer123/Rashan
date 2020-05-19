//import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
  } from 'react-native';
  import { SliderBox } from 'react-native-image-slider-box';
  import Grocery from '../Images/v5.png';
  import Vegi from '../Images/v7.jpg';
  import * as React from 'react';
  //import { View, StyleSheet, Dimensions } from 'react-native';
  import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
  import ItemsCard from '../components/ItemsCard';
  //import Cart from '../Images/cart.png';
  import Cart from '../Images/cart1.png';
  
  //import Logo from '../Icons/logo.png';
  const FirstRoute = () => (
    <View style={{ backgroundColor: 'white' }}>
      <ItemsCard add='Add'/>
      <ItemsCard add='Add'/>
      <ItemsCard add='Add'/>
      <ItemsCard add='Add'/>
    </View>
  );
  
  const SecondRoute = () => <View style={{ backgroundColor: '#673ab7' }} />;
  
  class Home extends React.Component {
    state = {
      index: 0,
      routes: [
        { key: 'first', title: 'Promotion' },
        { key: 'second', title: 'Food Items' },
        { key: 'third', title: 'Home Care' },
        { key: 'fourth', title: 'Personal Care & Beauty' },
      ],
    };
  
    renderTabBar = props => (
      <TabBar
        {...props}
        scrollEnabled
        indicatorStyle={styles.indicator}
        style={styles.tabbar}
        tabStyle={styles.tab}
        labelStyle={styles.label}
      />
    );
  
    render() {
      const images = [
        Image.resolveAssetSource(require('../Images/v1.jpg')).uri,
        Image.resolveAssetSource(require('../Images/v2.png')).uri,
        Image.resolveAssetSource(require('../Images/v3.jpg')).uri,
        Image.resolveAssetSource(require('../Images/v4.jpg')).uri,
      ];
      return (
        <View style={{ paddingTop: 0 }}>
          <View style={{ height: Dimensions.get('window').height }}>
            <TabView
              renderTabBar={this.renderTabBar}
              scrollEnabled={true}
              // tabStyle={{width: 500}}
              navigationState={this.state}
              renderScene={SceneMap({
                first: FirstRoute,
                second: FirstRoute,
                third: FirstRoute,
                fourth: FirstRoute,
                fifth: FirstRoute,
                sixth: FirstRoute,
              })}
              onIndexChange={index => this.setState({ index })}
            // initialLayout={{ width: Dimensions.get('window').width }}
            />
          </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    Logo: {
      width: 150,
      height: 150,
    },
    LogoImageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#F27F24',
      padding: 17,
      marginBottom: 10,
      borderRadius: 10,
    },
    ButtonText: {
      color: 'white',
      //fontWeight:'bold',
      fontSize: 18,
    },
    scene: {
      flex: 1,
    },
    tabbar: {
      backgroundColor: 'white',
      height: 60,
      marginBottom: 10
    },
    tab: {
      //width: 120,
    },
    indicator: {
      backgroundColor: 'green',
    },
    label: {
      fontWeight: 'bold',
      color: 'green'
    },
  });
  
  export default Home;
  