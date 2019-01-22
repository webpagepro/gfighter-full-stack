import React, { Component } from 'react'
import FightersID from './FightersID';


class Fighters extends Component {
 state = ({
      filter: '',
      changeFilter: ''

 })
 
render(){
 
console.log("FighterIndividual: ", this.props)
      return(

            <>  
        FIGHTERS
       
           <FightersID id={this.props.id }  
           removeFighterFromList={this.props.removeFighterFromList} 
           changeFilter={this.state.changeFilter} 
            filter={this.state.filter} 
            routeChange={this.props.routeChange}
            data={this.props.data}
            />

          </>
   )}
}

export default Fighters;
