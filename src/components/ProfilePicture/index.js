import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import styles from './styles';

const ProfilePicture = ({uri}) => {
  return (
    <View>
      <Image source={{uri}} style={styles.image} />
    </View>
  );
};

export default ProfilePicture;
