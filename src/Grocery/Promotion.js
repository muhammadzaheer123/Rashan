// // //import React, { Component } from 'react';
// // import {
// //   ScrollView,
// //   Text,
// //   View,
// //   Button,
// //   StyleSheet,
// //   Image,
// //   TouchableOpacity,
// //   ImageBackground,
// //   Dimensions,
// // } from 'react-native';
// // import { SliderBox } from 'react-native-image-slider-box';
// // import Grocery from '../Images/v5.png';
// // import Vegi from '../Images/v7.jpg';
// // import * as React from 'react';
import List from '../Images/list.png';
import Logo from '../Images/logo3.png';
// // import { connect } from 'react-redux';
// // import { fetchcategories } from './action';

// // //import { View, StyleSheet, Dimensions } from 'react-native';
// // import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
// // import ItemsCard from '../components/ItemsCard';
// // //import Cart from '../Images/cart.png';
import Cart from '../Images/cart1.png';

// // const FirstRoute = () => (
// //   <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
// // );

// // const SecondRoute = () => (
// //   <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
// // );

// // const initialLayout = { width: Dimensions.get('window').width };


// // class Home extends React.Component {
// //   state = {
// //     index: 0,
// //     routes: [
// //       { key: 'first', title: 'Promotion' },
// //       { key: 'second', title: 'Food Items' },
// //       { key: 'third', title: 'Home Care' },
// //       { key: 'fourth', title: 'Personal Care & Beauty' },
// //     ],
// //   };

// //   componentDidMount() {
// //     this.props.fetchcategories()
// //   }

// //   render() {
// //     const renderScene = SceneMap({
// //       first: FirstRoute,
// //       second: SecondRoute,
// //     });
// //     return (
// //       <View style={{ paddingTop: 0 }}>
// //          <View style={{
// //           flexDirection: 'row', marginTop: 5, marginLeft: 5,
// //         }}>
// //           <View style={{ width: '25%', justifyContent: 'center' }}>
// //             <TouchableOpacity onPress={() => this.props.navigation.navigate(
// //               'Cart'
// //             )}>
// //               <Image source={List} style={{ width: 30, height: 30, marginLeft: 5, marginTop: 5 }} />

// //             </TouchableOpacity>
// //           </View>
// //             <View style={{width:'55%'}}>

// //             </View>

// //           <View style={{ width: '20%', alignItems: 'flex-end', justifyContent: 'center' }}>
// //             <TouchableOpacity onPress={() => this.props.navigation.navigate(
// //               'Cart'
// //             )}>
// //               <Image source={Cart} style={{ width: 30, height: 30, marginRight: 20, marginTop: 5 }} />

// //             </TouchableOpacity>
// //           </View>

// //         </View>

// //         <View style={{ width: '100%', justifyContent: 'center', flexDirection: 'row', alignItems: 'center',position:'absolute' }}>
// //             <Image source={Logo} style={{ height: 85, width: 140 }} />
// //           </View>
// //        <View style={{marginTop:50}}>
// //           <Text
// //             // eslint-disable-next-line react-native/no-inline-styles
// //             style={{
// //               color: 'green',
// //               textAlign: 'center',
// //               fontSize: 20,
// //               fontWeight: 'bold',
// //               padding: 10,
// //               marginLeft: 5,
// //               //paddingLeft:30,
// //               backgroundColor: '#fafafa'
// //             }}>
// //             Grocery
// //         </Text>
// //         </View>
// //         <TabView
// //       navigationState={{ index, routes }}
// //       renderScene={renderScene}
// //       onIndexChange={setIndex}
// //       initialLayout={initialLayout}
// //     />
// //         <ScrollView style={{ backgroundColor: 'white' }}>
// //     <ItemsCard add='Add'/>
// //     <ItemsCard add='Add'/>
// //     <ItemsCard add='Add'/>
// //     <ItemsCard add='Add'/>
// //   </ScrollView>

