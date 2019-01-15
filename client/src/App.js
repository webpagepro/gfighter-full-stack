import React, { Component } from 'react';

//import logo from './logo.svg';  import Search from './components/Search';
import { Row, Container, Table, PropTypes,  } from 'reactstrap'
import './App.css';
import Search from './components/Search.js';
import Header from './components/Header.js';
import TopNavBar from './components/TopNavBar';
import Footer from './components/Footer';
import Fighters from './components/Fighters';
import axios from 'axios';




class App extends Component {
 
  
  state={
    fighters: [],
     strength: 100
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8000/fighters/')
    const json = await response.json()
     if(!response)
     {
      console.log("failed api response")
     }  
      console.log("async: ", this)
      this.setState({fighters: json}) 
  }

  

  removeFighterFromList = id => {
    axios.patch(`http://localhost:8000/fighters/remove/${id}`)
    .then(res => {
      let otherFighters = this.state.fighters
    this.setState({ fighters: [...otherFighters.filter(fighter => fighter.id !== id), res.data]})
  console.log("App.js - removeFighterFromDebt: ", res.data)
    })
  }

  render() {

    return (    

      <div className="App">
      <Container> 
       
           <Header/>
          <Search/>
          <Table striped>
        <thead>FIGHTERS
          <tr><td><th>name</th></td><td><th>bio</th></td> <td><th>image</th></td></tr>      
   <Row className="row"><Fighters fighters={this.state.fighters} removeFighterFromList={this.removeFighterFromList} />
     </Row>   </thead>
       </Table>
     <Footer copy={2019}/>
     </Container> 
     </div>
    );
  }
}

export default App;
