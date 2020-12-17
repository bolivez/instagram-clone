import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import styles from './styles';

const ProfilePicture = ({uri, size = 70}) => {
  return (
    <View>
      <Image
        source={{uri}}
        style={[styles.image, {width: size, height: size}]}
      />
    </View>
  );
};

export default ProfilePicture;
