//Original Code
// import { AppRegistry } from 'react-native';
// import App from './App';
//
// AppRegistry.registerComponent('albums', () => App);


// Import a library to help create a component
import React from 'react';
// import ReactNative from 'react-native';
//Import destructuring
//Will need to learn what's in the React lib
import { AppRegistry, View } from 'react-native';
//importing an exported component
//after importing, nest it in the component below
 import Header from './src/components/header';
 import AlbumList from './src/components/AlbumList';

// Create a component
//Every variable must be defined, there are no global variables in ReactNative

//This is correct
// const App = () => {
//   return (
//     <Text>Some Text</Text>
//   );
// }

//This is a refactored version of the above
//Empty components are self-closing, hence <Header />
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Render it to the device
//Will automatically return App
//Implicit return becuase there are no {}
//We are regiserting a component to our application
//App is the first component to render for our application
//Each React App must have at least one component registered
// ReactNative.AppRegistry.registerComponent('albums', () => App);
//Deleted ReactNative because changed import statement to specific methods
AppRegistry.registerComponent('albums', () => App);
