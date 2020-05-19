/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import MilkPack from '../Images/milkpack.jpg';
import Cart from '../Images/cart.png';
import Delete from '../Images/delete.png';
import Logo from '../Images/logo3.png';
import {addtocart, deletetocart, updatecart} from '../Cart/actions';
import {connect} from 'react-redux';
import pro from '../Images/promotion.png';
import FastImage from 'react-native-fast-image';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      quantity : '',
      imw:1,
      imh:1,
      loading: true
    }
    Dimensions.addEventListener("change", (e) => {
      this.setState(e.window);
    });
  }
  componentDidMount(){
    // Image.getSize('http://rashanapp.com/images/products/'+this.props.img,( width, height ) =>
    // {
    //    // this.setState({ imw: width, imh: height, loading: false });
    //     //console.log(width,height)
    // }, ( error ) =>
    // {
    //     this.setState({ loading: false });
    //     console.log( error );
    // });
    
  }
  
  render() {
    const images = [
      Image.resolveAssetSource(require('../Images/v1.jpg')).uri,
      Image.resolveAssetSource(require('../Images/v2.png')).uri,
      Image.resolveAssetSource(require('../Images/v3.jpg')).uri,
      Image.resolveAssetSource(require('../Images/v4.jpg')).uri,
    ];
   // const win = Dimensions.get('window');
   // const ratio = win.width / this.state.imw; //541 is actual image width
    //console.log('saksdadasdadasdas',this.state.imh * ratio, ratio);
    let a = false;
    let quantity = 1;
    if (
      this.props.Cart.data !== [] &&
      this.props.Cart.data.data !== undefined
    ) {
      for (let i = 0; i < this.props.Cart.data.data.length; i++) {
        //console.log(this.props.Cart.data.data[i].product_id, this.props.id);
        if (this.props.Cart.data.data[i].product_id == this.props.id) {
          a = true;
          quantity = this.props.Cart.data.data[i].quantity;
          // this.setState({
          //   quantity : this.props.Cart.data.data[i].quantity
          // })
        }
      }
    }
    
    //console.log('ite',this.props.userid);
    return (
      <View
        style={{
          padding: 10,
          backgroundColor: '#fafafa',
          borderRadius: 20,
          borderWidth: 0,
          marginVertical: 5,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,

          elevation: 24,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{width:'37%',justifyContent:'center',alignItems:'center'}}>
            
          <FastImage
          onLoadStart={(e) => this.setState({loading: true})}
          onLoadEnd={(e) => this.setState({loading: false})}
          //source={MilkPack}
            source={{uri:'http://rashanapp.com/images/products/'+this.props.img,
            //priority: FastImage.priority.high,
            
          }}
            style={{ width: '100%',
              height: undefined, aspectRatio:1}}
            resizeMode='contain'
          />
          </View>
          
          <View style={{paddingLeft: 0, borderWidth: 0,width:'66%',justifyContent:'center',borderWidth:0}}>

            <View>
            {
              this.props.promotion ?
              <View style={{borderWidth:0,width:'100%',justifyContent:'flex-end',paddingRight:10}}>
                   <Image source={pro} style={{alignSelf:'flex-end', width:20,height:20}}/>
             
                </View>
              : null
            }
            <Text
              style={{
                fontSize: 16,
                marginBottom: 3,
                //paddingLeft:10,
                marginLeft: 10,
                fontWeight: '900',
                //width:'50%'
              }}>
              {this.props.name}
              
            </Text>
            
            </View>
            
            <View style={{}}>
            <Text style={{fontSize: 14, marginBottom: 3, marginLeft: 10}}>
                {this.props.description}
              </Text>

            </View>
            <View>
              {
                !this.props.promotion ? 
                <View style={{flexDirection:'row'}}>
                <Text
                style={{
                  color: 'green',
                  marginLeft: 10,
                  marginBottom: 3,
                  fontSize: 15,
                }}>
                Rs. {this.props.price}
              </Text>
              <Text style={{
                  //width:50,
                  color: 'orange',
                  marginLeft: 10,
                  marginBottom: 3,
                  fontSize: 15,
                }}>
                {this.props.unit}
              </Text>
              </View>
                : <View style={{flexDirection:'row'}}>
                  <Text
                style={{
                  width:'33%',
                  color: 'green',
                  marginLeft: 10,
                  marginBottom: 3,
                  fontSize: 15,
                  textDecorationLine: 'line-through',
                  textDecorationStyle: 'solid'
                }}>
                Rs. {this.props.price}
              </Text>
              <Text
                style={{
                  width:'33%',
                  color: 'green',
                  marginLeft: 10,
                  marginBottom: 3,
                  fontSize: 15,
                }}>
                Rs. {this.props.discount}
              </Text>
              <Text style={{
                  width:'33%',
                  color: 'orange',
                  marginLeft: 10,
                  marginBottom: 3,
                  fontSize: 15,
                }}>
                {this.props.unit}
              </Text>
                  </View>
              }
            </View>
                      
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                // width: '94%',
              }}>
                {
                  //alert(this.props.quantity)
                }
                {
                  this.props.quantity != 0 ?
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                            {a == false  ? (
                <TouchableOpacity
                  onPress={() => {
                    this.props.addtocart(this.props.token, this.props.id, this.props.userid);
                  }}
                  style={{
                    padding: 10,
                    marginVertical: 5,
                    borderWidth: 0,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,
                    marginTop: 10,
                    elevation: 3,
                    backgroundColor: 'red',
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={Cart}
                    style={{width: 19, height: 18, marginLeft: 2}}
                  />
                  <View style={{width: '60%', borderWidth: 0}}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: 'white',
                      }}>
                      Add to Cart
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <View style={{justifyContent:'center',alignItems:'center',borderWidth:0}}>
                  <View
              style={{
                flexDirection: 'row',
               // justifyContent: 'center',
                alignItems: 'center',
                alignSelf:'center',
                marginTop: 5,
                width: '100%',
                borderWidth:0
              }}>
              <TouchableOpacity
              onPress={() => {
                this.props.updatecart(this.props.token, this.props.id, '-',this.props.userid);
              }}
                style={{
                  padding: 10,
                  borderRadius: 90,
                  paddingVertical: 0,
                  borderWidth: 0,
                  borderColor: '#41a137',
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 25,
                    color: 'red',
                    fontWeight: 'bold',
                  }}>
                  -
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 23,
                  paddingHorizontal: 10,
                }}>
                {quantity}
              </Text>
{/*               
              {
                this.props.Cart.data.data!== undefined ?
                this.props.Cart.data.data.map(i =>{
                  //console.log(i.product_id,this.props.id);
                  i.product_id == this.props.id ?

                  
              
                  : null
                  
                })
                : null
              } */}

              {console.log(parseInt(quantity)<= parseInt(this.props.quantity),quantity,this.props.quantity)}
              {console.log(this.props.Cart.addloading)}
             <TouchableOpacity
              
              disabled={ (parseInt(quantity)< parseInt(this.props.quantity) && !this.props.Cart.addloading) ? false : true}
              onPress={() => {
                this.props.updatecart(this.props.token, this.props.id, '+',this.props.userid,parseInt(quantity),parseInt(this.props.quantity));
              }}
                style={{
                  padding: 8,
                  borderRadius: 90,
                  paddingVertical: 0,
                  borderWidth: 0,
                  borderColor: '#41a137',
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 23,
                    color: 'red',
                    fontWeight: 'bold',
                  }}>
                  +
                </Text>
              </TouchableOpacity>
           
            </View>
            
                <TouchableOpacity
                  onPress={() => {
                    this.props.deletetocart(this.props.token, this.props.id,this.props.userid);
                  }}
                  style={{
                    padding: 10,
                    marginVertical: 5,
                    borderWidth: 0,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,

                    elevation: 3,
                    backgroundColor: 'green',
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={Delete}
                    style={{width: 19, height: 18, marginRight: 3}}
                  />
                  <View style={{width: '60%', borderWidth: 0}}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: 'white',
                      }}>
                      Remove from Cart
                    </Text>
                  </View>
                </TouchableOpacity>
                </View>
            
              )}
                      </View>     
                  :
                  <View style={{height:50,borderWidth:0,justifyContent:'center',alignItems:'center'}}>

                  <Text style={{textAlign:'center',color:'red',fontSize:16}}>Out of Stock</Text>
                </View>
                }
            
            </View>
          </View>
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
  return {Cart: state.cart};
};

export default connect(
  mapStateToProps,
  {addtocart, deletetocart, updatecart},
)(Home);
