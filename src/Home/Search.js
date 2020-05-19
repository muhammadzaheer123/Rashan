/* eslint-disable eqeqeq */
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
  AsyncStorage,
  ActivityIndicator,
  BackHandler,
  Alert,
  TextInput,
  FlatList
} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import Grocery from '../Images/s2.jpeg';
import Vegi from '../Images/s3.jpeg';
import meat from '../Images/meat.jpg';
import promo from '../Images/pro3.jpg';
import down from '../Images/down-button.png';
import greent from '../Images/greent3.jpg';
import Logo from '../Images/logo3.png';
import bg from '../Images/bg.jpg';
import s6 from '../Images/s6.png';
import s7 from '../Images/s7.png';
import { connect } from 'react-redux';
import ImageSlider from '../ImageSlider/ImageSlider';
import Cart from '../Images/shopping-cart.png';
import List from '../Images/list.png';
import CategoryCard from '../components/CategoriesCard';
import Subcat from '../components/SubCategoriesCart';
import { DrawerActions } from 'react-navigation-drawer';
import { fetchcategories, getnewid, fetchpromotion, fetchuser } from './action';
import { fetchcart } from '../Cart/actions';
import mg from '../Images/magnifying-glass.png';
import { NavigationEvents } from 'react-navigation';
import { Actions } from 'react-native-router-flux';
import SearchInput, {createFilter} from 'react-native-search-filter';
import { createNativeWrapper } from 'react-native-gesture-handler';
import ItemsCard from '../components/ItemsCard';
const KEYS_TO_FILTERS = ['name'];
class Home extends Component {
  state = {
    loading: false,
    userid: '',
    enabled: true,
    phoneN: '',
    check: false,
    item: {
      Grocery: {
        id: 1,
        selected: false,
      },
    },
    token: '',
    searchTerm: 'aaaaaaaaaaaaaaaaaaaaaaaa',
  };
  async componentDidMount() {
    }

    onChangeText = term => {
      this.setState({
        searchTerm: term,
        //data: []
      });
    };
  
  render() {
    //alert(this.state.token);
    //console.log('hoem', this.state.userid);
    var filteredEmails = this.props.Catories.Home.searchdata;

    if (this.props.Catories.Home.searchdata !== undefined) {
      filteredEmails = this.props.Catories.Home.searchdata.filter(
        createFilter(this.state.searchTerm, KEYS_TO_FILTERS),
      );

    //console.log('seacrchhhhhhhhhhhhhhhh',filteredEmails);
     }


    var cart =  this.props.Catories.cart.data;
    var showdot = false;
    if(cart.length !=  0){
      if(cart.data.length != 0){
        showdot = true;
   
      }
    }
    //alert(this.props.Catories.cart.data.length);
    var mystate = '';
    var mytoken = '';
    if (this.state.userid == undefined || this.state.userid == null) {
      mystate = this.props.Catories.Home.userid.user_id;
      //alert('abc');
    } else {
      mystate = this.state.userid;
      //alert('def');
    }

    if (mytoken == undefined) {
      mytoken = this.props.Catories.auth.token.token;
    } else {
      mytoken = this.props.Catories.auth.token.token;
    }
    const images = [
      Image.resolveAssetSource(require('../Images/v1.jpg')).uri,
      Image.resolveAssetSource(require('../Images/v2.png')).uri,
      Image.resolveAssetSource(require('../Images/v3.jpg')).uri,
      Image.resolveAssetSource(require('../Images/v4.jpg')).uri,
    ];
    // this._storeData();
    // this._retrieveData();
    return (
      <View
        style={{
          //alignItems: 'center',
          width: '100%',
          //resizeMode: 'contain',
          height: '100%',
        }}>
          <View
          style={{
            flexDirection: 'row',
            marginTop: 5,
            marginLeft: 5,
          }}>
          <View style={{ width: '12%', justifyContent: 'center' }}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.dispatch(DrawerActions.toggleDrawer())
              }
            //   'Cart',
            //   {
            //     token: this.state.token
            //   }
            // )
            // }
            >
              <Image
                source={List}
                style={{ width: 30, height: 30, marginLeft: 5, marginTop: 5 }}
              />
            </TouchableOpacity>
          </View>
          <View style={{width:'76%',padding:10}}>
                <View style={{borderWidth:1,padding:0,paddingLeft:10,borderRadius:5,borderColor:'gray',flexDirection:'row',alignItems:'center'}}>
                  <Image source={mg} style={{width:20,height:20,resizeMode:'contain',marginRight:10}}/>
                  <TextInput onChangeText={term => this.onChangeText(term)} placeholder='Search' style={{width:'100%'}}/>
                </View>
              </View>
        
          <View
            style={{
              width: '12%',
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Cart', {
                  token: mytoken,
                  userid: mystate,
                })
              } style={{flexDirection:'row',marginRight:10}}>
              <Image
                source={Cart}
                style={{ width: 30, height: 30, marginRight: 0, marginTop: 5 }}
              />
              {
                showdot ? 
                <View style={{borderRadius:10/2,borderWidth:1,borderColor:'red',width:8,height:8,backgroundColor:'red'}}></View>
           
                : null
              }
            </TouchableOpacity>
          </View>
        </View>

              
              <FlatList
        data={filteredEmails}
        renderItem={({ item }) => (
          item.is_enabled == 1 ?
          <ItemsCard img={item.image_path} discount={item.discount} userid={this.props.navigation.getParam('userid')} token={this.props.navigation.getParam('token')} id={item.id} name={item.name} quantity={item.quantity} description={item.description} price={item.price} unit={item.unit} promotion={item.promotion} add='Add'/>
      //<ItemsCard img={item.image_path} userid={this.props.navigation.getParam('userid')} token={this.props.states.auth.token.token} id={item.product.id} name={item.product.name} discount={item.product.discount} promotion={item.promotion} description={item.product.description} unit={item.product.unit} price={item.product.price} add='Add'/>
      : null
        )}
        keyExtractor={item => item.id}
        //extraData={selected}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Logo: {
    width: 100,
    height: 100,
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

const mapStateToProps = state => {
  //console.log('Ledger',state.ledger.data);
  // const sortedActivities = state.ledger.data.sort((a, b) => b.created_at - a.created_at);
  //console.log(sortedActivities);
  return { Catories: state };
};

export default connect(
  mapStateToProps,
  { fetchcategories, getnewid, fetchpromotion, fetchuser , fetchcart},
)(Home);
