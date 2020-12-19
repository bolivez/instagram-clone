import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Post from './../Post/index';
import Stories from './../UserStoryPreview/index';
import {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '../../../graphql/queries';

const Feed = () => {
  const [posts, usePosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const postsData = await API.graphql(graphqlOperation(listPosts));
      setPosts(postsData.data.listPosts.items);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <FlatList
      ListHeaderComponent={Stories}
      data={posts}
      renderItem={({item}) => <Post post={item} />}
      keyExtractor={({id}) => id}
    />
  );
};

export default Feed;

const styles = StyleSheet.create({});
