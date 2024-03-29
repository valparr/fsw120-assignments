import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css' 

function SuperHero(props) {
    return (
        <div className="mycontainer">
            <br />
            <Container fluid>
                <Row>
                    <Col></Col>
                    <Col xs={1} className="cell"><img style={{height:"250px"}} src={props.imageName} onClick={() => alert(props.catchPhrase)} /></Col>
                    <Col className="cell" style={{backgroundColor:props.bgcolor, borderRadius:"25px", height:"350px"}} onClick={() => alert(props.catchPhrase)}>
                        <p style={{fontSize:"40px", fontWeight:"900", color:props.color, textAlign:"center"}}>{props.name}</p>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
}

export default SuperHero;