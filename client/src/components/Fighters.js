import React, { Component } from 'react'
import Fighter from './Fighter'
import Search from './Search'

class Fighters extends Component {
    state = ({
        filter: ''
      
    })

    changeFilter = (e) => {
        this.setState({
          filter: e.target.value
        })
    }
    
    render() {

        if (!this.props.fighters) {
            return <div>loading</div>
        }

        let listOfFighters = this.props.fighters

            .map(fighter => <Fighter key={fighter.id} fighter={fighter} removeFighterFromList={this.props.removeFighterFromList} />)


        return (

            <div className="list">
                FIGHTERS
                            <Search
                                    filter={this.state.filter}
                                    changeFilter={this.state.changeFilter}
                                    listOfFighters={listOfFighters}
                                />

                {listOfFighters}

            </div>
        )
    }
}

export default Fighters;
