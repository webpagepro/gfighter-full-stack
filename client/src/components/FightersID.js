import React, { Component } from 'react';
import { Button, Table, CardImg } from 'reactstrap'
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route, Switch, Link
} from 'react-router-dom'

const sbutton = {
  styles: {
    TextAlign: 'right',
    marginLeft: '70%',
    marginBottom: '20px',
    marginTop: '10px'
  }
}

class Fighter extends Component {
  state = {
    fighter: {},
    editForm: false,
    editFormButton: false,
    id: "",
    name: "",
    bio: "",
    image_url: "",
    strength: "",
    redirect: false,
    inputVal: ''

  }

  componentDidMount() {
    axios.get(`http://localhost:8000/fighters/${this.props.id}`)
      .then(res => {
        this.setState({ fighter: res.data })
      })
      .catch((err) => {
                console.error('err', err);
            });
  }

  handleChange = e => {
    let { name, value } = e.target
    this.setState({ [name]: value })
    console.log("value", value)
  }


  _onClickEditShowForm = e => {
    this.setState(prev => {
      return {
        editForm: !prev.editForm
      }
    })
  }

  _onClickSubmitEdit = e => {
    axios.put(`http://localhost:8000/fighters/${this.state.fighter.id}`,
     {
                name: this.state.name,
                bio: this.state.bio,
                image_url: this.state.image_url,
                strength: Number(this.state.strength)
    })
      .then(res => { 
         

        })
      .catch(function (error) {
        console.log(error);
      })
  }

  Home = () => {
    return (<h1>Back to Fighter List</h1>)
}  
  render() {
                console.log("this.state.fighter.id: ", this.state.fighter.id)
                console.log("name ", this.state.name)
                console.log("bio ", this.state.bio)
                console.log("image_url ", this.state.image_url)
                console.log("strength ", this.state.strength)
               let filler = {
                id: this.state.id,
                name: this.state.name,
                bio: this.state.bio,
                image_url: this.state.image_url,
                strength: this.state.strength,
              
               }
            
    return (


      <div>
        <Table striped>

          <tbody> <th>Fighter</th><th>Description</th><th>Strength</th>
         
            <tr>

              <td className="name-single">{this.state.fighter.name}</td>
              <td className="bio-single">{this.state.fighter.bio}</td>
              <td className="power-single">{this.state.fighter.strength}</td>
              <td className="image_url-single"><CardImg src={this.state.fighter.image_url} alt={this.state.fighter.name} /></td>

            </tr>
          </tbody>
        </Table>

        <div className="button-delete-single"><Button onClick={() => this.props.removeFighterFromList(this.props.id)} style={sbutton.styles}>Remove Fighter {this.props.id}</Button></div>
        <div className="button-edit"><Button onClick={this._onClickEditShowForm} style={sbutton.styles}>Edit Fighter {this.state.fighter.id}</Button></div>

        <div className="editForm-container">

        
          {this.state.editForm ?
            <form className="editFighterForm">
              <label>Name</label><input
                type="text"
                value= {this.state.name}
                name="name"
                onChange={this.handleChange}
              /> 

             <label>Strength</label><input
                type="Number"
                value={this.state.strength}
                name="strength"
                onChange={this.handleChange}
              />

              <label>image_url</label><input
                type="text"
                value={this.state.fighter.image_url}
                name="image_url"
                onChange={this.handleChange}
              />
              <label>Bio</label><input
                type="textArea"
                value={this.state.bio}
                name="bio"
                onChange={this.handleChange}
              /> 
              <Button onClick={this._onClickSubmitEdit} style={sbutton.styles}>Update Fighter {this.state.fighter.id}</Button>
            </form>

            : null}




        </div>
        <Link to='/' className="backTo">Back to Fighter List</Link>
      </div>
    )
  }

}
export default Fighter