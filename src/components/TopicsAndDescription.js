import {Container,Row,Col} from 'react-bootstrap'
import CardComponent from './CardComponent'
import ExpandableCardExponent from './expandableCardComponent'
import {useState} from 'react'

const IntroComponent=()=>
{
    return(
            <Container>
                <Row className="my-5" style={{display:"flex",flexDirection:"column"}}>
                    <h3>Introduction</h3>
                    <p>Put your logic to test with warmups</p>
                </Row>
                <Row style={{minWidth:"800px"}}>
                    <Col> <CardComponent/> </Col>
                    <Col> <CardComponent/> </Col>
                    <Col> <CardComponent/> </Col>
                </Row>        
            </Container>
        )
}
const RationalComponent=()=>
{
    const[show,setShow]=useState(false)
    const updateState=()=>
        {
            setShow(true)
        }
    return(
        
        <Container fluid style={{ ...show ? {}:{overflowX: "hidden"} }}>
         <Container >
                <Row className="my-5" style={{display:"flex",flexDirection:"column"}}>
                    <Row><h3>Rational Deduction</h3></Row>
                    <Row> <p>Put your logic to test with warmups</p></Row>
                </Row>
             <div className="d-flex align-content-start flex-wrap bd-highlight " style={{...show ? {} : {marginRight:"-1000px"} }}>
              <CardComponent/>
              <CardComponent/> <CardComponent/>
              <Col className="hoverCard"> <ExpandableCardExponent  updateState={updateState}/> </Col>
               <CardComponent/> <CardComponent/>
         </div>
         </Container>
        </Container>
            
        )
}

const PuzzleComponent=()=>
{
    const[show,setShow]=useState(false)
    const updateState=()=>
    {
        setShow(true)
    }
    console.log(show)
    return(
        <Container fluid style={{ ...show ? {}:{overflowX: "hidden"} }}>
         <Container >
                <Row className="my-5" style={{display:"flex",flexDirection:"column"}}>
                    <Row><h3>Puzzle and Ridles</h3></Row>
                    <Row> <p>Put your logic to test with warmups</p></Row>
                </Row>
             <div className="d-flex align-content-start flex-wrap bd-highlight " style={{...show ? {} : {marginRight:"-1000px"} }}>
              <CardComponent/>
              <CardComponent/> <CardComponent/>
              <Col className="hoverCard"> <ExpandableCardExponent  updateState={updateState}/> </Col>
               <CardComponent/> <CardComponent/>
         </div>
         </Container>
         </Container>
            
        )
}

 export {IntroComponent,RationalComponent,PuzzleComponent}

 //style={{overflowX: "hidden"}} ,marginRight:"-1000px"