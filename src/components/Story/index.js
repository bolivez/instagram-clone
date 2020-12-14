import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ProfilePicture from './../ProfilePicture/index';
import styles from './styles';

const Story = ({imageUri, name}) => {
  return (
    <View style={styles.container}>
      <ProfilePicture uri={imageUri} style={styles.image} />
      <Text> {name} </Text>
    </View>
  );
};

export default Story;
