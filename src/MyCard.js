import React, { Component } from 'react'
import {Card, Container,Row,Col,CardTitle,CardImg,CardBody, CardSubtitle } from 'reactstrap';
import './MyCard.css';

class MyCard extends Component {
   
  render() 
  {
    return (
        <div>
        <Card className="car">
          <CardImg top width="50" height="50" src="https://storage.googleapis.com/iex/api/logos/AAPL.png" alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.props.stock.CompanyName}</CardTitle>
            <CardSubtitle>{this.props.stock.Description}</CardSubtitle>
            <Container>
        <Row>
          <Col >MP</Col>
          <Col class="col">LSP</Col>
          <Col class="col">LSS</Col>
        </Row>
        <Row >
          <Col>.col</Col>
          <Col class="row">.col</Col>
          <Col class="row">.col</Col>
        </Row>
        <Row>
        <Col >Last Sale Time</Col>
          <Col class="col">Last Updated</Col>
        </Row>
        <Row >
        <Col class="col">Last Sale Time</Col>
          <Col class="col">Last Updated</Col>
        </Row>
        <Row >
        <Col class="col">Sector</Col>
          <Col class="col">.col</Col>
        </Row>
        <Row >
          <Col class="col">Company</Col>
          <Col class="col">.col</Col>
        </Row>
        <Row >
          <Col class="col">Industry</Col>
          <Col class="col">.col</Col>
        </Row>
        <Row >
          <Col>CEO</Col>
          <Col class="col">.col</Col>
        </Row>
        <Row>
          <Col >Description</Col>
          <Col class="col">.col</Col>
        </Row>

        </Container>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default MyCard;