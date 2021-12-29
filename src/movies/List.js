import React from 'react'
import Cards from './Cards'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'

const List = ({ title,newrating, login, movies}) => {
    return (
<div  className='list-movies'>            


{movies.filter(el=>el.title.toUpperCase().includes(title.toUpperCase().trim())    && el.rate>=newrating   ).map(el=>  <Cards el={el}/>   )}
      
{/* {   login ?  movies.map(el=>   <Cards el={el}  key={el.id}   ></Cards>  )  :
             <Redirect to='/' ></Redirect>  } */}
      
        </div>
    )
}

export default List
