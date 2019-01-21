import React from 'react'

import { Form, FormGroup, Label, Input } from 'reactstrap'

const _onChange = (e, changeFilter) => changeFilter(e.target.value)

export default function Search({ filteredSearch, changeFilter }) {
    return (
        <Form>
            <FormGroup>
                <Label for="searchByTitle">Search By Title</Label>
                <Input 
                    type="text" 
                    name="searchFighter" 
                    id="searchFighter" 
                    placeholder="e.g. Search fighter here" 
                    value={filteredSearch}
                    onChange={e => _onChange(e, changeFilter)} 
                />
            </FormGroup>
        </Form>
    )
}