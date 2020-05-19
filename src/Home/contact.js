import React, {Component} from 'react';
import {ScrollView, Text, View, TouchableOpacity, Image} from 'react-native';
import Cart from '../Images/shopping-cart.png';
import List from '../Images/list.png';
import Logo from '../Images/logo3.png';
import phone from '../Images/phone.png';
import mail from '../Images/mail.png';
import {connect} from 'react-redux';

class Term extends Component {
  render() {
    var cart = this.props.Catories.cart.data;
    //var cart =  '';
    var showdot = false;
    if (cart.length !=  0){
      if (cart.data.length != 0){
        showdot = true;

      }
    }

    return (
      <View style={{padding: 0}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 5,
            marginLeft: 5,
          }}>
          <View style={{width: '25%', justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.dispatch(DrawerActions.toggleDrawer())
              }>
              <Image
                source={List}
                style={{width: 30, height: 30, marginLeft: 5, marginTop: 5}}
              />
            </TouchableOpacity>
          </View>
          <View style={{width: '55%'}} />

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
              }
              style={{flexDirection: 'row', marginRight: 10}}>
              <Image
                source={Cart}
                style={{width: 30, height: 30, marginRight: 0, marginTop: 5}}
              />
              {showdot ? (
                <View
                  style={{
                    borderRadius: 10 / 2,
                    borderWidth: 1,
                    borderColor: 'red',
                    width: 8,
                    height: 8,
                    backgroundColor: 'red',
                  }}
                />
              ) : null}
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
          <Image source={Logo} style={{height: 85, width: 140}} />
        </View>

        <View style={{borderWidth: 0, marginTop: 70}}>
          <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold',marginBottom:20}}>
           FOR CONTACT
          </Text>
          <View style={{flexDirection: 'row',padding:20}}>
          <Image source={phone} style={{height: 50, width: 50}} />
      
            <View style={{paddingHorizontal:20,justifyContent:'center'}}>
              <Text style={{fontSize:17, fontWeight:'900'}}>CALL NOW</Text>
              <Text style={{fontSize:16}}>03434663465</Text>
            </View>

        </View>
        <View style={{flexDirection: 'row',padding:20}}>
          <Image source={mail} style={{height: 50, width: 50}} />
      
            
          <View style={{paddingHorizontal:20,justifyContent:'center'}}>
              <Text style={{fontSize:17, fontWeight:'900'}}>MAILING ADDRESS</Text>
              <Text style={{fontSize:16}}>customercare@rashanapp.com</Text>
            </View>

        </View>
      </View>
      </View>
    );
  }
}
const mapStateToProps = state => {
  //console.log('Ledger',state.ledger.data);
  // const sortedActivities = state.ledger.data.sort((a, b) => b.created_at - a.created_at);
  //console.log(sortedActivities);
  return {Catories: state};
};

export default connect(
  mapStateToProps,
  null,
)(Term);
//  export default Term;
