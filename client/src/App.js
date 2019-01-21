import React, { Component } from 'react';

//import Search from './components/Search';
import {Container, Table } from 'reactstrap'
import './App.css';
import axios from 'axios';
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
    fighter: {},
    strength: 100, 
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


  render() {
    return (      

    <div className="App"><Container>
    
     <Router><ul>


    <li><Link to='/fighters/3' params={{id: this.state.fighters}}>Test</Link></li>
    <Table>
    </Table>
<Switch>

            <Route exact path="/" render={(props) => <Fighters fighters={this.state.fighters} removeFighterFromList={this.removeFighterFromList} 
              getIndividualFighter={this.getIndividualFighter} />} />
            <Route exact path='/fighters/:id' render={(data) =>  {
                console.log("APP: ", data)
                return <FighterIndividual id={data.match.params.id} removeFighterFromList={this.removeFighterFromList}/>
            }  }/> 
           
</Switch>
      
     
       </ul>
       
       </Router>
       </Container>
      </div>
    );
  }
}
export default App

       