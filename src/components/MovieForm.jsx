import React, { Component } from 'react'
import Input from './Reuseable/Input';
import {saveMovie,getMovies} from '../services/fakeMovieService';
export default class MovieForm extends Component {

    state={
        movies:{
            _id:Date.now(),
            title:'',
            genre:'select',
            stock:"",
            rate:"",
        },
        errors:{}
    }


    validateOnChange=({name,value})=>{
        if(name==="title"){
            if(value.trim()==="") return 'Title must be there...'
        }
        if(name==="genre"){
            if(value.trim()==="") return 'genre must be there...'
        }
        
        if(name==="stock"){
            if(value.trim()==="") {
                return 'stock must be there...'
            }else if(value>=5){
                return 'stock must be less than 5'
            }
        }
        
        if(name==="rate"){
            if(value.trim()==="") {
                return 'Rate must be there...'
            }else if(value>=10){
                return 'Rate must less than 10..'
            }
        }
        
    }

    handleChange=e=>{
        const errors={...this.state.errors}
        const errorMessage=this.validateOnChange(e.currentTarget);
        if(errorMessage) errors[e.currentTarget.name]=errorMessage;
        else delete errors[e.currentTarget.name];


        const movies={...this.state.movies};
        movies[e.currentTarget.name]=e.currentTarget.value;
        this.setState({
            movies,
            errors
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        saveMovie(this.state.movies);

        // console.log(this.state.movies)
        {this.props.history.push('/movies')}
       
    }

    handleEdit=()=>{
        const movies={...this.state.movies};
        const id=this.props.match.params.id;
        const movie=getMovies().find(movie=>movie._id===id);
        movies.title=movie.title;
        movies.genre=movie.genre;
        movies.stock=movie.numberInStock;
        movies.rate=movie.dailyRentalRate;
       console.log(movies)
        

    }

    render() {
        this.handleEdit();
        return (
            <div className="container">
               <form onSubmit={this.handleSubmit}>
                    <Input type="text" errors={this.state.errors.title || null} value={this.state.movies.title} onChange={this.handleChange} label="title" name="title" placeholder="Enter title here..."/>
                  <div>
                      <label style={{textAlign:'left',display:'block'}}>Genre</label>
                    <select className="form-control my-3" name="genre" onChange={this.handleChange} id="genre">

                        <option value="select">select</option>
                        <option value="Action">Action</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Drama">Drama</option>
                    </select>
                    </div>
                    <Input type="number"  errors={this.state.errors.stock}  value={this.state.movies.stock} onChange={this.handleChange} label="stock" name="stock" placeholder="Enter stock here..."/>
                    <Input type="number"  errors={this.state.errors.rate}  value={this.state.movies.rate} onChange={this.handleChange} label="Rate" name="rate" placeholder="Enter Rate here..."/>
                    <button className="btn btn-primary">Add Movie</button>

               </form>
            </div>
        )
    }
}
