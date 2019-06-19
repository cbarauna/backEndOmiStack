import React, { Component } from "react";

import {
  View,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text
} from "react-native";
import camera from "../assets/camera.png";
import more from "../assets/more.png";
import like from "../assets/like.png";
import comment from "../assets/comment.png";
import send from "../assets/send.png";

import api from "../services/api";

export default class Feed extends Component {
  state = {
    feed: []
  };

  async componentDidMount() {
    // this.registerToSocket();
    const response = await api.get("posts");

    this.setState({ feed: response.data });
  }

  static navigationOptions = ({ navigation }) => ({
    headerRigth: (
      <TouchableOpacity
        style={{ marginRigth: 20 }}
        onPress={() => navigation.navigate("New")}
      >
        <Image source={camera} />
      </TouchableOpacity>
    )
  });

  render() {
    return (
      <View styles={container}>
        <FlatList
          data={this.state.feed}
          keyExtractor={post => post._id}
          renderItem={({ item }) => (
            <View style={styles.feedItem}>
              <View style={styles.feedItemHeader}>
                <View styles={styles.userInfo}>
                  <Text styles={styles.name}>{item.author}</Text>
                  <Text styles={styles.place}>{item.place}</Text>
                </View>
                <Image source={more} />
              </View>
              <Image
                style={styles.feedImage}
                source={{ uri: `http://192.168.0.2:3333/${item.image}` }}
              />
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
