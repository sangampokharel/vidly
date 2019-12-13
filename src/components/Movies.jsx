import React from 'react';
import {getMovies} from '../services/fakeMovieService';
import {Link} from 'react-router-dom'
// import Pagination from './Pagination';
import Rating from './Rating';
import Input from './Reuseable/Input';
// import Search from './Search';
class Movies extends React.Component{
    state={
        movies:getMovies(),
        currentPage:1,
        pageSize:2,
        search:{
            titleSearch:''
        }
     
    }

    handleDelete=id=>{
        console.log('handle delete',id)
        const filteredList=this.state.movies.filter(movie=>movie._id!==id);
        this.setState({
            movies:filteredList
        })
    }

    handleLike=(movie)=>{
        const movies=[...this.state.movies]; //[{},{},{},{}]
        const index=movies.indexOf(movie); // [0,1,2,3]
        movies[index].like=!movies[index].like;
       this.setState({
        movies
       })

    }

    handlePage=(page)=>{
        this.setState({
            currentPage:page
        })
    }

 
   

    renderList=()=>{
        return this.state.movies.map(movie=>{ return (
        <tr key={movie._id}>
            <td ><Link to={`/movies/${movie._id}`}>{movie.title}</Link></td>
            <td >{movie.genre}</td>
            <td >{movie.numberInStock}</td>
            <td><Rating liked={movie.like} onClick={()=>this.handleLike(movie)} /></td>
            <td >{movie.dailyRentalRate}</td>
            <td className="btn btn-danger" onClick={()=>this.handleDelete(movie._id)}>Delete</td>
        </tr>)})
    }

 

    render(){
        return(
            <div className="container">
                <p>There are {this.state.movies.length} movies in the list..</p>
                <Link to="/movies/new" className="btn btn-primary m-2">New Movie</Link>
                  <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Gender</th>
                        <th>Stock</th>
                        <th>Rating</th>
                        <th>Rate</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {this.renderList()}
                </tbody>
              </table>
              
           </div>
        )
    }
}

export default Movies;

{/* <Pagination pageSize={this.state.pageSize} currentPage={this.state.currentPage} totalCount={this.state.movies.length} handlePage={this.handlePage}/> */}