// //       </View>
// //     );
// //   }
// // }

// // const styles = StyleSheet.create({
// //   Logo: {
// //     width: 150,
// //     height: 150,
// //   },
// //   LogoImageContainer: {
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginTop: 20,
// //   },
// //   button: {
// //     alignItems: 'center',
// //     backgroundColor: '#F27F24',
// //     padding: 17,
// //     marginBottom: 10,
// //     borderRadius: 10,
// //   },
// //   ButtonText: {
// //     color: 'white',
// //     //fontWeight:'bold',
// //     fontSize: 18,
// //   },
// //   scene: {
// //     flex: 1,
// //   },
// //   tabbar: {
// //     backgroundColor: 'white',
// //     height: 60,
// //     marginBottom: 10
// //   },
// //   tab: {
// //     //width: 120,
// //   },
// //   indicator: {
// //     backgroundColor: 'green',
// //   },
// //   label: {
// //     fontWeight: 'bold',
// //     color: 'green'
// //   },
// // });
// // const mapStateToProps = (state) => {
// //   //console.log('Ledger',state.ledger.data);
// //   // const sortedActivities = state.ledger.data.sort((a, b) => b.created_at - a.created_at);
// //   //console.log(sortedActivities);
// //   return { Products: state.Products };
// // };

// // export default connect(mapStateToProps, { fetchcategories })(Home);


// //import React, { Component } from 'react';
// import {
//   ScrollView,
//   Text,
//   View,
//   Button,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   ImageBackground,
//   Dimensions,
// } from 'react-native';
// import { SliderBox } from 'react-native-image-slider-box';
// import Grocery from '../Images/v5.png';
// import Vegi from '../Images/v7.jpg';
// import * as React from 'react';
// //import { View, StyleSheet, Dimensions } from 'react-native';
// import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ItemsCard from '../components/ItemsCard';
// //import Cart from '../Images/cart.png';
// import Cart from '../Images/cart1.png';

// //import Logo from '../Icons/logo.png';
// const FirstRoute = () => (
//   <View style={{ backgroundColor: 'white' }}>
//     <ItemsCard add='Add'/>
//     <ItemsCard add='Add'/>
//     <ItemsCard add='Add'/>
//     <ItemsCard add='Add'/>
//   </View>
// );

// const SecondRoute = () => <View style={{ backgroundColor: '#673ab7' }} />;

// class Home extends React.Component {
//   state = {
//     index: 0,
//      routes: 
//      [
//       this.props.navigation.getParam('category') 
//           //  { key: '1', title: 'Promotion',id:1 },
//      // { key: 'jjjj', title: 'Food Items' },
//      // { key: 'jjjj', title: 'Food Items' },

//       //  { key: 'third', title: 'Home Care' },
//       //  { key: 'fourth', title: 'Personal Care & Beauty' },
//      ],
//      screen:{
//     //    "1" : FirstRoute,
//      //  "2" : FirstRoute,

//      }
//   };
//   componentDidMount() {
//     let data1 = this.props.navigation.getParam('category');
//     console.log(data1[0]);
//     let data2 = {};
//   data1.map((item, index) => {
//       //data1[index] = {key: index, item};
//       var a = 'key';
//       var b = 'title';
//       var nindex = index+1;
//       item[a] = nindex.toString();
//       item[b] = item.name;
//       data2[nindex] = FirstRoute;

//      // console.log(item);
//     });
//     console.log('11111111112222222222',data2);

//    this.setState({

//      index:0,
//     routes: data1,
//    // [
//     //  this.props
//     //  { key: '1', title: 'Promotion',id:1 },
//      //  { key: '2', title: 'Food Items' },
//      //] ,
//       screen: data2
//     })
//   }
//   renderTabBar = props => (
//     <TabBar
//       {...props}
//       scrollEnabled
//       indicatorStyle={styles.indicator}
//       style={styles.tabbar}
//       tabStyle={styles.tab}
//       labelStyle={styles.label}
//     />
//   );

