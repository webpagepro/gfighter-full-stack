import React, { Component } from 'react';
import { Button, Table, CardImg } from 'reactstrap'
import axios from 'axios';


const sbutton = {
  styles: {
    TextAlign: 'right',
    marginLeft: '70%',
    marginBottom: '20px',
    marginTop: '10px'
  }
}
const leftColumn = {
  styles: {
    TextAlign: 'right',
    marginLeft: '0%',
    marginBottom: '2px',
    marginTop: '40px',
    top: '4px',
    position: 'relative'
  }
}


class Fighter extends Component {
  state = {
    fighter: {},
    editForm: false
  }


  handleChange = e => {
    let { name, value } = e.target
    this.setState({ [name]: value })
  }

  componentDidMount() {

    axios.get(`http://localhost:8000/fighters/${this.props.id}`)
      .then(res => {
        this.setState({ fighter: res.data })
      })
  }

  _onClickEditShowForm = e => {
    this.setState(prev => {
      return { 
        editForm: !prev.editForm
      }
    }

    )

  }


  _onClickEdit = e => {

    axios.put(`http://localhost:8000/fighters/${this.props.id}`)
      .then(res => {
        this.setState({ fighter: res.data })
      })
  }

  render() {
    console.log(this.props.id)

    return (

      <div>
        <Table striped>
          <tbody>
            <tr>
              <th scope="row"></th>
              <td className="name-single">{this.state.fighter.name}</td>
              <td className="bio-single">{this.state.fighter.bio}</td>
              <td className="power-single">{this.state.fighter.strength}</td>
              <td className="image_url-single"><CardImg src={this.state.fighter.image_url} alt={this.state.fighter.name} /></td>

            </tr>
          </tbody>
        </Table>

        <div className="button-delete-single"><Button onClick={() => this.state.removeFighterFromList(this.state.fighter.id)} style={sbutton.styles}>Remove Fighter {this.state.fighter.id}</Button></div>
        <div className="button-edit"><Button onClick={this._onClickEditShowForm} style={sbutton.styles}>Edit Fighter {this.state.fighter.id}</Button></div>

        {this.state.editForm ?
          <form class="editFighterForm">
            <input
              type="text"
              value={this.state.fighter.name}
              name="name"
              placeholder="Search fighters here..."
              onChange={this.handleChange}
            />
            <br />
            <input
              type="textarea"
              value={this.state.fighter.bio}
              name="bio"
              placeholder="bio"
              onChange={this.handleChange}
            />
            <br />
            <input
              type="text"
              value={this.state.fighter.strength}
              name="strength"
              placeholder="strength"
              onChange={this.handleChange}
            />

            <br />
            <input
              type="text"
              value={this.state.fighter.image_url}
              name="image_url"
              placeholder="image_url"
              onChange={this.handleChange}
            />

          </form>

          : null}



      </div>
    )
  }

}
export default Fighter