import React, { Component } from 'react';
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
  AsyncStorage
} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import Grocery from '../Images/g1.jpg';
import Vegi from '../Images/v7.jpg';
import meat from '../Images/meat.jpg';
import greent from '../Images/greent3.jpg';
import Logo from '../Images/logo2.png';
import bg from '../Images/bg.jpg';
import ImageSlider from '../ImageSlider/ImageSlider';
import Cart from '../Images/cart.png';
import List from '../Images/list.png';
import promo from '../Images/pro3.jpg';
import down from '../Images/down-button.png';
import Subcat from './SubCategoriesCart';
class Home extends Component {
  state = { loading: false, enabled: true, phoneN: '', check: false,selected: false,bg:'white'}
  async componentDidMount(){
    console.log('iiiiddddddddddd',this.props.userid);
  }
   toggleSelected(){
     let color = 'white';
     if(this.state.bg == 'white'){
        color = '#fff8ac'
     }else{
      color = 'white'
     }

    this.setState({
      selected : !this.state.selected,
      bg: color
    })
  }

  render() {
    //alert(this.props.token);
   //console.log('incategory',this.props.userid);
    const images = [
      Image.resolveAssetSource(require('../Images/pro3.jpg')).uri,
      Image.resolveAssetSource(require('../Images/v1.jpg')).uri,
      Image.resolveAssetSource(require('../Images/v2.png')).uri,
      Image.resolveAssetSource(require('../Images/v3.jpg')).uri,
      Image.resolveAssetSource(require('../Images/v4.jpg')).uri,

    ];
    return (
          <View style={{padding:10,backgroundColor:this.state.bg,marginTop:10,justifyContent:'center'}}>
             <TouchableOpacity onPress={()=>this.toggleSelected()}  >
            <View style={{flexDirection:'row',height:90,justifyContent:'center',alignItems:'center'}}>
              <View style={{width:'35%',borderWidth:0,justifyContent:'center',height:20}}>
                {
                  this.props.categoryName == 'Promotion' ?
                    <Image source={promo} style={{width:'100%',height:100,resizeMode:'contain'}}/>
                  :  <Image source={{uri:'http://rashanapp.com/images/categories/'+this.props.img}} style={{width:'100%',height:100,resizeMode:'contain'}}/>
               
                }
              </View>
              <View style={{width:'61%',height:'100%',borderWidth:0,justifyContent:'center',paddingLeft:10}}>
                  <Text style={{fontSize:20,marginBottom:5}}>{this.props.categoryName}</Text>
                  <Text style={{color:'gray'}}>{this.props.details}</Text>
              </View>
              <View style={{width:'4%',borderWidth:0,borderWidth:0,justifyContent:'center',height:20}}>
              <Image source={down} style={{width:'100%',height:'90%',resizeMode:'contain'}}/>
                
              </View>
            </View>
            {
           this.state.selected ?
           <View style={{backgroundColor:'#fff8ac',marginBottom:0,marginTop:20}}>
           <View style={{margin:10,borderWidth:1,flexDirection:'row',flexWrap:'wrap',padding:0,borderColor:'#cacaca'}}>
           {
           this.props.subcat.map((item,index)=>{
             //console.log('sub',item.is_enabled);
             
             return(
              item.is_enabled ==1 ?
             <Subcat img={item.image_path} index={index} discount={item.discount} showdot={this.props.showdot} userid={this.props.userid} token={this.props.token} navigation={this.props.navigation} product={item.products} cate={this.props.subcat} cardimage={Vegi} title={item.name} navigation={this.props.navigation}/>
             : null
             )
             
           })
           }
           {/* <Subcat cardimage={Vegi} title='Oil & Ghee'/>
           <Subcat cardimage={Vegi} title='Oil & Ghee'/>
           <Subcat cardimage={Vegi} title='Oil & Ghee'/>
           <Subcat cardimage={Vegi} title='Oil & Ghee'/>
           <Subcat cardimage={Vegi} title='Oil & Ghee'/> */}
           </View>
           
          </View>
 
           :null
         }
          </TouchableOpacity>
          </View>
      )
  }
}

const styles = StyleSheet.create({
  Logo: {
    width: 150,
    height: 150
  },
  LogoImageContainer: {
    width: '78%',
    //height:150,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 0,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 22,
    backgroundColor: '#fafafa'
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
    fontSize: 18
  }
})

export default Home;