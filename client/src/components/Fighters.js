import React, { Component } from 'react'
import Fighter from './Fighter'
//import Search from './Search'

class Fighters extends Component {
 state = ({
filteredSearch:  ''
 })



 changeFilter = (options) => {
      this.setState({filteredSearch: options})
  }

render(){


  if(!this.props.fighters) {
  return <div>loading</div> 
 }

 let listOfFighters = this.props.fighters

 .map(fighter => <Fighter key={fighter.id} fighter={fighter} removeFighterFromList={this.props.removeFighterFromList} />)


      return(

            <div className="list">  
        FIGHTERS {/*<Search change={this.changeFilter} filteredSearch={this.filteredSearch}/> */}

       
            {listOfFighters}
     

          </div>
      )}
}

export default Fighters;
