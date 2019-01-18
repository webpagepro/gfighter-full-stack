import React, { Component } from 'react'
import App from '../App'
import { Row, Container, Table, PropTypes,  } from 'reactstrap'
import FightersID from './FightersID';


class Fighters extends Component {
 state = ({
filteredSearch:  '',
type: 'title'

 })
 
render(){
 
console.log("FighterIndividual: ", this.props.id)
      return(

            <>  
        FIGHTERS
       
           <FightersID id={this.props.id }  />

          </>
   )}
}

export default Fighters;
