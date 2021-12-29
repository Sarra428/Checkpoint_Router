import React,{ useState } from 'react';
import Navbar  from './Navbar';
import './App.css';
import List from './movies/List';
import {moviedata} from './Moviedata'
import {Route} from 'react-router-dom'
import Details from './Details';





function App() {
 
const [movies, setMovies]=useState(moviedata)
const [title, setTitle]=useState("")
  const [newrating, setNewrating]=useState("")
  const [login,setlogin]=useState(false)


  return (
    <div className="App">
    
      <Navbar  title={title}   setTitle={setTitle}  setNewrating={setNewrating} setMovies={setMovies}  movies={movies}  newrating={newrating}    /> 
 

      {/* <List    newrating={newrating} movies={movies} setMovies={setMovies} title={title} ></List> */}


<Route exact path='/'  render={()=>  <List   movies={movies} title={title}  newrating={newrating}  login={login}  setlogin={setlogin}   ></List>          }  />
<Route  exact  path='/details/:id'       render={(props)=> <Details {...props}  movies={movies}   ></Details> }    ></Route>



    </div>
  );
}

export default App;
