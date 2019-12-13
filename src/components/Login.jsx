import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './Reuseable/Input';
export default class Login extends Component {

    state={
        accounts:{
            username:'',
            password:''
        },
        errors:{}
    }

    Schema={
        username:Joi.string().required(),
        password:Joi.string().required()
    }

    handleChange=e=>{
        const accounts={...this.state.accounts};
        accounts[e.currentTarget.name]=e.currentTarget.value;
        this.setState({
            accounts
        })
    }
    validate=()=>{
        const result=Joi.validate(this.state.accounts,this.Schema,{abortEarly:false});
        console.log(result);

        const errors={}

        if(this.state.accounts.username.trim()==='')
             errors.username="Username must be there.."
        if(this.state.accounts.password.trim()==='')
            errors.password="Password must be there..."
    
            return Object.keys(errors).length===0?null:errors
    }
    handleSubmit=e=>{
        e.preventDefault();
        // console.log('form submitted');
      const errors=this.validate();
      console.log(errors)
      this.setState({
          errors:errors || {}
      });
      if(errors) return;
    }
    render() {
        return (
            <div className="container">
                <h3>Login</h3>
                <form className="m-5 " onSubmit={this.handleSubmit} >
                    {/* <div className="form-group">
                        <label htmlFor="Username" style={{textAlign:'left',display:'block'}}>Username</label>
                        <input type="text" id="Username" name="username" value={this.state.accounts.username} onChange={this.handleChange} className="form-control" placeholder="Username"/>

                    </div> */}

                    <Input type="text" label="Username" name="username" value={this.state.accounts.username} onChange={this.handleChange} placeholder="username" errors={this.state.errors.username}/>
                    {/* <div className="form-group">
                        <label htmlFor="Password" style={{textAlign:'left',display:'block'}}>Password</label>
                        <input type="password" name="password" value={this.state.accounts.value} onChange={this.handleChange} id="Password" className="form-control"  placeholder=".........."/>

                    </div> */}
                      <Input type="password" name="password" label="Password" value={this.state.accounts.password} onChange={this.handleChange} placeholder="........." errors={this.state.errors.password}/>
                  

                    <div>
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}
