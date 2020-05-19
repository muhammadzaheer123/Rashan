// import React, {Component} from 'react';
// import {Dimensions, Image, ImageBackground, StyleSheet, View, TouchableOpacity,AsyncStorage} from 'react-native';
// import {Block, Text} from 'galio-framework';
// import Iconn from 'react-native-vector-icons/dist/FontAwesome';
// import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/cartman';
// import InputFIle from './input';
// import {Actions} from 'react-native-router-flux';
// const {width, height} = Dimensions.get('screen');
// console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
// export default class Enter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoaded: false,
//     };
//   }
//   componentDidMount() {
//     this.checkTokenStatus();
//   }

//   async checkTokenStatus() {
//     let token = await AsyncStorage.getItem('userData');
//     const API = await 'http://rashanapp.com/api';

//     var headers = {
//       'Content-Type': 'application/json',
//     };
//     let currentUser = await axios.post('${API}/user',{headers:token});
//    // console.log('cujjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',currentUser);
  
//     try {
    
    
//       console.log(userData);

//       if (userData !== null) {
//         Actions.npage();
//         this.setState({isLoaded: false});
//       } else {
//         this.setState({isLoaded: true});
//       }
//     } catch (error) {
//       console.log('sign out');
//     }
//   }
//   renderInput(props) {
//     const {placeholder} = props;

//     return <InputFIle placeholder={placeholder} />;
//   }
//   render() {
//     //AsyncStorage.clear();
//     console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
//     console.disableYellowBox = true; 
//     return (
//       <Block >
//         <ImageBackground
//              resizeMode="stretch"
                    

 
//           style={{  
         
//             height: height,
//             width: width,
       
//           }}
//           source={require('../Images/sabziLogo.jpg')}>
//           <Block middle center flex>
//           <View style={{padding:10,borderWidth:3, marginLeft: 10,
//             marginTop: 100,
//             borderRadius:150,
//             overflow: 'hidden',
//             backgroundColor:'white',
//             borderColor:'#D73C2C'
//           }}>
//                 <Image
//                 style={style.image}
//                 source={require('../Images/logo3.png')}
//               />
//                 </View>
//             <AwesomeButtonRick
//             onPress={()=>{this.props.navigation.navigate('Signin')}}
//             style={{marginTop: 40}}
//               textColor="black"
//               backgroundColor="transparent"
//               backgroundDarker={null}
//               backgroundShadow={null}
//               borderColor="#F75C4C"
//               width={width * 0.7}>
//               SIGN IN
//             </AwesomeButtonRick>

//             <AwesomeButtonRick
//             onPress={()=>{this.props.navigation.navigate('Signup')}}
//               style={{marginTop: 10}}
//               textColor="white"
//               backgroundColor="#D73C2C"
//               backgroundDarker={null}
//               backgroundShadow={null}
//               borderColor="#F75C4C"
//               width={width * 0.7}
//               borderWidth={1}>
//               SIGN UP
//             </AwesomeButtonRick>

//             <Block middle center style={{flexDirection: 'row', marginTop: 50}}>
//               <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Main')}}
//              style={{flexDirection:'row'}}>
//               <Text style={{fontWeight:'bold'}} color="green">Skip and Start Shopping</Text>
//               <Iconn style={style.icon} size={10} color="#deb754" name="arrow-right" />
//               </TouchableOpacity>
//             </Block>
//           </Block>
//         </ImageBackground>
//       </Block>
//     );
//   }
// }
// const style = StyleSheet.create({
//   image: {
//     width: 150,
//     height: 150,
//    // borderRadius: 150,
//     overflow: 'hidden',
//     //borderWidth: 3,
//     //borderColor: '#D73C2C',
//    // marginLeft: 10,
//     //marginTop: 100,
//   },
//   icon: {
//     marginLeft: 5,
//     marginTop: 5,
//   },
// });
import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  AsyncStorage,
  View,
  TouchableOpacity
} from 'react-native';
import {Block, Text} from 'galio-framework';
import Iconn from 'react-native-vector-icons/dist/FontAwesome';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/cartman';
import InputFIle from './input';
import {Actions} from 'react-native-router-flux';
const {width, height} = Dimensions.get('screen');
import Spinner from './Spinner';
import axios from 'axios';
import {connect} from 'react-redux';
//import {compose} from 'redux';

import {tokenStatus} from "./redux/actions/index";
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
class Enter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }
  componentDidMount() {
    this.checkTokenStatus();
  }

  async checkTokenStatus() {
    //alert(await AsyncStorage.getItem('userData'));
    let token = await AsyncStorage.getItem('userData');
    //const API = await 'http://rashanapp.com/api';

  //   var headers = {
  //     'Content-Type': 'application/json',
  //   };
  //   let currentUser = await axios.post('${API}/user',{headers:token});
  //  // console.log('cujjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',currentUser);
  
    try {
    
    
      //console.log(userData);
      //alert('ok')
      if (await AsyncStorage.getItem('userData') !== null) {
        //alert(await AsyncStorage.getItem('userData'))
        this.props.tokenStatus(await AsyncStorage.getItem('userData'));
        this.props.navigation.navigate('Main');
        this.setState({isLoaded: false});
      } else {
        this.setState({isLoaded: true});
      }
    } catch (error) {
      //alert(error)
      console.log('sign out');
    }
  }

  renderInput(props) {
    const {placeholder} = props;

    return <InputFIle placeholder={placeholder} />;
  }
  render() {
    console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
    console.disableYellowBox = true;
    return (
      <Block >
         <ImageBackground
             resizeMode="stretch"
                    

 
          style={{  
         
            height: height,
            width: width,
       
          }}
          source={require('../Images/sabziLogo.jpg')}>
          <Block middle center flex>
          <View style={{padding:10,borderWidth:3, marginLeft: 10,
            marginTop: 100,
            borderRadius:150,
            overflow: 'hidden',
            backgroundColor:'white',
            borderColor:'#D73C2C'
          }}>
                <Image
                style={style.image}
                source={require('../Images/logo3.png')}
              />
                </View>
            <AwesomeButtonRick
            onPress={()=>{this.props.navigation.navigate('Signin')}}
            style={{marginTop: 40}}
              textColor="black"
              backgroundColor="transparent"
              backgroundDarker={null}
              backgroundShadow={null}
              borderColor="#F75C4C"
              width={width * 0.7}>
              SIGN IN
            </AwesomeButtonRick>

            <AwesomeButtonRick
            onPress={()=>{this.props.navigation.navigate('Signup')}}
              style={{marginTop: 10}}
              textColor="white"
              backgroundColor="#D73C2C"
              backgroundDarker={null}
              backgroundShadow={null}
              borderColor="#F75C4C"
              width={width * 0.7}
              borderWidth={1}>
              SIGN UP
            </AwesomeButtonRick>

            <Block middle center style={{flexDirection: 'row', marginTop: 50}}>
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Main')}}
             style={{flexDirection:'row'}}>
              <Text style={{fontWeight:'bold'}} color="green">Skip and Start Shopping</Text>
              <Iconn style={style.icon} size={10} color="#deb754" name="arrow-right" />
              </TouchableOpacity>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
    );
  }
}
const style = StyleSheet.create({
  image: {
        width: 150,
        height: 150,
       // borderRadius: 150,
        overflow: 'hidden',
        //borderWidth: 3,
        //borderColor: '#D73C2C',
       // marginLeft: 10,
        //marginTop: 100,
      },
      icon: {
        marginLeft: 5,
        marginTop: 5,
      },
});
export default connect(
  null,
  {tokenStatus},
)(Enter);
