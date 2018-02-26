import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  //initializing state for our component
  state = { albums: [] };

  componentWillMount() {
    //ajax/http request to get data from remote api
    //this returns a promise because http requests
    //are asychronous

    //setState - function inside of component based classes
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }
  renderAlbums() {
    //iterates over the array, returns a new array of titles
    //album={album} is the props, which allows data to pass
    //between components. Note: the name does not need to match the
    //variable name. We didn't have to call is album.
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />);
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
