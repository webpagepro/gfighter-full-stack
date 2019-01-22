import React, { Component } from 'react'
import Fighter from './Fighter'
import Search from './Search'

class Fighters extends Component {
    state = ({
        filter: '',
        changeFilter: ''
        
    })

    changeFilter = (e) => {
        this.setState({ fightersf : {
            ...this.state.fighter,
            name : e.target.value
        }   
        })
    }

    render() {
        console.log("Fighters filter: ", this.state.filter)
        console.log("Fighters changeFilter: ", this.state.changeFilter)
        console.log("Fighters this: ", this.props)

        if (!this.props.fighters) {
            return <div>loading</div>
        }

        let listOfFighters = this.props.fighters.filter(fighter => fighter.name.includes(this.state.filter)) 

            .map(fighter => <Fighter key={fighter.id} fighter={fighter} 
            removeFighterFromList={this.props.removeFighterFromList} 
            changeFilter={this.state.changeFilter} 
            filter={this.state.filter} 
            routeChange={this.props.routeChange}
             />)

console.log("filter", this.filter)
        return (

            <div className="list">
            
                            <Search
                                    filter={this.state.filter}
                                    changeFilter={this.state.changeFilter}
                                    fighters={this.props.fighters}
                                    routeChange={this.props.routeChange}
                                />
                                

                {listOfFighters} 

            </div>
        )
    }
}

export default Fighters;
