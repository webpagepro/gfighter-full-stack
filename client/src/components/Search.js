import React, { Component } from 'react'

import { Form, FormGroup, Label, Input } from 'reactstrap'


class Search extends Component{

    state = {
     filter: "", 
     changeFilter: ""
    } 
 
  /*  _onChange = e => {
        let { name, value } = e.target
        this.setState({ 
          [name] : value     
          })
          console.log("name: ", name)
        console.log("value: ", value)
      }
   */ 

    _onChange = (e) => {
        let { name, value } = e.target
        this.setState({ filter : {
            ...this.state.filter,
            [name] : value
        }   
        })
        console.log("Fighters name: ", name)
        console.log("Fighters value: ", value)
    }


   render(){

    console.log("Search: ", this)

        return (
        <Form>
            <FormGroup>
                <Label for="searchByFighter">Search By Fighter</Label>
                <Input 
                    type="text" 
                    name="searchByFighter" 
                    id="searchByFighter" 
                    placeholder="e.g. manny pacquaio" 
                    value={this.filter}
                    onChange={e => this._onChange(e, this.changeFilter)} 
                />
            </FormGroup>
        </Form>
    )
}
}
export default Search