import axios from 'axios';
import React, { Component } from 'react';
export default class UserComponent extends Component{
    state={
        user:[],
        isEditMode:false,
        userObject:{
            name:"",
            username:"",
            email:"",
            phone:"",
            website:"",
            userId:1,
        },
    };
    resetState=()=>{
        this.setState({
            userObject:{
                name:"",
                username:"",
                email:"",
                phone:"",
                website:"",
                userId:1,

            },
            isEditMode:false,
        })
    }

    onEditClickHandler=(id)=>{
      const editObject =this.state.user.find((user)=>user.id===id);
      if (editObject) {
          this.setState({userObject:editObject,isEditMode:true})
      };
  };

  onChangeHolder = (event) => {
    const { name, value } = event.target;

    const userObjectCopy = this.state.userObject;
    userObjectCopy[name] = value;

    this.setState({ userObject: userObjectCopy });

  };

onCancelClickHandler=(event)=>{
    event.preventDefault();
    this.resetState();
}


onDeleteClickHandler=(id)=>{

    axios
    .delete("https://jsonplaceholder.typicode.com/users/"+id)
    .then((response)=>{
        console.log(response);
        this.fetchData();
        alert("Deleted")
    });
};


    onUserFormSubmitClick=(event)=>{
        event.preventDefault();
        console.log(this.state);
        if(this.state.isEditMode){
            axios
            .put(
                "https://jsonplaceholder.typicode.com/users/"+
                this.state.userObject.id,
                this.state.userObject
            ).then((response)=>{
                console.log(response);
                this.fetchData();
                alert("User Updated");
                this.resetState();
            });
        }else{
            axios.post( "https://jsonplaceholder.typicode.com/users",this.state.userObject).then((response)=>{
                console.log(response);
                this.fetchData();
                alert("User created");
                this.resetState();
            });
        }


    };    
    render() {
        return (
             <>
                <h1>Im user Component</h1>
                <form onSubmit={this.onUserFormSubmitClick}>
                <label>name</label>
            <input 
            name="name" 
              value={this.state.userObject.name}
                onChange={this.onChangeHolder}
            />
            <label>username</label>
            <input 
            name="username" 
              value={this.state.userObject.username}
                onChange={this.onChangeHolder}
            />
            <label>email</label>
            <input 
            name="email" 
              value={this.state.userObject.email}
                onChange={this.onChangeHolder}
            />
            <label>Phone</label>
            <input 
            name="phone" 
              value={this.state.userObject.phone}
                onChange={this.onChangeHolder}
            />
            <label>website</label>
            <input 
            name="website" 
              value={this.state.userObject.website}
                onChange={this.onChangeHolder}
            />


        <button type="submit">{this.state.isEditMode?"Update":"Submit"}</button>
            <button onClick={this.onCancelClickHandler}>Cancel</button>

                </form>


                {this.state.user.map((user, index) => (
          <div key={index}>
            <div>
              {index + 1}..{user.title}
            </div>
            <button
              onClick={() => {
                this.onDeleteClickHandler(user.id);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                this.onEditClickHandler(user.id);
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
    componentDidMount=()=>{
        this.fetchData(); 
   
       }
   
   
       fetchData() {
           axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
               console.log();
               this.setState({ user: response.data });
   
           });
       }
       
}