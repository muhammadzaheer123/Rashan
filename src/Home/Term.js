import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  View
} from 'react-native';

class Term extends Component {
  render() {
    return (
      <ScrollView>
      <View style={{margin:15,borderWidth:0,flex:1}}>
        <Text style={{fontWeight:'bold',fontSize:18,marginBottom:10,textAlign:'center'}}>Terms and Conditions</Text>
        <View style={{flexDirection:'row',marginBottom:5}}>
          <Text>• 	</Text>
        <Text>
Images shown are indicative of actual product.
</Text>
        </View>
        <View style={{flexDirection:'row',marginBottom:5}}>
          <Text>•	 </Text>
        <Text>
        If your order is of Rs 1000 or more than 1000 than no delivery charges will be applied.
</Text>
        </View>

        <View style={{flexDirection:'row',marginBottom:5}}>
          <Text>•	 </Text>
        <Text>
        If you order groceries from Rashan, and your order amount is less than Rs 1000 then Rs 70 will be charged as a delivery cost at the time of checkout.
</Text>
        </View>
        <View style={{flexDirection:'row',marginBottom:5}}>
          <Text>•	 </Text>
        <Text>
        If you make a multiple order in same day with same delivery time, same address and your total order amount is exceeding our minimum basket amount which is Rs 1000, then Rashan will wave off the delivery charges on your order.
</Text>
        </View>
        <View style={{flexDirection:'row',marginBottom:5}}>
          <Text>•	 </Text>
        <Text>
        Rashan reserves the rights to refuse any order of that geographic location where Rashan is not operating.
</Text>
        </View>
        <View style={{flexDirection:'row',marginBottom:5}}>
          <Text>•	 </Text>
        <Text>
        In case Rashan will cancel your order due to any reasons our team will inform you via call or any other possible communication channel.
</Text>
        </View>
        <View style={{flexDirection:'row',marginBottom:5}}>
          <Text>•	 </Text>
        <Text>
        Our team will call you at your given mobile number/contact number before dispatching the order. In case if you will not respond our call thrice, then Rashan reserves a right to cancel the order without any further notice.
</Text>
        </View>
        <View style={{flexDirection:'row',marginBottom:5}}>
          <Text>•	 </Text>
        <Text>
        If you want to cancel or modify your order you will do it by contacting with our team on our support numbers.
</Text>
        </View>
        <View style={{flexDirection:'row',marginBottom:5}}>
          <Text>•	 </Text>
        <Text>
        You can pay by cash at the time of delivery of your order.

</Text>
        </View>
        <View style={{flexDirection:'row',marginBottom:5}}>
          <Text>•	 </Text>
        <Text>
        If you are making any order that means you are accepting our terms and conditions.
</Text>
        </View>



      </View>
      </ScrollView>
    );
  }
}

export default Term;
