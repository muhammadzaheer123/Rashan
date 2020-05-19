import React, {Component} from 'react';
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
import {SliderBox} from 'react-native-image-slider-box';
import Grocery from '../Images/g1.jpg';
import Vegi from '../Images/v7.jpg';
import meat from '../Images/meat.jpg';
import greent from '../Images/greent3.jpg';
import Logo from '../Images/logo2.png';
import bg from '../Images/bg.jpg';
import ImageSlider from '../ImageSlider/ImageSlider';
import Cart from '../Images/cart.png';
import List from '../Images/list.png';
import down from '../Images/down-button.png';

class Home extends Component {
  render() {
    const images = [
      Image.resolveAssetSource(require('../Images/v1.jpg')).uri,
      Image.resolveAssetSource(require('../Images/v2.png')).uri,
      Image.resolveAssetSource(require('../Images/v3.jpg')).uri,
      Image.resolveAssetSource(require('../Images/v4.jpg')).uri,
    ];
    console.log('hhhhhhhh', this.props.userid);
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('Grocery', {
            category: this.props.cate,
            token: this.props.token,
            userid: this.props.userid,
            showdot: this.props.showdot,
            discount: this.props.discount,
            index: this.props.index
          })
        }
        style={{
          width: '33.33%',
          backgroundColor: 'white',
          padding: 15,
          //justifyContent: 'center',
          //alignItems: 'center',
          borderRightWidth: 1,
          borderBottomWidth: 1,
          borderColor: '#cacaca',
          //backgroundColor:'#fafafa'
          
        }}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              borderWidth: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <View style={{borderWidth:1,borderColor:'#bababa',marginBottom:10}}>
              <Image
              source={{
                uri: 'http://rashanapp.com/images/subs/' + this.props.img,
              }}
              style={{
                width: 70,
                height: 70,
                resizeMode: 'stretch',
                
              
              }}
            />
              </View>
            
            <Text
              style={{
                color: 'gray',
                borderWidth: 0,
                width: 80,
                fontSize: 13,
                textAlign: 'center',
                borderWidth: 0,
              }}>
              {this.props.title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  Logo: {
    width: 150,
    height: 150,
  },
  LogoImageContainer: {
    width: '78%',
    //height:150,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 0,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 22,
    backgroundColor: '#fafafa',
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
});

export default Home;
