import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import Login from './src/Login/Login';
import Home from './src/Home/Home';
import Term from './src/Home/Term';
import Grocery from './src/Grocery/Grocery';
import Cart from './src/Cart/Cart';
import CheckOut from './src/Cart/CheckOut';
//import Login from './src/LoginSignUp/routers';
import Order from './src/Order/Order';
import Promotion from './src/Grocery/Promotion';
import list from './src/Images/list.png';
import firstpage from './src/LoginSignUp/enter';
import Signin from './src/LoginSignUp/Signin';
import Signup from './src/LoginSignUp/Signup';
import Search from './src/Home/Search';
import contact from './src/Home/contact';
import DrawerContentComponent from './src/DCC/DrawerContentComponent';
import { createDrawerNavigator } from 'react-navigation-drawer';
//import test from './src/test';
//import ExpenceDetails from './src/ExpensesDetails/ExpensesDetails';
//import AddExpense from './src/AddExpense/AddExpense';
//import EditExpense from './src/Edit/Edit';
//import ViewExpense from './src/View/View';
//import ImagePicker from './src/Others/ImagePicker';
//import ViewDocument from './src/ViewDocument/ViewDocument';
class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
    back = () => {
    this.props.navigationProps.goBack();
  };

  render() {
    return (
      <View style={{ flexDirection: 'row' ,padding:10}}>
        {/* <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>     
             <Image
             style={{ width: 30, height: 30,marginLeft:10 }}
             source={Image1}     
             />
        </TouchableOpacity> */}
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>     
                 <Image
             style={{ width: 30, height: 30 }}
             source={list}     
             />
        </TouchableOpacity>
      </View>
    );
  }
}
const LoginNavigation = createStackNavigator({
 
firstpage: {
  screen: firstpage,
  navigationOptions: ({ navigation }) => ({
    header: null,
  })
},
  Signin: {screen: Signin,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),},
  
    Signup: {screen: Signup,
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),},
});
const MainNavigator = createStackNavigator({
  // Login: {screen: Login,
  //   navigationOptions: ({ navigation }) => ({
  //     header: null,
  //   }),},
  // // ImagePicker: {screen: ImagePicker,
  //   navigationOptions: ({ navigation }) => ({
  //     header: null,
  //   }),},
  // Login: {
  //   screen: Login,
  //   navigationOptions: ({ navigation }) => ({
  //     header: null,
  //   })
  // },
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  Term: {
    screen: Term,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  contact: {
    screen: contact,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  Grocery: {
    screen: Grocery,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  Promotion: {
    screen: Promotion,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  Cart: {
    screen: Cart,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  CheckOut: {
    screen: CheckOut,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  Order: {
    screen: Order,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  Search: {
    screen: Search,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  // },
  // ExpenceDetails: {screen: ExpenceDetails,
  //   navigationOptions: ({ navigation }) => ({
  //     header: null,
  //   }),},
  //   AddExpense: {screen: AddExpense,
  //     navigationOptions: ({ navigation }) => ({
  //       header: null,
  //     }),},
  //     EditExpense: {screen: EditExpense,
  //       navigationOptions: ({ navigation }) => ({
  //         header: null,
  //       }),},
  //       ViewExpense: {screen: ViewExpense,
  //         navigationOptions: ({ navigation }) => ({
  //           header: null,
  //         }),},
  //         ViewDocument: {screen: ViewDocument,
  //           navigationOptions: ({ navigation }) => ({
  //             header: null,
  //           }),},
});
const CartNavigation = createStackNavigator({
  Cart: {
    screen: Cart,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  CheckOut: {
    screen: CheckOut,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
});
const OrderNavigation = createStackNavigator({
  
  Order: {
    screen: Order,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
})

const DrawerNavigatorExample = createDrawerNavigator({
  LoginNavigation:{
    screen: LoginNavigation,
    navigationOptions: {
      drawerLabel: null,
      drawerLockMode: 'locked-closed'
      //drawerLockMode: 'locked-closed',
    },
  },
  Main: {
    screen: MainNavigator,
    navigationOptions: {
      drawerLabel: 'Home',
      //drawerLockMode: 'locked-closed',
    },
  },
  Cart: {
    screen: CartNavigation,
    navigationOptions: {
      drawerLabel: 'Cart',
      //drawerLockMode: 'locked-closed',
    },
  },
  Order: {
    screen: OrderNavigation,
    navigationOptions: {
      drawerLabel: 'Order',
      //drawerLockMode: 'locked-closed',
    },
  },
  // Home: {
  //   screen: HomeNavigation,
  //   navigationOptions: {
  //     drawerLabel: 'Home',
  //     //drawerLockMode: 'locked-closed',
  //   },
  // },
  // EditProfile: {
  //   screen: EditProfileNavigator,
  //   navigationOptions: {
  //     //drawerLabel: '',
  //     //drawerLockMode: 'locked-closed',
  //   },
  //},
}
, {
  contentComponent: DrawerContentComponent,
  drawerWidth: 230,
}

);
const App = createAppContainer(DrawerNavigatorExample);

export default App;

