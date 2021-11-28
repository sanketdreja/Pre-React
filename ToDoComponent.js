import axios from 'axios';
import React, { Component } from 'react';
export default class ToDoComponent extends Component{

    state={
        todo:[],
        
    }

    onDeleteClickHandler=(id)=>{

        axios
        .delete("https://jsonplaceholder.typicode.com/todos/"+id)
        .then((response)=>{
            console.log(response);
            this.fetchData();
            alert("Deleted")
        })
    }

    render(){
        return(
            <>
               
               <h1>     Im in To Do Component</h1>
               {this.state.todo.map((todo,index) =>(
             <div key={index}>
                    <div>
                        {index+1}..{todo.title}
                    </div>
                    <button onClick={()=>{
                        this.onDeleteClickHandler(todo.id)
                    }}
                    >
                    Delete</button>
             </div>
                ))
            }
               
            </>
        )
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