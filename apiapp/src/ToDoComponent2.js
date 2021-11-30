import axios from 'axios';
import React, { Component } from 'react';
export default class ToDoComponent2 extends Component{

    state={
        todo:[],
        isEditMode:false,
        todoObject:{
            title:"",
            Boolean:true,
            userId:1,
        },
        
    };
    resetState=()=>{
        this.setState({
          postObject:{
            title:"",
            Boolean:true,
            userId:1,
          },
          isEditMode:false,
        })
      }
    onEditClickHandler=(id)=>{
        const editObject =this.state.todo.find((todo)=>todo.id===id);
        if (editObject) {
            this.setState({todoObject:editObject,isEditMode:true})
        };
    };
    onChangeHolder = (event) => {
        const { name, value } = event.target;

        const todoObjectCopy = this.state.todoObject;
        todoObjectCopy[name] = value;

        this.setState({ todoObject: todoObjectCopy });

      };

    onCancelClickHandler=(event)=>{
        event.preventDefault();
        this.resetState();
    }
 

    onDeleteClickHandler=(id)=>{

        axios
        .delete("https://jsonplaceholder.typicode.com/todos/"+id)
        .then((response)=>{
            console.log(response);
            this.fetchData();
            alert("Deleted")
        });
    };

onFormSubmitClick=(event)=>{
    event.preventDefault();
    console.log(this.state);
    if (this.state.isEditMode) {
    axios
    .put("https://jsonplaceholder.typicode.com/todos/"+
       
        this.state.todoObject.id,
        this.state.todoObject


    )
    .then((response)=>{
        console.log(response);
        this.fetchData();
        alert("Updated");
        this.resetState();
        
    });

}else{
    axios.post("https://jsonplaceholder.typicode.com/todos",this.state.todoObject).then((response)=>{
        console.log(response);
        this.fetchData();
        alert("Created");
        this.resetState();
    });
}
};
    render(){
        return(
            <>
               
               <h1>     Im in To Do Component</h1>

               <form onSubmit={this.onFormSubmitClick}>
            <label>Title</label>
            <input 
            name="title" 
              value={this.state.todoObject.title}
                onChange={this.onChangeHolder}
            />

            
            <label>Completed?</label>
            <input 
            name="completed" 
                value={this.state.todoObject.Boolean}
                    onChange={this.onChangeHolder}
            />

        <button type="submit">{this.state.isEditMode?"Update":"Submit"}</button>
            <button onClick={this.onCancelClickHandler}>Cancel</button>

        </form>


               {this.state.todo.map((todo,index) =>(
             <div key={index}>
                    <div>
                        {index+1}.{todo.title}
                    </div>
                    <button onClick={()=>{
                        this.onDeleteClickHandler(todo.id)
                    }}
                    >
                    Delete</button>
                    <button onClick={()=>{
                        this.onEditClickHandler(todo.id)
                    }}
                    >
                    Edit</button>
             </div>
                ))
            }
               
            </>
        );
    }

    componentDidMount=()=>{
     this.fetchData(); 

    }


    fetchData() {
        axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
            console.log();
            this.setState({ todo: response.data });

        });
    }
    
    }
