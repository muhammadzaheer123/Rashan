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
import { orderinprocessing, orderprevious } from './actions';
import { DrawerActions } from 'react-navigation-drawer';

class Order extends Component {
  state = {
    loading: false,userid:'', enabled: true, phoneN: '', check: false,
    item: {
      'Grocery': {
        id: 1,
        selected: false
      }
    },
    arr: []
  }
//    token : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC93d3cucmFzaGFuYXBwLmNvbVwvYXBpXC9sb2dpbiIsImlhdCI6MTU4MDQ4NzE1MywiZXhwIjoxNTg5MTI3MTUzLCJuYmYiOjE1ODA0ODcxNTMsImp0aSI6IjczVXVtM2pZc1JMTHNjVVEiLCJzdWIiOjQsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.IJG3oMyhCsnjq5tNY1XhvT6voqZyO5lqmTlOrWkq9JQ",  }
 async componentDidMount() {
    //console.log(this.props.navigation.getParam('userid'));
    //alert(this.props.navigation.getParam('userid'));
    this.props.orderinprocessing(this.props.states.auth.token.token, await AsyncStorage.getItem('userid'));
   // this.props.orderprevious(this.props.navigation.getParam('token'));
  }
  toggleSelected(id, key) {
    console.log(this.state);
    let temp = this.state.item[key];
    temp.selected = !temp.selected;
    this.setState({
      item: {
        [key]: temp,
      }
    })
  }
  
  render() {

    console.log(this.state.item);
    const images = [
      Image.resolveAssetSource(require('../Images/v1.jpg')).uri,
      Image.resolveAssetSource(require('../Images/v2.png')).uri,
      Image.resolveAssetSource(require('../Images/v3.jpg')).uri,
      Image.resolveAssetSource(require('../Images/v4.jpg')).uri,

    ];
    var pre = 0;   
    var orderpro = 0;
    
    if(this.props.states.order.inprocessingorder.length!==0){
       pre = 'aihdskjhsakdjhsakdjh';   
      orderpro ='nddlkadlkasjd';
    }
    // for(let i=0;i<this.props.order.inprocessingorder.length;i++){
    //   for(let j=i;i<this.props.order.inprocessingorder.length;j++){
    //       if(this.props.order.inprocessingorder[i].order_no==this.props.order.inprocessingorder[j].order_no){
    //         arr[k] = this.props.order.inprocessingorder[i];
    //       }
    //   }
    // }
    return (
      <View style={{ alignItems: 'center', width: '100%', resizeMode: 'contain', height: '100%' }}>
        <View style={{
          flexDirection: 'row', marginTop: 5, marginLeft: 5,
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
                token: this.state.token
              }
            )}>
              <Image source={Cart} style={{ width: 30, height: 30, marginRight: 20, marginTop: 5 }} />

            </TouchableOpacity>
          </View>

        </View>

        <View style={{ width: '100%', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', position: 'absolute' }}>
          <Image source={Logo} style={{ height: 85, width: 140 }} />
        </View>
        <ScrollView style={{marginTop:50}}>
            {
               this.props.states.order.inprocessingorder.length !== 0 ? 
               this.props.states.order.inprocessingorder.data.length !== 0 ?
               <Text style={{textAlign:'center',paddingVertical:5,fontSize:18,backgroundColor:'#cacaca',marginBottom:5}}>Order In Processing</Text>
           
               : null
               :null
            }
            
            
          {
            this.props.states.order.inprocessingorder.length !== 0 ?
            this.props.states.order.inprocessingorder.data.map(item =>{
               
               if(pre ==item.order_no){
                  
                  
              }else{
                pre = item.order_no;
                return(
                  <View style={{borderWidth:1,borderRadius:10,margin:5,padding:15,backgroundColor:'#fafafa'}}>
                  <View style={{flexDirection:'row'}}>
                  <Text style={{width:'50%'}}>
                      Order no: <Text style={{color:'red'}}>{item.order_no}</Text>
                  </Text>
                  <Text style={{width:'50%'}}>
                    Status : <Text style={{color:'green'}}>In Process</Text>
                  </Text>
                  </View>
                  <View>
                    <Text style={{textAlign:'center',paddingVertical:10,color:'blue'}}>
                      Delivery Info
                    </Text>
                    <Text>
                      Delivery Day : <Text style={{color:'red'}}>{item.day}</Text>
                    </Text>
                    <Text>
                      Delivery Time : <Text style={{color:'red'}}>{item.window}</Text>
                    </Text>
                    <Text>
                      Information : <Text style={{color:'red'}}>{item.notes}</Text>
                    </Text>
                  </View>
                  
                </View>
                )
               }
               
            })
            :null
          }  

          {/* {
            this.props.order.previousorder.length !== 0 ?
            this.props.order.previousorder.data.length !== 0 ?
            <Text style={{textAlign:'center',paddingVertical:5,fontSize:18,backgroundColor:'#cacaca',marginBottom:5,marginTop:10}}>Previos Orders</Text>    
         
            : null
            : null
          }
          

          {
            this.props.order.previousorder.length !== 0 ?
            this.props.order.previousorder.data.length !== 0 ?
            this.props.order.previousorder.data.map(item =>{
               
               if(orderpro ==item.order_no){
                  
                  
              }else{
                orderpro = item.order_no;
                return(
                  <View style={{borderWidth:1,borderRadius:10,margin:5,padding:15,backgroundColor:'#fafafa'}}>
                  <View style={{flexDirection:'row'}}>
                  <Text style={{width:'50%'}}>
                      Oder no: <Text style={{color:'red'}}>{item.order_no}</Text>
                  </Text>
                  <Text style={{width:'50%'}}>
                    Status : <Text style={{color:'green'}}>Complete</Text>
                  </Text>
                  </View>
                  <View>
                    <Text style={{textAlign:'center',paddingVertical:10,color:'blue'}}>
                      Delivery Info
                    </Text>
                    <Text>
                      Delivery Day : <Text style={{color:'red'}}>{item.day}</Text>
                    </Text>
                    <Text>
                      Delivery Time : <Text style={{color:'red'}}>{item.window}</Text>
                    </Text>
                    <Text>
                      Information : <Text style={{color:'red'}}>{item.notes}</Text>
                    </Text>
                  </View>
                  
                </View>
                )
               }
               
            })
            :
             null
            : null
          }   */}

        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  Logo: {
    width: 100,
    height: 100
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

const mapStateToProps = (state) => {
  //console.log('Ledger',state.ledger.data);
  // const sortedActivities = state.ledger.data.sort((a, b) => b.created_at - a.created_at);
  //console.log(sortedActivities)states.order;
  return { states: state };
};

export default connect(mapStateToProps, { orderinprocessing,orderprevious })(Order);
