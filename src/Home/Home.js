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
  Alert
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
import mg from '../Images/magnifying-glass.png';
import CategoryCard from '../components/CategoriesCard';
import Subcat from '../components/SubCategoriesCart';
import { DrawerActions } from 'react-navigation-drawer';
import { fetchcategories, getnewid, fetchpromotion, fetchuser, fetchbanner } from './action';
import { fetchcart } from '../Cart/actions';
import { NavigationEvents } from 'react-navigation';
import { Actions } from 'react-native-router-flux';
import { createNativeWrapper } from 'react-native-gesture-handler';
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
  };
  async componentDidMount() {
    //AsyncStorage.setItem("myKey", "My value here");
    this.props.fetchcategories();
    this.props.fetchpromotion();
    this.props.fetchbanner();
    this.props.fetchcart(this.props.Catories.auth.token.token,await AsyncStorage.getItem('userid'));
    
    if(this.props.Catories.auth.token !== ''){
      this.props.fetchuser(this.props.Catories.auth.token.token);
    
    }
    //AsyncStorage.clear();
   // console.log('tokkjhhhhhh', this.props.Catories.auth.token);
    // if(this.props.Catories.auth.token==''){
    //   alert('no token');
    //   await this.props.getnewid();
    // }
    // console.log('useriddddd',this.props.Catories.Home.userid.user_id);
    //AsyncStorage.clear();
    if (this.props.Catories.auth.token == '') {
      const a = AsyncStorage.getItem('userid');
      console.log('userrrrrr', await AsyncStorage.getItem('userid'));
      if (await AsyncStorage.getItem('userid') == null) {
        //alert(await AsyncStorage.getItem('userid'));
        await this.props.getnewid();
        //var abc = this.props.Catories.Home.userid;
        //AsyncStorage.setItem('userid', abc);

      }


    }
    //console.log('jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',await AsyncStorage.getItem('userData'));
    if (await AsyncStorage.getItem('userid') == null && this.props.Catories.auth.token.token !== undefined) {
      this.setState({
        token: await AsyncStorage.getItem('userData'),
        userid: this.props.Catories.Home.userid.user_id,
      });

    } else {
      this.setState({
        token: await AsyncStorage.getItem('userData'),
        userid: await AsyncStorage.getItem('userid'),
      });

    }


  }
  // async componentWillMount(){
  //   this.setState({
  //     //token: this.props.Catories.auth.token.token,
  //     userid: this.props.Catories.Home.userid.user_id,
  //   });

  // }
  //   _storeData = async () => {
  //     try {
  //         await AsyncStorage.setItem('name', 'John');
  //     } catch (error) {
  //         // Error saving data
  //     }
  // }
  // fetch the data back asyncronously
  // _retrieveData = async () => {
  //   try {
  //       const value = await AsyncStorage.getItem('name');
  //       if (value !== null) {
  //           // Our data is fetched successfully
  //           console.log(value);
  //       }
  //   } catch (error) {
  //       // Error retrieving data
  //   }
  // }
  _onBlurr = () => {
    //alert('blur');
    BackHandler.removeEventListener('hardwareBackPress',
      this._handleBackButtonClick);
  }

  _onFocus = () => {
    //alert('blur');
    BackHandler.addEventListener('hardwareBackPress',
      this._handleBackButtonClick);
  }

  _handleBackButtonClick = async () => {
    Alert.alert(
      'Sign out',
      'Do you want to Exit?',
      [

        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK', onPress: async () => {
            // try {
            //   await AsyncStorage.removeItem('userData');
            // } catch (error) {
            //   console.log('something');
            // }
            // this.props.navigation.navigate('firstpage');
            BackHandler.exitApp();
          }
        },
      ],
      { cancelable: false },
    );
    return true;
  }
  toggleSelected(id, key) {
    console.log(this.state);
    let temp = this.state.item[key];
    temp.selected = !temp.selected;
    this.setState({
      item: {
        [key]: temp,
      },
    });
  }

  // parentMethod(data) {

  // }

  render() {
    //alert(this.state.token);
    //console.log('hoem', this.state.userid);
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

        <NavigationEvents
          onWillFocus={this._onFocus}
          onWillBlur={this._onBlurr}
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: 5,
            marginLeft: 5,
          }}>
          <View style={{ width: '25%', justifyContent: 'center' }}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.dispatch(DrawerActions.toggleDrawer())
              }
            >
              <Image
                source={List}
                style={{ width: 30, height: 30, marginLeft: 5, marginTop: 5 }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ width: '55%' }} />

          <View
            style={{
              width: '20%',
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

        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
          }}>
          <Image source={Logo} style={{ height: 85, width: 140 }} />
        </View>
        <ScrollView style={{ height: '100%', marginTop: 50 }}>

          <View
            style={{
              paddingBottom: 10,
              paddingTop: 10,
              height: '100%',

            }}>
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Search', {
                  token: mytoken,
                  userid: mystate,
                })}} style={{width:'100%',padding:10}}>
                <View style={{borderWidth:1,padding:10,borderRadius:5,borderColor:'gray',flexDirection:'row',alignItems:'center'}}>
                  <Image source={mg} style={{width:20,height:20,resizeMode:'contain',marginRight:10}}/>
                  <Text style={{color:'gray'}}>Search</Text>
                </View>
              </TouchableOpacity>
            {
              this.props.Catories.Home.loading ?

                <View style={{ borderWidth: 0 }}>

                  <ActivityIndicator size="small" color="#00ff00" />

                </View>
                : null
            }
            <View style={{marginVertical:5}}>
            <ImageSlider images={this.props.Catories.Home.banner}/>
            {/* <SliderBox images={this.props.Catories.Home.banner} sliderBoxHeight={300} flex={1} resizeMethod='contain'
  resizeMode={'contain'}/> */}
            </View>
            
            {this.props.Catories.Home.promotion.length !== 0 ? (
              <View style={{ backgroundColor: '#cacaca' }}>
                <View style={{ padding: 10, backgroundColor: 'white', marginTop: 10, justifyContent: 'center' }}>
                  <TouchableOpacity onPress={this.props.Catories.Home.promotion ? () =>
                    this.props.navigation.navigate('Promotion', {
                      data: this.props.Catories.Home.promotion,
                      token: mytoken,
                      userid: mystate,
                      showdot: showdot,
                    }) : null
                  }>
                    <View style={{ flexDirection: 'row', height: 90, justifyContent: 'center', alignItems: 'center' }}>
                      <View style={{ width: '35%', borderWidth: 0, justifyContent: 'center', height: 20 }}>
                        <Image source={promo} style={{ width: '100%', height: '350%', resizeMode: 'stretch' }} />
                      </View>
                      <View style={{ width: '61%', height: '100%', borderWidth: 0, justifyContent: 'center', paddingLeft: 10 }}>
                        <Text style={{ fontSize: 20, marginBottom: 5 }}>Promotion</Text>
                        <Text style={{ color: 'gray' }}></Text>
                      </View>
                      <View style={{ width: '4%', borderWidth: 0, borderWidth: 0, justifyContent: 'center', height: 20 }}>
                        <Image source={down} style={{ width: '100%', height: '90%', resizeMode: 'contain' }} />

                      </View>
                    </View>

                  </TouchableOpacity>
                </View>


              </View>


            ) : null
              //  })
            }
            {this.props.Catories.Home.data.length !== 0 ? (
              <View style={{ backgroundColor: '#cacaca' }}>
                {
                  this.props.Catories.Home.data.data.map(item => {
                    return (
                      item.is_enabled == 1 &&
                      <CategoryCard
                        token={mytoken}
                        userid={mystate}
                        img={item.image_path}
                        subcat={item.subs}
                        categoryName={item.name}
                        //details="Fruits, Vegetables, Potato, Tomato"
                        navigation={this.props.navigation}
                        showdot={showdot}
                        //parentReference = {this.parentMethod.bind(this)}
                      />
                    )                 
                  })
                }
              </View>


            ) : (
                <View style={{ borderWidth: 0, backgroundColor: 'white' }}>
                  {/* <ActivityIndicator style={{backgroundColor:'white'}} size="small" color="#00ff00" /> */}

                </View>
              )
              //  })
            }
            {/* <CategoryCard img={promo} categoryName='Promotion' details='' navigation={this.props.navigation}/>



         <CategoryCard img={Vegi} categoryName='Vegetables' details='Fruits, Vegetables, Potato, Tomato' navigation={this.props.navigation}/>
         <CategoryCard img={meat} categoryName='Fresh Meat' details='Mutton, Beef, Chicken, Fish'/>
         <CategoryCard img={s7} categoryName='Personal Care' details='Shampoo, Conditioner, Lotion, Gel'/>
         <CategoryCard img={s6} categoryName='Home Care' details='Cleaners, Detergents, Tissue'/>
           */}
          </View>
        </ScrollView>
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
  { fetchcategories, getnewid, fetchpromotion, fetchuser , fetchcart, fetchbanner},
)(Home);