//   render() {
//     console.log('roor',this.state.routes,'screene',this.state.screen,this.state.index);
//     const images = [
//       Image.resolveAssetSource(require('../Images/v1.jpg')).uri,
//       Image.resolveAssetSource(require('../Images/v2.png')).uri,
//       Image.resolveAssetSource(require('../Images/v3.jpg')).uri,
//       Image.resolveAssetSource(require('../Images/v4.jpg')).uri,
//     ];
//     let newindex= this.state.index+1;
//     return (
//       <View style={{ paddingTop: 0 }}>
//         <View style={{
//            flexDirection: 'row', marginTop: 5, marginLeft: 5,
//          }}>
//          <View style={{ width: '25%', justifyContent: 'center' }}>
//              <TouchableOpacity onPress={() => this.props.navigation.navigate(
//               'Cart'
//             )}>
//               <Image source={List} style={{ width: 30, height: 30, marginLeft: 5, marginTop: 5 }} />

//             </TouchableOpacity>
//           </View>
//             <View style={{width:'55%',borderWidth:0}}>

//             </View>

//           <View style={{ width: '20%', alignItems: 'flex-end', justifyContent: 'center' }}>
//             <TouchableOpacity onPress={() => this.props.navigation.navigate(
//               'Cart'
//             )}>
//               <Image source={Cart} style={{ width: 30, height: 30, marginRight: 20, marginTop: 5 }} />

//             </TouchableOpacity>
//           </View>
//     </View>


