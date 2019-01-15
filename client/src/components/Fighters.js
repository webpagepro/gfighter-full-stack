import React, { Component } from 'react'
import Fighter from './Fighter'
import { Row, Container, Table, PropTypes,  } from 'reactstrap'


class Fighters extends Component {
 state = ({
filteredSearch:  '',
type: 'title'

 })

render(){

   let listOfFighters = this.props.fighters

   //.filter(fighter => fighter.title.includes(this.state.filteredSearch))
   .map(fighter => <Fighter key={fighter.id} fighter={fighter} removeFighterFromList={this.props.removeFighterFromList} />)
 console.log("this.props.fighters ", this.props.fighters)




      return(

            <>   <Table striped></Table> 
        <thead>FIGHTERS
          <tr><td><th>name</th><th>bio</th> <th>image</th><th>power</th></td></tr>
        <tr>    <td>
            {listOfFighters}
            </td>
          </tr>
</thead>
          </>
      )}
}

export default Fighters;
