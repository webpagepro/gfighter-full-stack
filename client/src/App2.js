import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
//import logo from './logo.svg';  import Search from './components/Search';
import { Row, Container,  } from 'reactstrap'
import './App.css';
import Search from './components/Search.js';
import Header from './components/Header.js';
import TopNavBar from './components/TopNavBar';
import Footer from './components/Footer';
import Fighters from './components/Fighters'

class App extends Component {

  state={
    fighters: []
  }
  render() {
    return (
      <div className="App">

    
<Container> 
       
       <Header/>
      <Search/>
     
        
<Row className="row"><Fighters fighters={this.state.fighters} removeFighterFromList={this.removeFighterFromList} />
 </Row>   
   
 <Footer copy={2019}/>
 </Container> 
 </div>
    );
  }
}

export default App;