//         <View style={{ width: '100%', justifyContent: 'center', flexDirection: 'row', alignItems: 'center',position:'absolute' }}>
//             <Image source={Logo} style={{ height: 85, width: 140 }} />
//           </View>
//         <View style={{marginTop:50, height: Dimensions.get('window').height }}>
//           <TabView
//             renderTabBar={this.renderTabBar}
//             scrollEnabled={true}
//             // tabStyle={{width: 500}}
//             navigationState={this.state}
//             renderScene={SceneMap(
//              // this.state.screen
//               {
//               "1" : FirstRoute,
//               "2" : FirstRoute,
//         //       third: FirstRoute,
// 			  // fourth: FirstRoute,
//         //       fifth: FirstRoute,
//         //       sixth: FirstRoute,
//             }
//             )}
//             onIndexChange={index => this.setState({
//                index
//                })}
//           // initialLayout={{ width: Dimensions.get('window').width }}
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   Logo: {
//     width: 150,
//     height: 150,
//   },
//   LogoImageContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   button: {
//     alignItems: 'center',
//     backgroundColor: '#F27F24',
//     padding: 17,
//     marginBottom: 10,
//     borderRadius: 10,
//   },
//   ButtonText: {
//     color: 'white',
//     //fontWeight:'bold',
//     fontSize: 18,
//   },
//   scene: {
//     flex: 1,
//   },
//   tabbar: {
//     backgroundColor: 'white',
//     height: 60,
//     marginBottom: 10
//   },
//   tab: {
//     //width: 120,
//   },
//   indicator: {
//     backgroundColor: 'green',
//   },
//   label: {
//     fontWeight: 'bold',
//     color: 'green'
//   },
// });

// export default Home;
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from 'react-native-underline-tabbar';
import { DrawerActions } from 'react-navigation-drawer';
//import { ScrollView } from 'react-native-gesture-handler';

const Page = ({ navigation, label, products }) => (
  <View style={[styles.container, { borderWidth: 0, width: '100%' }]}>
    {
      products.map((item) => {
        //console.log(item);
        return (
          <ItemsCard img={item.image_path} userid={navigation.getParam('userid')} token={navigation.getParam('token')} id={item.id} name={item.name} description={item.description} price={item.price} add='Add' />
        )
      })
    }
  </View>
);

class example extends Component {
  render() {
    //alert(this.props.navigation.getParam('token'));
    //console.log(this.props.navigation.navigate('userid'), this.props.navigation.getParam('data'));
    return (
      <View style={[styles.container, { paddingTop: 0 }]}>
        <View style={{
          flexDirection: 'row', marginTop: 5, marginLeft: 5,
          borderWidth: 0
        }}>
          <View style={{ width: '25%', justifyContent: 'center' }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}

            >
              <Image source={List} style={{ width: 30, height: 30, marginLeft: 5, marginTop: 5 }} />

            </TouchableOpacity>
          </View>
          <View style={{ width: '55%' }}>

          </View>

          <View style={{ width: '20%', alignItems: 'flex-end', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate(
              'Cart',
              {
                token: this.props.navigation.getParam('token'),
                userid: this.props.navigation.getParam('userid')
              }
            )} style={{flexDirection:'row',marginRight:10}}>
              <Image source={Cart} style={{ width: 30, height: 30, marginTop: 5 }} />
              {
                this.props.navigation.getParam('showdot') ?
                <View style={{borderRadius:10/2,borderWidth:1,borderColor:'red',width:8,height:8,backgroundColor:'red'}}></View>
           
                : null
              }
            </TouchableOpacity>
          </View>

        </View>
        <View style={{ width: '100%', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', position: 'absolute' }}>
          <Image source={Logo} style={{ height: 85, width: 140 }} />
        </View>
        <ScrollView>
          <View style={{width:'100%',borderWidth:0,justifyContent:'center',alignItems:'center',marginTop:60}}>
          <View style={{width:'96%'}}>

            {
              this.props.navigation.getParam('data').data.map((item) => {
                //console.log(item.product.is_enabled);
                return (
                  item.product.is_enabled == 1?
                    <ItemsCard img={item.product.image_path} userid={this.props.navigation.getParam('userid')}  token={this.props.navigation.getParam('token')} id={item.product.id} quantity={item.product.quantity} name={item.product.name} discount={item.product.discount} unit={item.product.unit} promotion={item.promotion} description={item.product.description} price={item.product.price} add='Add' />
                    // <ItemsCard img={item.product.image_path} userid={this.props.navigation.getParam('userid')} token={this.props.states.auth.token.token} id={item.product.id} name={item.product.name} discount={item.product.discount} promotion={item.promotion} description={item.product.description} price={item.product.price} add='Add'/>
                    : null
                )
              })
            }
            {/* <ScrollableTabView
         //fontSize={80}
            tabBarActiveTextColor="#53ac49"
            tabBarTextStyle={{fontWeight:'bold'}}
            renderTabBar={() => <TabBar tabBarTextStyle={{fontSize:20}} underlineColor="#53ac49" />}
            //tabBarTextStyle={{fontSize:20}}
            //tabBarStyle={{fontSize:20}}
           // tabBarStyle={{ backgroundColor: "#fff", borderTopColor: '#d2d2d2', borderTopWidth: 1 }}
            
            style={{width:'100%',fontSize:30}}
            >
             
              {
                 this.props.navigation.getParam('category').map((item)=>{
                   return(
                    
                      <Page navigation={this.props.navigation} tabLabel={{label: item.name}} label={item.name} products={item.products}/> 
                     )
                 })
                     
              }
          {/* <Page tabLabel={{label: "Page #1"}} label="Page #1"/>
          <Page tabLabel={{label: "Page #2 aka Long!", badge: 3}} label="Page #2 aka Long!"/>
          <Page tabLabel={{label: "Page #3"}} label="Page #3"/>
          <Page tabLabel={{label: "Page #4 aka Page"}} label="Page #4 aka Page"/>
          <Page tabLabel={{label: "Page #5"}} label="Page #5"/> */}

          </View>
          </View>
        </ScrollView>

      </View>
    );
  }
}
export default example;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 28,
  },
});