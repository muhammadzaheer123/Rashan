import * as React from 'react';
import { StyleSheet } from 'react-native';
import {
  TabView,
  TabBar,
  SceneMap,
  NavigationState,
  SceneRendererProps,
} from 'react-native-tab-view';
//import Article from './Shared/Article';
//import Albums from './Shared/Albums';
//import Chat from './Shared/Chat';
//import Contacts from './Shared/Contacts';

const FirstRoute = () => (
  <View style={{ backgroundColor: '#fafafa' }} >
      <Text>Hello</Text>
      </View>
);
 
const SecondRoute = () => (
  <View style={{ backgroundColor: '#673ab7' }} />
);

export default class ScrollableTabBarExample extends React.Componen {
  // eslint-disable-next-line react/sort-comp
  static title = 'Scrollable tab bar';
  static backgroundColor = '#3f51b5';
  static appbarElevation = 0;

  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Promotion' },
      { key: 'second', title: 'Second' },
    ],
  };
 
  renderTabBar = (
  ) => (
  );

 renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this.renderScene}
        renderTabBar={this.renderTabBar}
        onIndexChange={index => this.setState({ index })}
        />
    );
  }
}

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: '#3f51b5',
  },
  tab: {
    width: 120,
  },
  indicator: {
    backgroundColor: '#ffeb3b',
  },
  label: {
    fontWeight: '400',
  },
});