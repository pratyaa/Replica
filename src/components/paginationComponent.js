import {Container,Row,Col,Button} from 'react-bootstrap'
import React from 'react'

const Pagination=(props)=>
{

const[active,setActive]=React.useState(1)
const keyss=[1,2,3,4,5,6]
const pageUpdate=(e)=>
{
  props.pageSet(e)
  setActive(e)
   
}
    return(
        <Container className="px-5">
            <Row className="px-5">
                <Col>
                <Button variant="outline-secondary"> - </Button>
                </Col>
                {
                    keyss.map((btns)=>
                    (
                        <Col lg={1} className="px-0" >
                          <Button  value="1" key={btns} onClick={()=>pageUpdate(btns)} variant={active===btns? "warning" : "secondary"} > </Button>
                        </Col>
                    ))
                }
                
                <Col>
                <Button variant="outline-secondary"> + </Button>
                </Col>
            </Row>
        </Container>
    )
}
export default Pagination