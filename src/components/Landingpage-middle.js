import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import {Container,Row,Col} from 'react-bootstrap'

const LandingMiddle =()=>
{
    return(
        <Container fluid  style={{backgroundColor:"#F8F8F8"}}>
           <Container className="align-items-center"  className="px-0 py-4">
           <Row className="justify-content-around">
                <Col className="my-5" sm={{span:7}} lg={{span:7}} >
                <h1 style={{fontSize: "4rem",fontWeight: 600}}className="mb-3">Logic</h1>
                <h4 className="mb-4">
                Stretch your analytic muscles with knights, knaves, logic gates, and more!
                </h4>
                <p>
                The beginning of our introductory math journey is Logic. Through these challenging problem solving exercises, 
                you'll construct the critical thinking skills that are the basis for mathematical reasoning.
                </p>
                <br/>
                <p>
                You'll use limited information to make predictions – eliminating the impossible to uncover the truth. This 
                course builds up to some truly mind-bending challenges!Read more
                </p>
                </Col>
                <Col className="my-5" sm={{span:4}} lg={{span:4}} >
                    <Card style={{height:"100%"}}>
                        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button block>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
                
            </Row>
           </Container>
        </Container>
    )
}
export default LandingMiddle ;