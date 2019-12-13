import React, { Component } from 'react'
import Input from './Reuseable/Input';
export default class Search extends Component {

    state={
       
    }
   

    render() {
        return (
            <div>
                <Input type="search" name={this.props.name} value={this.props.value} onChange={()=>this.props.onChange(e.currentTarget.value)} placeholder="search by title..." />
           </div>
        )
    }
}
