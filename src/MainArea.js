import React, { Component } from 'react'
import MyCard from './MyCard';
import {Container,Row,Col} from 'reactstrap';
class MainArea extends Component {
    constructor()
    {
        super();
        this.state={
            stockcoll: [
                {
                    CompanyName: "Alap",
                    CEO:"SOme xyx",
                    Description:"ddd"
                },
               
                {
                    CompanyName: "Aap",
                    CEO:"SOme xyx",
                    Description:"ddd"
                },
                {
                    CompanyName: "ap",
                    CEO:"SOme xyx",
                    Description:"ddd"
                },
                
            ]

    }
}
  render() {
    let MyCards=this.state.stockcoll.map(stock => {
        return(
            <Col>
          <MyCard stock ={stock}/>
          </Col>
        )
    })



    return (
      <Container fluid>
      <Row>
        {MyCards}  
      </Row>
      <br/>
       <br/>
      <Row>
        {MyCards}  
      </Row>
      <br/>
      <br/>
      <Row>
        {MyCards}  
      </Row>
      <br/>
      <Row>
        {MyCards}  
      </Row>
      <br/>
      <br/>
      </Container>
    )
  }
}

export default MainArea;