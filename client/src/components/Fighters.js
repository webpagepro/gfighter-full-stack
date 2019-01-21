import React, { Component } from 'react'
import Fighter from './Fighter'
import Search from './Search'

class Fighters extends Component {
    state = ({
        filter: '',
        changeFilter: ''
      
    })

    changeFilter = (e) => {
        this.setState({
          filter: e.target.value
        })
    }

    render() {
        console.log("Fighters: ", this.state.filter)
        console.log("Fighters: ", this.state.changeFilter)
        console.log("Fighters this: ", this.props)

        if (!this.props.fighters) {
            return <div>loading</div>
        }

        let listOfFighters = this.props.fighters

            .map(fighter => <Fighter key={fighter.id} fighter={fighter} removeFighterFromList={this.props.removeFighterFromList} changeFilter={this.changeFilter} />)


        return (

            <div className="list">
                FIGHTERS
                          {/*}  <Search
                                    filter={this.state.filter}
                                    changeFilter={this.state.changeFilter}
                                    listOfFighters={listOfFighters}
                                />
                                */}

                {listOfFighters}

            </div>
        )
    }
}

export default Fighters;
