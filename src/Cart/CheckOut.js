/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
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
  TextInput,
  Picker,
  ToastAndroid
} from 'react-native';
import moment from 'moment';
import MilkPack from '../Images/milkpack.jpg';
import Cart from '../Images/cart.png';
import Tick from '../Images/tick.png';
import ItemsCard from '../components/ItemsCard';
import Arrow from '../Images/arrowRight.png';
import RNPickerSelect from 'react-native-picker-select';
import Modal, {SlideAnimation, ModalContent} from 'react-native-modals';
import {placeorder} from '../Order/actions';
import { connect } from 'react-redux';
let c= 0;
class Home extends Component {
  state = {
    visible: false,
    deliveryday: 'Today',
    deliverytime: '08:00 - 11:00 AM',
    deliverytime1: '08:00 - 11:00 AM',
    showdeliverytime1: true,
    deliverytime2: '11:00 - 2:00 PM',
    showdeliverytime2: true,
    deliverytime3: '02:00 - 5:00 PM',
    showdeliverytime3: true,
    deliverytime4: '05:00 - 8:00 PM',
    showdeliverytime4: true,
    showtoday: true,
    notes: '',
    address: '',
    phonenumber: '',
  };
  componentDidMount() {
    //alert();
    //alert(this.props.navigation.getParam('userid'));
    let a = moment()
      .format()
      .split('T')[1];
    let b = a.split('+')[0];
     c = b.split(':')[0];
    let d = moment().format('dddd');
    console.log(
      d,
      moment()
        .add(1, 'days')
        .calendar(),
      moment()
        .add(2, 'days')
        .calendar(),
      moment()
        .add(3, 'days')
        .calendar(),
        c
    );
    //c=18;
    //alert(c);
    if (c >= 20) {
      //alert(yes);
      this.setState({deliveryday: 'Tomorrow', showtoday: false,showdeliverytime3: true,
      showdeliverytime2: true,
      showdeliverytime1: true,});
    } else if (c >= 17 && this.state.deliveryday == 'Today') {
      //alert('hh');
      this.setState({
        deliveryday: 'Today',
        showdeliverytime3: false,
        showdeliverytime2: false,
        showdeliverytime1: false,
      });
    } else if (c >= 14 && this.state.deliveryday == 'Today') {
      this.setState({
        deliveryday: 'Today',
        //showdeliverytime3: false,
        showdeliverytime2: false,
        showdeliverytime1: false,
      });
    }
    else if (c >= 11 && this.state.deliveryday == 'Today') {
      this.setState({deliveryday: 'Today', showdeliverytime1: false});
    }
  }
  changeDay = (itemValue) => {
    //console.log(itemValue);
    if(itemValue == 'Today'){
     
      if (c >= 20) {
        this.setState({deliveryday: 'Tomorrow', showtoday: false,showdeliverytime3: true,
        showdeliverytime2: true,
        showdeliverytime1: true,});
      } else if (c >= 17) {
        this.setState({
          deliveryday: 'Today',
          showdeliverytime3: false,
          showdeliverytime2: false,
          showdeliverytime1: false,
        });
      } else if (c >= 14) {
        this.setState({
          deliveryday: 'Today',
          //showdeliverytime3: false,
          showdeliverytime2: false,
          showdeliverytime1: false,
        });
      }
      else if (c >= 11) {
        this.setState({deliveryday: 'Today', showdeliverytime1: false});
      }
    }
    else{
      this.setState({
        deliveryday: itemValue,
        showdeliverytime1: true,
        showdeliverytime2: true,
        showdeliverytime3: true,
        showdeliverytime4: true,
      })
    }
    }
    myfun = (token,deliveryday,deliverytime,notes,navigation, userid, address, phonenumber) => {
      //console.log('tojjjjjjj',token);
      if(notes == ''){
        ToastAndroid.show('Please enter some Information !', ToastAndroid.SHORT);
      }else if(address == '' && token == undefined){
        ToastAndroid.show('Please enter your Address !', ToastAndroid.SHORT);
      }else if( phonenumber =='' && token == undefined){
        ToastAndroid.show('Please enter Phone Number !', ToastAndroid.SHORT);
      }else{
        this.props.placeorder(token,deliveryday,deliverytime,notes,navigation, userid, address, phonenumber);
        this.setState({
          visible: false,
          deliveryday: 'Today',
          deliverytime: '08:00 - 11:00 AM',
          deliverytime1: '08:00 - 11:00 AM',
          showdeliverytime1: true,
          deliverytime2: '11:00 - 2:00 PM',
          showdeliverytime2: true,
          deliverytime3: '02:00 - 5:00 PM',
          showdeliverytime3: true,
          deliverytime4: '05:00 - 8:00 PM',
          showdeliverytime4: true,
          showtoday: true,
          notes: '',
          address: '',
          phonenumber: '',
        })
      }
    }
 
