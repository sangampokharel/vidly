import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        return (
            <div>
                 <div className="form-group">
                        <label htmlFor={this.props.name} style={{textAlign:'left',display:'block'}}>{this.props.label}</label>
                        <input type={this.props.type} id={this.props.name} name={this.props.name} value={this.props.value} onChange={this.props.onChange} className="form-control" placeholder={this.props.placeholder}/>
                        {this.props.errors && <h5 className="text-danger">{this.props.errors}</h5>}
                    </div>
                    
            </div>
        )
    } 
}
