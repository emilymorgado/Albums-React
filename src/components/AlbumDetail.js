import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

//This can be a functional component
//We don't need access to state or lifecycle methods
//This is only showing data

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
