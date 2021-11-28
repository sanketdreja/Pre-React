import axios from "axios";
import React, { Component } from "react";
export default class PostComponent extends Component {
  state = {
    posts: [],
    postObject: {
      title: "",
      body: "",
    },
  };

  onDeleteClickHandler = (id) => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => {
        console.log(response);
        this.fetchData();
        alert("Deleted");
      });
  };

  onChangeHolder = (event) => {
    const { name, value } = event.target;
    const postObjectCopy = this.state.postObject;
    postObjectCopy[name] = value;
    this.setState({ postObject: postObjectCopy });
  };
  onFormSubmitClick = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios
    .post("https://jsonplaceholder.typicode.com/posts",this.state.postObject).then((response)=>{
        console.log(response);
        this.fetchData();
        alert("Creted")
        this.setState({postObject: {
            title: "",
            body: "",
            userId:1,
          },

        })
    });
  };

  render() {
    return (
      <>
        <h1>In Post</h1>
        <form onSubmit={this.onFormSubmitClick}>
            <label>Title</label>
            <input 
            name="title" 
            value={this.state.postObject.title}
            onChange={this.onChangeHolder}
            />

            
            <label>Body</label>
            <input 
            name="body" 
            value={this.state.postObject.body}
            onChange={this.onChangeHolder}
            />

        <button type="submit">Submit</button>
            

        </form>

        {this.state.posts.map((post, index) => (
          <div key={index}>
            <div>
              {index + 1}..{post.title}
            </div>
            <button
              onClick={() => {
                this.onDeleteClickHandler(post.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </>
    );
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response.data);
      this.setState({ posts: response.data });
    });
  }
}
