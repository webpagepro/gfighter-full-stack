import React, { Component } from 'react';

//import logo from './logo.svg';  import Search from './components/Search';
import { Row, Container,  } from 'reactstrap'
import './App.css';
import Search from './components/Search.js';
import Header from './components/Header.js';
import TopNavBar from './components/TopNavBar';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Container> 
       
           <Header/><TopNavBar/>
          <Search/>
       <Row>

       </Row>
        
       
     <Footer copy={2019}/>
     </Container> </div>
    );
  }
}

export default App;
