import React, { Component } from 'react'

import { Form, FormGroup, Label, Input } from 'reactstrap'


class Search extends Component{

_onChange = (e, changeFilter) => changeFilter(e.target.value)

 state = {
     filter: "", 
     changeFilter: ""
    } 

   render(){
        return (
        <Form>
            <FormGroup>
                <Label for="searchByFighter">Search By Fighter</Label>
                <Input 
                    type="text" 
                    name="searchByFighter" 
                    id="searchByFighter" 
                    placeholder="e.g. manny pacquaio" 
                    value={this.state.filter}
                    onChange={e => this._onChange(e, this.state.changeFilter)} 
                />
            </FormGroup>
        </Form>
    )
}
}
export default Search