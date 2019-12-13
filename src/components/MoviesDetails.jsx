import React, { Component } from 'react'

export default class MoviesDetails extends Component {
    render() {
        
    const id=this.props.match.params.id;

        return (
            <div>
                Movies No.{id}
            </div>
        )
    }
}
