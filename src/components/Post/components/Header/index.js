import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ProfilePicture from '../../../ProfilePicture';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({imageUri, name}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <ProfilePicture uri={imageUri} size={40} />
        <Text style={styles.name}> {name} </Text>
      </View>
      <View style={styles.right}>
        <Icon name="ellipsis-vertical" size={25} />
      </View>
    </View>
  );
};

export default Header;