  render() {
    //console.log(this.state)
    return (
      <View style={{flex: 1,paddingBottom:100}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '50%'}}>
            <Text
              style={{
                color: 'green',
                fontSize: 20,
                fontWeight: 'bold',
                padding: 10,
                marginLeft: 5,
                backgroundColor: 'white',
              }}>
              {' '}
              Checkout{' '}
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#e0e0e0',
            height: 55,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                backgroundColor: 'green',
                width: 15,
                height: 15,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={Tick} style={{width: 8, height: 8}} />
            </View>
            <View
              style={{
                width: '30%',
                height: 0,
                borderWidth: 1.5,
                borderColor: 'green',
                marginTop: 5,
              }}
            />
            <View
              style={{
                backgroundColor: 'green',
                width: 15,
                height: 15,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={Tick} style={{width: 8, height: 8}} />
            </View>
            <View
              style={{
                width: '30%',
                height: 0,
                borderWidth: 1.5,
                borderColor: '#9c9c9c',
                marginTop: 7,
              }}
            />
            <View
              style={{
                backgroundColor: '#9c9c9c',
                width: 15,
                height: 15,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image style={{width: 8, height: 8}} />
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <View
              style={{
                width: '30%',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 40,
              }}>
              <Text style={{color: 'green'}}>1. Your Bill</Text>
            </View>
            <View
              style={{
                width: '30%',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'green'}}>2. Place Order</Text>
            </View>
            <View
              style={{
                width: '30%',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: 20,
              }}>
              <Text style={{color: 'gray'}}>3. Completed</Text>
            </View>
          </View>
        </View>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              height: 50,
              marginTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
              backgroundColor: 'white',
            }}>
            <Text style={{width: '50%', fontSize: 17}}>Delivery Day</Text>
            <View style={{width: '50%'}}>
              <Picker
                selectedValue={this.state.deliveryday}
                style={{height: 50, width: '100%'}}
                onValueChange={(itemValue, itemIndex) =>
                  //this.setState({deliveryday: itemValue})
                  this.changeDay(itemValue)
                }>
                <Picker.Item label="Today" value="Today" />
                <Picker.Item label="Tomorrow" value="Tomorrow" />
                <Picker.Item label={moment().add(2, 'days').calendar().split(' ')[0]} value={moment().add(2, 'days').calendar().split(' ')[0]} />
                <Picker.Item label={moment().add(3, 'days').calendar().split(' ')[0]} value={moment().add(3, 'days').calendar().split(' ')[0]} />
                <Picker.Item label={moment().add(4, 'days').calendar().split(' ')[0]} value={moment().add(4, 'days').calendar().split(' ')[0]} />
                <Picker.Item label={moment().add(5, 'days').calendar().split(' ')[0]} value={moment().add(5, 'days').calendar().split(' ')[0]} />
                <Picker.Item label={moment().add(6, 'days').calendar().split(' ')[0]} value={moment().add(6, 'days').calendar().split(' ')[0]} />
                  
              </Picker>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 0,
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
              backgroundColor: 'white',
            }}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{width: '40%'}}>
                <Text style={{fontSize: 17}}>Delivery Window</Text>
              </View>

