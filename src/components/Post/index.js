import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './components/Header/index';
import Body from './components/Body/index';
import Footer from './components/Footer/index';

const Post = ({post}) => {
  return (
    <View>
      <Header imageUri={post.user.imageUri} name={post.user.name} />
      <Body imageUri={post.imageUri} />
      <Footer
        likesCount={post.likesCount}
        caption={post.caption}
        postedAt={post.postedAt}
      />
    </View>
  );
};

export default Post;
