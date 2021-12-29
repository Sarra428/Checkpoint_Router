
import Add from './Add';
import Rating from './Rating';




function Navbar({title,setTitle, movies, setMovies, setNewrating}){
   
 



    return (
        
<nav className="navbar" >
  <form className="form-inline">
    <input    className="form-control" type="search" placeholder="Search" aria-label="Search"   style={{marginLeft:"20px"}}  onChange={(e)=> setTitle(e.target.value)}/>
    {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit" value={searchTerm}
        onChange={handleChange}   >Search</button> */}
  </form>

  <Rating   setNewrating={setNewrating}></Rating>
   <Add    setMovies={setMovies}   movies={movies}    ></Add>
</nav>


      
    );
};
export default Navbar;