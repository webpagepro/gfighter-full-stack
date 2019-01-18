import React, { Component } from 'react';

import Search from './components/Search';
import { Row, Container, Table, PropTypes,  } from 'reactstrap'
import './App.css';
import App2 from './App2'
import axios from 'axios';
import { render, IndexRoute} from 'react-dom';
import {
  BrowserRouter as Router,
  Route, Switch, Link
} from 'react-router-dom'
import Fighters from './components/Fighters';
import FighterIndividual from './components/FighterIndividual';


class App extends Component {
 Home = () => {
  return (<h1>Home</h1>)
 }
  
  state={
    fighters: [],
     strength: 100,
     filteredSearch: ''
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

  filteredFighterSearch = (e) => {
    this.setState({
      filteredSearch: e.target.value
    })
}

  removeFighterFromList = id => {
    axios.delete(`http://localhost:8000/fighters/${id}`)
    .then(res => {
      let otherFighters = this.state.fighters
    this.setState({ fighters: [...otherFighters.filter(fighter => fighter.id !== id)]})
  console.log("App.js - removeFighterFromDebt: ", res.data)
    })
  }

  addFighterToList = id => {
    axios.post(`http://localhost:8000/fighters/${id}`)
    .then(res => {
      let otherFighters = this.state.fighters
    this.setState({ fighters: [...otherFighters.filter(fighter => fighter.id !== id), res.data]})
  console.log("App.js - addFighterToList: ", res.data)
    })
  }


  getIndividualFighter = id => {
    axios.get(`http://localhost:8000/fighters/${id}`)
    .then(res => {
    this.setState({fighters: res.data})
  console.log("App.js - getIndividualFighter: ", res.data)
    })
    console.log("getIndividualFighter: ", this.res.data)

  }

  render() {

    return (      
    
    <div className="App">
     <Search fighters={this.state.fighters.filter(ordered => ordered.name.includes(this.state.filteredSearch))} filteredFighterSearch={this.filteredFighterSearch} />
     <Router><ul>

    <li><Link to='/'>Home</Link></li>
    <li><Link to='/fighters/:id' params={{id: this.state.fighters}}>Test</Link></li>
<Switch>
            <Route exact path="/" render={(props) => <Fighters fighters={this.state.fighters} removeFighterFromList={this.removeFighterFromList} filteredSearch={this.state.filteredSearch}  getIndividualFighter={this.getIndividualFighter} />} />
            <Route exact path='/fighters/:id' render={(props) =>  <FighterIndividual id={this.state.fighters}/>} /> 
           
</Switch>
      
     
       </ul>
       
       </Router>
      </div>
    );
  }
}
export default App

       