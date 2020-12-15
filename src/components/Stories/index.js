import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Story from './../Story/index';
import styles from './styles';

const paul_pic =
  'https://img.cinemablend.com/filter:scale/quill/7/3/9/6/6/7/7396672b4a183f9d5c33f305d4fa2f630138d165.jpg?mw=600';
const data = [
  {
    imageUri: paul_pic,
    name: 'bolivez',
    user_id: 111,
  },
  {
    imageUri: paul_pic,
    name: 'raynaud',
    user_id: 222,
  },

  {
    imageUri: paul_pic,
    name: 'noname',
    user_id: 333,
  },

  {
    imageUri: paul_pic,
    name: 'blessed',
    user_id: 444,
  },
  {
    imageUri: paul_pic,
    name: 'katze',
    user_id: 555,
  },
  {
    imageUri: paul_pic,
    name: 'width',
    user_id: 666,
  },
  {
    imageUri: paul_pic,
    name: 'niles',
    user_id: 777,
  },
];

const Stories = () => {
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        renderItem={({item}) => (
          <Story imageUri={item.imageUri} name={item.name} />
        )}
        keyExtractor={({user_id}) => user_id}
      />
    </View>
  );
};

export default Stories;
