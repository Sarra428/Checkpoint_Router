import {React} from 'react';
import {Card, Button} from 'react-bootstrap'


function Details(props) {
    

const found= props.movies.find(el => el.id == props.match.params.id);



    return(
            <div>

<Card className="text-center">
  <Card.Header>{found.title}</Card.Header>
  <Card.Body>
  <Card.Img  src={found.posterUrl}  style={{height:"400px", width:"250px"}} />
    <Card.Text>
    {found.description}
    </Card.Text>
    <button   onClick={()=>props.history.goBack()}   >go back</button>
  </Card.Body>
  <Card.Footer className="text-muted">{found.id}</Card.Footer>
</Card>





            </div>


    )
}

export default Details