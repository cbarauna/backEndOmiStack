import React, { Component } from "react";
import api from "../services/api";

import "./New.css";

class New extends Component {
  state = {
    image: null,
    author: "",
    place: "",
    description: "",
    hashtag: ""
  };

  handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", this.state.image);
    data.append("author", this.state.author);
    data.append("place", this.state.place);
    data.append("description", this.state.description);
    data.append("hashtag", this.state.hashtag);

    await api.post("posts", data);

    this.props.history.push("/");
  };

  handleImageChange = e => {
    this.setState({ image: e.target.files[0] });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form id="new-post" onSubmit={this.handleSubmit}>
        <input type="file" name="" onChange={this.handleImageChange} />

        <input
          type="text"
          name="author"
          placeholder="author"
          onChange={this.handleChange}
          value={this.state.author}
        />
        <input
          type="text"
          name="place"
          placeholder="place"
          onChange={this.handleChange}
          value={this.state.place}
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          onChange={this.handleChange}
          value={this.state.description}
        />
        <input
          type="text"
          name="hashtag"
          placeholder="hashtag"
          onChange={this.handleChange}
          value={this.state.hashtag}
        />

        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default New;