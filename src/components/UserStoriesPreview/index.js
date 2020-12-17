import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import UserStoryPreview from '../UserStoryPreview';
import styles from './styles';
import storiesData from '../../data/stories';

const Stories = () => {
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={storiesData}
        renderItem={({item}) => (
          <UserStoryPreview imageUri={item.imageUri} name={item.name} />
        )}
        keyExtractor={({user_id}) => user_id}
      />
    </View>
  );
};

export default Stories;
