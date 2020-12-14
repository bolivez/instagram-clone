import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Story from './../Story/index';

const data = [
  {
    imageUri:
      'https://pbs.twimg.com/media/EaVBP_LXQAIp9hV?format=jpg&name=large',
    name: 'bolivez',
    user_id: 111,
  },
  {
    imageUri:
      'https://pbs.twimg.com/media/EXBeaYiXYAQ6Q9M?format=jpg&name=large',
    name: 'raynaud',
    user_id: 222,
  },

  {
    imageUri:
      'https://pbs.twimg.com/media/EURlo9iX0AADkLc?format=jpg&name=large',
    name: 'noname',
    user_id: 333,
  },

  {
    imageUri:
      'https://pbs.twimg.com/media/EQRr7TaX0AI9SjF?format=jpg&name=large',
    name: 'blessed',
    user_id: 444,
  },
  {
    imageUri:
      'https://pbs.twimg.com/media/D_mHo_sWkAAm8KD?format=jpg&name=large',
    name: 'katze',
    user_id: 555,
  },
  {
    imageUri:
      'https://pbs.twimg.com/media/DwPg2GwXcAAoh9o?format=jpg&name=360x360',
    name: 'width',
    user_id: 666,
  },
  {
    imageUri:
      'https://pbs.twimg.com/media/Dz2bXwyWkAAtPlA?format=jpg&name=900x900',
    name: 'niles',
    user_id: 777,
  },
];

const Stories = () => {
  return (
    <View>
      <FlatList
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

const styles = StyleSheet.create({});
