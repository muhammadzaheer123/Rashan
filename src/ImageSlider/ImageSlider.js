import Swiper from 'react-native-swiper';
import React from 'react';
//import styles from './styles';
import { AppRegistry, StyleSheet, Text, View, Image, Dimensions, ImageBackground } from 'react-native';
import I1 from '../Images/s1.jpeg';
import I2 from '../Images/s2.jpeg';
import I3 from '../Images/s3.jpeg';
import I4 from '../Images/v4.jpg';
import logo from '../Images/logo1.png';
import promo from '../Images/pro3.jpg';
import down from '../Images/down-button.png';
import greent from '../Images/greent3.jpg';
import Logo from '../Images/logo3.png';
import bg from '../Images/bg.jpg';
import s6 from '../Images/s6.png';
import s7 from '../Images/s7.png';

//import Swiper from 'react-native-swiper';
//import React from 'react';
//import styles from './styles';
//import {AppRegistry, StyleSheet, Text, View} from 'react-native';

//import ImageCard from '../ImageCard';
const Swipper = props => {
  const pagesCount = props.images.length;
  const pages = [...new Array(pagesCount)].reverse().map((it, index) => {
    return <Image source={{ uri: props.images[index] }} resizeMode='stretch' style={{ width: '97%', height: 170, borderRadius: 10, alignSelf: 'center', marginTop: 10 }} />
    
  });

  return (

    <Swiper
      autoplay={true}
      autoplayTimeout={4}
      loop
      key={props.images.length}
      style={{
        height: 180,
        marginLeft: 0,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
      }}

      dotColor="#808080"
      activeDotColor="#fff"
    >
      {pages}
      {/* {

         // props.images !== undefined ?
          props.images.map(i=>{
            return(
              <Image source={{uri:i}} resizeMode='stretch' style={{width:'97%',height:170,borderRadius:10,alignSelf:'center',marginTop:10}}/>
            )
          
          })
         // : null
        }
         */}


    </Swiper>
  );
};
export default Swipper;