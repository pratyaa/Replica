import {Container,Row,Col,Button} from 'react-bootstrap'
import Pagination from './paginationComponent'
import First from './FirstPagePuzzle'
import React from 'react';
import {Second,Third,Fourth,Fifth,Sixth} from './secondPageToSixthPage'
import Navbar from './Navbar'

const SecondPage=()=>
{ 
  const [activePage,setPage]=React.useState(1);
  

  const pageSet=(page)=>
  {
      setPage(page)
  }

    return(
        <Container fluid >
        <Navbar/>
        <Row>
            <Col lg={3} style={{backgroundColor:"black"}}>
            <div>
                <h4>Logic</h4>
            </div>
            </Col>
            <Col lg={5} className="py-3 my-5">
            {activePage===1?< First/> : activePage===2 ?<Second/> : activePage===3 ? <Third/> : activePage===4 ? <Fourth/> :activePage===5?<Fifth/> :activePage===6?<Sixth/>:<></>}
            </Col>
            <Col lg={4} className="py-5 " style={{borderLeft:"0.5px solid grey"}} >
            <div>
                <Pagination pageSet={pageSet}/>
            </div>
            </Col>
        </Row>

    </Container>
    )
}
export default SecondPage