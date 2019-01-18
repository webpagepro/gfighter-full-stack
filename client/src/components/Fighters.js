import React, { Component } from 'react'
import Fighter from './Fighter'
import App from '../App'
import { Row, Container, Table, PropTypes,  } from 'reactstrap'


class Fighters extends Component {
 state = ({
filteredSearch:  '',
type: 'title'

 })

render(){


  if(!this.props.fighters) {
  return <div>loading</div> 
 }

 let listOfFighters = this.props.fighters

 .map(fighter => <Fighter key={fighter.id} fighter={fighter} removeFighterFromList={this.props.removeFighterFromList} />)







      return(

            <>  
        FIGHTERS
       
            {listOfFighters}
     

          </>
      )}
}

export default Fighters;
