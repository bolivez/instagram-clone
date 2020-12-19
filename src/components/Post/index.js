import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './components/Header/index';
import Body from './components/Body/index';
import Footer from './components/Footer/index';

const Post = ({post}) => {
  return (
    <View>
      <Header imageUri={post.user.imageUri} name={post.user.name} />
      <Body imageUri={post.image} />
      <Footer
        likesCount={post.likes}
        caption={post.caption}
        postedAt={post.createdAt}
      />
    </View>
  );
};

export default Post;
