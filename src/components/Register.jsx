import React, { Component } from 'react'
import Input from './Reuseable/Input';
export default class Register extends Component {
    state={
        accounts:{
            username:'',
            password:'',
            name:''
        },
        errors:{}
    }

    
    validateOnChamge=({name,value})=>{
        if(name==='username'){
            if(value.trim()==="") return 'Username is required'
        }
        if(name==="password"){
            if(value.trim()==="") return 'Password is required';
        }
         if(name==="name"){
            if(value.trim()==="") return 'Name is required'
        }
    }

    handleChange=(e)=>{
        const errors={...this.state.errors};
        const errorsMessage=this.validateOnChamge(e.currentTarget);
        if(errorsMessage) errors[e.currentTarget.name]=errorsMessage;
        else delete errors[e.currentTarget.name];
        const accounts={...this.state.accounts};
         accounts[e.currentTarget.name]=e.currentTarget.value;
       

        this.setState({
            accounts,
            errors
        })

    }


    validate=()=>{
        const errors={}
        if(this.state.accounts.username.trim()===""){
                errors.username="username must be there..."
        }else if(this.state.accounts.password.trim()===""){
             errors.password="Password must be there..."
        }else if(this.state.accounts.name.trim()===""){
             errors.name="Name must be there..."
        }

        return errors;
    }

   

    handleSubmit=e=>{
        e.preventDefault();
        const errors=this.validate();
        if(errors) return;
        this.setState({
            errors
        })
    }
    render() {
        return (
            <div className="container">
                <h3>Register</h3>
                <form onSubmit={this.handleSubmit}> 
                <Input errors={this.state.errors.username} type="text" name="username" label="Username" value={this.state.username} onChange={this.handleChange} placeholder="Username"/>
                <Input errors={this.state.errors.password} type="password" name="password" label="Password" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
                <Input errors={this.state.errors.name} type="text" name="name" label="Name" value={this.state.name} onChange={this.handleChange} placeholder="Name" />
                <button className="btn btn-primary">Register</button>
                </form>
            
            </div>
        )
    }
}
