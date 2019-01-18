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
 

      return(

            <>  
        FIGHTERS
       
           <FightersID id={this.props.fighter }  />

          </>
   )}
}

export default Fighters;
