import axios from "axios";
import React, { Component } from "react";
export default class PostComponent extends Component {
  state = {
    isEditMode:false,
    posts: [],
    postObject: {
      title: "",
      body: "",
      userId:1,
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
  
  onEditClickHandler = (id) => {
    //get the specific objec t by id from the list
    const editObject=this.state.posts.find((post)=>post.id===id);
    if (editObject) {
      //set the object to the state.postobject
      this.setState({postObject:editObject,isEditMode:true})
    };
  };
  onCancelClickHandler=(event)=>{
    event.preventDefault();
   this.resetState();
    }
  

  resetState(){
    this.setState({
      postObject:{
        title:"",
        body:"",
        userId:1,
      },
      isEditMode:false,
    })
  }

  onChangeHolder = (event) => {
    const { name, value } = event.target;
    const postObjectCopy = this.state.postObject;
    postObjectCopy[name] = value;
    this.setState({ postObject: postObjectCopy });
  };
  onFormSubmitClick = (event) => {
    event.preventDefault();
    console.log(this.state);

if (this.state.isEditMode) {

  axios
  .put(
    "https://jsonplaceholder.typicode.com/posts/"+
    this.state.postObject.id,
    this.state.postObject

  )
  .then((response)=>{
    console.log(response);
    this.fetchData();
    alert("Updated");
    this.resetState();
  });
  
}else{
    axios
    .post("https://jsonplaceholder.typicode.com/posts",this.state.postObject).then((response)=>{
        console.log(response);
        this.fetchData();
        alert("Creted")
      this.resetState();
    });}
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

        <button type="submit">{this.state.isEditMode?"Update":"Submit"}</button>
            <button onClick={this.onCancelClickHandler}>Cancel</button>

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
            <button
              onClick={() => {
                this.onEditClickHandler(post.id);
              }}
            >
              Edit
            </button>
            <br/>
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
