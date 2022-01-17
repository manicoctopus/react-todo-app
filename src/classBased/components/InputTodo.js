import React, { Component } from "react";

class InputTodo extends Component {
    state = {
        title: ""
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.title);
        if (this.state.title.trim()) {
            this.props.addTodoProps(this.state.title.trim());
            this.setState({
                title: "",
            })
        } else {
            alert("Please write item")
        };
    };
    onChange = (e) => {
        console.log("hello");
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input 
                    type="text" 
                    placeholder="Add Todo..." 
                    value={this.state.title} 
                    name="title"
                    onChange={this.onChange}
                />
                <button className="input-submit">Submit</button>
            </form>
        );
    }
}

export default InputTodo