              <View style={{width: '60%'}}>
                <Picker
                  selectedValue={this.state.deliverytime}
                  style={{height: 50, width: '100%'}}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({deliverytime: itemValue})
                  }>
                  {this.state.showdeliverytime1 ? (
                    <Picker.Item
                      label="08:00 - 11:00 AM"
                      value="08:00 - 11:00 AM"
                    />
                  ) : null}
                  {this.state.showdeliverytime2
                    ? ((
                        <Picker.Item
                          label="11:00 - 02:00 PM"
                          value="11:00 - 02:00 PM"
                        />
                      ): null)
                    : null}
                    {this.state.showdeliverytime3
                    ? (
                        <Picker.Item
                          label="02:00 - 05:00 PM"
                          value="02:00 - 05:00 PM"
                        />
                      )
                    : null}
                  {this.state.showdeliverytime4  ? (
                    <Picker.Item
                      label="05:00 - 08:00 PM"
                      value="05:00 - 08:00 PM"
                    />
                  ) : null}
                </Picker>
              </View>
            </View>
          </View>
          <View style={{borderWidth: 0.5, borderColor: 'gray'}} />
          <View
            style={{
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
              backgroundColor: 'white',
            }}>
            <Text style={{width: '100%', fontSize: 18}}>Instructions</Text>
            <TextInput
              value={this.state.notes}
              onChangeText={value => {
                this.setState({notes: value});
              }}
              placeholder="Note for delivery team"
              style={{
                width: '100%',
                fontSize: 15,
                borderBottomColor: 'orange',
                borderBottomWidth: 1,
              }}
            />
          </View>
          {
            this.props.Order.auth.token.token == undefined || this.props.Order.auth.token.token =='' ?
                <View>
                  <View
            style={{
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
              backgroundColor: 'white',
            }}>
            <Text style={{width: '100%', fontSize: 18}}>Address</Text>
            <TextInput
              value={this.state.address}
              onChangeText={value => {
                this.setState({address: value});
              }}
              placeholder="Please enter your address"
              style={{
                width: '100%',
                fontSize: 15,
                borderBottomColor: 'orange',
                borderBottomWidth: 1,
              }}
            />
          </View>
          <View
            style={{
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
              backgroundColor: 'white',
            }}>
            <Text style={{width: '100%', fontSize: 18}}>Phone Number</Text>
            <TextInput
              value={this.state.phonenumber}
              onChangeText={value => {
                this.setState({phonenumber: value});
              }}
              placeholder="Please enter your address"
              style={{
                width: '100%',
                fontSize: 15,
                borderBottomColor: 'orange',
                borderBottomWidth: 1,
              }}
              keyboardType='numeric'
            />
          </View>
         
          <View style={{borderWidth: 0.5, borderColor: 'gray'}} />
                </View>
            : null
          }
          
          <View style={{height: 160}} />
        </ScrollView>

        <View
          style={{
            backgroundColor: '#dbdbdb',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            flexDirection: 'row',
            bottom: 0,

            width: '100%',
            height: 50,
            padding: 10,
            paddingVertical: 50,
          }}>
          <TouchableOpacity
            onPress={() => this.myfun(this.props.Order.auth.token.token,this.state.deliveryday,this.state.deliverytime,this.state.notes,this.props.navigation, this.props.navigation.getParam('userid'), this.state.address, this.state.phonenumber)}
            style={{
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: '#ff6f00',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.2,
              shadowRadius: 5.0,

              elevation: 5,
            }}>
            <View style={{width: '70%'}}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                PLACE ORDER
              </Text>
            </View>
            <View
              style={{
                width: '30%',
                borderLeftWidth: 0.5,
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={Arrow} style={{width: 25, height: 25}} />
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
const mapStateToProps = state => {
  //console.log('Ledger',state.ledger.data);
  // const sortedActivities = state.ledger.data.sort((a, b) => b.created_at - a.created_at);
  //console.log(sortedActivities);
  return {Order: state};
};

export default connect(
  mapStateToProps,
  {placeorder},
)(Home);
