//import libraries for making a registerComponent
import React from 'react';
import { Text } from 'react-native';

//make a component
const Header = () => {
  return <Text>Albums!</Text>;
};

//make the component available to other parts of the app
//This component is a child component of the Root component
//AppRegistry is the top level, root component
export default Header;
