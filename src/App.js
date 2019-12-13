import React from 'react';
import {Route,Switch} from 'react-router-dom'
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import Customers from './components/Customers';
import Rental from './components/Rental';
import MoviesForm from './components/MovieForm';
import MoviesDetails from './components/MoviesDetails';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Register from './components/Register'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
     
     <Switch>
       
          <Route exact path="/movies/new" component={MoviesForm}/>
           <Route exact path="/movies/:id" component={MoviesForm}/>
           <Route exact path="/customers" component={Customers}/>
           <Route exact path="/rentals" component={Rental}/>
           <Route exact path="/movies" component={Movies}/>
           <Route exact path="/login" component={Login}/>
           <Route exact path="/register" component={Register}/>
           <Route exact path="/" component={Movies}/>
           <Route component={NotFound}/>
         

          </Switch>

    </div>
  );
}

export default App;
