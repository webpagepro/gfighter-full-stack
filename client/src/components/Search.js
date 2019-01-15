import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';


const searchInput = {
    styles: {
        marginLeft: "35%",
        width: "30%"
    }
}

const searchHere = {
    styles: {
        fontSize: "20px",
        marginTop: "3%",
        marginLeft: "42%"
    }
}

const button = {
    styles: {
        marginTop: "1%",
        marginLeft: "47.5%"
    }
}

class Search extends Component {
    render () {
        return (
            <>
            <Form>
                <FormGroup>
                    <Label style={searchHere.styles}for="exampleEmail">Search For a Fighter Here</Label>
                    <Input onChange={this.props.filterBookSearch} style={searchInput.styles} type="text" name="search" id="" placeholder="..." />
                    <Button style={button.styles} color="primary" size="sm">Search</Button>
                </FormGroup>
            </Form>
            </>
        )
    }
}









export default Search;