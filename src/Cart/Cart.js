import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlightComponent,
  ImageBackground,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';
import MilkPack from '../Images/milkpack.jpg';
import Cart from '../Images/cart.png';
import Tick from '../Images/tick.png';
import ItemsCard from '../components/ItemsCard';
import Arrow from '../Images/arrowRight.png';
import Delete from '../Images/delete.png';
import { fetchcart } from './actions';
import { connect } from 'react-redux';

class Home extends Component {
  state = {
    useridcart:''
  }
  async componentDidMount() {
    //alert(this.props.states.auth.token.token);
    //console.log('incarrt',this.props.navigation.getParam('userid'));
    this.props.fetchcart(this.props.states.auth.token.token,await AsyncStorage.getItem('userid'));
    this.setState({
      useridcart: await AsyncStorage.getItem('userid')
    })
  }
  render() {
    let total = 0;
    var newtotal = 0;
    if( this.props.states.cart.data !== [] && this.props.states.cart.data.data !== undefined){
      for (let i = 0; i < this.props.states.cart.data.data.length; i++) {
        //console.log(this.props.Cart.data.data[i].product_id, this.props.id);
        //if (this.props.Cart.data.data[i].product_id == this.props.id) {
        let quantity = this.props.states.cart.data.data[i].quantity;
        let price = 0;
        if(this.props.states.cart.data.data[i].promotion){
           price = quantity * this.props.states.cart.data.data[i].product.discount;    
        }else{
           price = quantity * this.props.states.cart.data.data[i].product.price;

        }
        
        total = total+ price;
        var delivry = 0;
        newtotal = total;
       // }
      } 
      if(total < 1000){
        //total = total + 70;
        delivry = 70;
        //total = total + delivry;
        newtotal = newtotal + delivry;
      }
    }
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: '50%' }}>
            <Text
              style={{
                color: 'green',
                fontSize: 20,
                fontWeight: 'bold',
                padding: 10,
                marginLeft: 5,
                backgroundColor: 'white'
              }}> My Cart </Text>
          </View>
        </View>
        <View style={{ backgroundColor: '#e0e0e0', height: 55, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ backgroundColor: 'green', width: 15, height: 15, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={Tick} style={{ width: 8, height: 8 }} />
            </View>
            <View style={{ width: '30%', height: 0, borderWidth: 1.5, borderColor: '#9c9c9c', marginTop: 5 }} />
            <View style={{ backgroundColor: '#9c9c9c', width: 15, height: 15, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ width: 8, height: 8 }} />
            </View>
            <View style={{ width: '30%', height: 0, borderWidth: 1.5, borderColor: '#9c9c9c', marginTop: 7 }} />
            <View style={{ backgroundColor: '#9c9c9c', width: 15, height: 15, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ width: 8, height: 8 }} />
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <View style={{ width: '30%', borderRadius: 30, justifyContent: 'center', alignItems: 'center', paddingRight: 40 }}>
              <Text style={{ color: 'green' }}>1. Your Bill</Text>
            </View>
            <View style={{ width: '30%', borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'gray' }}>2. Place Order</Text>
            </View>
            <View style={{ width: '30%', borderRadius: 30, justifyContent: 'center', alignItems: 'center', paddingLeft: 20 }}>
              <Text style={{ color: 'gray' }}>3. Completed</Text>
            </View>
          </View>
        </View>
        <ScrollView>
          {
            this.props.states.cart.data !== [] && this.props.states.cart.data.data !== undefined ?
              //  alert(this.props.Cart.data.data[0])
              this.props.states.cart.data.data.map((item) => {
                return (
                   <ItemsCard img={item.product.image_path} userid={this.props.navigation.getParam('userid')} token={this.props.states.auth.token.token} id={item.product.id} name={item.product.name} discount={item.product.discount} promotion={item.promotion} quantity={item.product.quantity} description={item.product.description} unit={item.product.unit} price={item.product.price} add='Add'/>
       
                )

              })
              : <Text></Text>
          }
          {/* <ItemsCard image={Delete}/>
              <ItemsCard image={Delete}/>
              <ItemsCard image={Delete}/>
              <ItemsCard image={Delete}/> */}
          <View style={{ borderWidth: 0.5, marginTop: 20, borderColor: 'gray' }} />

          <View style={{ flexDirection: 'row', height: 50, justifyContent: 'center', alignItems: 'center', padding: 10, backgroundColor: 'white' }}>
            <Text style={{ width: '50%', color: 'gray', fontSize: 17 }}>SubTotal</Text>
  <Text style={{ width: '50%', textAlign: 'right', color: 'gray', fontSize: 17 }}>Rs. {total}</Text>
          </View>
          <View style={{ borderWidth: 0.5, borderColor: 'gray' }} />
          <View style={{ flexDirection: 'row', height: 60, justifyContent: 'center', alignItems: 'center', padding: 10, backgroundColor: 'white' }}>
            <View style={{ width: '80%', }}>
              <Text style={{ color: 'gray' }}>Delivery Charges</Text>
              <Text style={{ color: 'red' }}>FREE Delivery on Shoping of Rs.1000</Text>

            </View>
            <Text style={{ width: '20%', textAlign: 'right', color: 'gray' }}>Rs. {delivry}</Text>
          </View>
          <View style={{ borderWidth: 0.5, borderColor: 'gray' }} />
          <View style={{ flexDirection: 'row', height: 50, justifyContent: 'center', alignItems: 'center', padding: 10, backgroundColor: 'white' }}>
            <Text style={{ width: '50%', fontSize: 18 }}>Total Amount</Text>
  <Text style={{ width: '50%', textAlign: 'right', fontSize: 18 }}>Rs. {newtotal}</Text>
          </View>
          <View style={{ borderWidth: 0.5, borderColor: 'gray' }} />
          <View style={{ height: 120 }} />
        </ScrollView>

        <View style={{
          backgroundColor: '#dbdbdb',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          flexDirection: 'row',
          bottom: 0,

          width: '100%',
          height: 50,
          padding: 10,
          paddingVertical: 50
        }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('CheckOut',{
            token: this.props.states.auth.token.token,
            userid : this.state.useridcart
          })}
            style={{
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: '#ff6f00',
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.2,
              shadowRadius: 5.00,

              elevation: 5
            }}>
            <View style={{ width: '30%' }}>
              <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 16 }}>CHECKOUT</Text>
            </View>
            <View style={{ width: '40%' }}>
          <Text style={{ color: 'white', textAlign: 'right', paddingRight: 20, fontWeight: 'bold', fontSize: 16 }}>Rs.{newtotal}</Text>
            </View>
            <View style={{ width: '30%', borderLeftWidth: 0.5, height: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <Image source={Arrow} style={{ width: 25, height: 25 }} />
            </View>

          </TouchableOpacity>
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
});

const mapStateToProps = (state) => {
  //console.log('Ledger',state.ledger.data);
  // const sortedActivities = state.ledger.data.sort((a, b) => b.created_at - a.created_at);
  //console.log(sortedActivities);return { Cart: state.cart };
  return { states: state };
};

export default connect(mapStateToProps, { fetchcart })(Home);
