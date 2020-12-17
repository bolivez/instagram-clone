import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import ProfilePicture from './../ProfilePicture/index';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const Story = (props) => {
  const {
    story: {
      user: {imageUri, name, user_id},
    },
  } = props;

  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Story', {userId: user_id});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ProfilePicture uri={imageUri} />
      <Text style={styles.name}> {name} </Text>
    </TouchableOpacity>
  );
};

export default Story;
