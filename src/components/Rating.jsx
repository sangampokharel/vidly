import React, { Component } from 'react'

export default class Rating extends Component {
    
    checkLiked=()=>{
        let classses='fa fa-heart';
        if(!this.props.liked){
            classses+='-o'
        }
        return classses;
    }
 
    render() {
    
        return (
            <div>
                <i className={this.checkLiked()} onClick={this.props.onClick} ></i>
            </div>
        )
    }
}
