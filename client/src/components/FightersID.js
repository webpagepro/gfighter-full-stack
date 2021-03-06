import React, { Component } from 'react';
import { Button, Table, CardImg } from 'reactstrap'
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route, Switch, Link, Redirect
} from 'react-router-dom'
import {withRouter, browserHistory } from 'react-router-dom'


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
    id: "",
    name: "",
    bio: "",
    image_url: "",
    strength: "",
    redirect: false,
    editForm: false,
    editedForm: false,
    editFormButton: false,
    path: '/'
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
    this.setState({
      fighter: {
        ...this.state.fighter,
        [name]: value,
      }
      
    })
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
        name: this.state.fighter.name,
        bio: this.state.fighter.bio,
        image_url: this.state.fighter.image_url,
        strength: Number(this.state.fighter.strength)
      })
      .then(res => {
        this.setState({editForm: false})
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  Home = () => {
    return (<h1>Back to Fighter List</h1>)
  }

  Fighter = () => {
    return (<h1>Refresh</h1>)
  }

  setRedirect = () => {
    alert('test redirect')
this.setState({
  redirect: true
})
  }

  renderRedirect = () => {
   // alert('test redirect')
    if (this.state.redirect) {
      return <Redirect to={`/`} />
    }
  } 

 
  routeChange = () => {
    let path = '/';
   this.props.history.push(path);
  }



  render() {
 /*   console.log("PROPS: ", this)
    console.log("name ", this.state.name)
    console.log("bio ", this.state.bio)
    console.log("image_url ", this.state.image_url)
    console.log("strength ", this.state.strength)
  */

    return (

      <div>
        <Table striped>
          <th>Fighter</th><th>Description</th><th>Strength</th>

          <tbody>

            <tr>

              <td className="name-single">{this.state.fighter.name}</td>
              <td className="bio-single">{this.state.fighter.bio}</td>
              <td className="power-single">{this.state.fighter.strength}</td>
              <td className="image_url-single"><CardImg src={this.state.fighter.image_url} alt={this.state.fighter.name} /></td>

            </tr>
          </tbody>
        </Table>

        <div className="button-delete-single"><Button onClick={
          () => this.props.removeFighterFromList(this.props.id, this.props.history)} 
        
         style={sbutton.styles}>Remove Fighter {this.props.id}</Button></div>

        <div className="button-edit"><Button onClick={this._onClickEditShowForm} 
        style={sbutton.styles}>Edit Fighter {this.state.fighter.id}</Button></div>


        <div className="editForm-container">


          {this.state.editForm ?
            <form className="editFighterForm" onSubmit={this._onClickEditShowForm}>
              <label>Name</label><input
                type="text"
                value={this.state.fighter.name}
                name="name"
                onChange={this.handleChange.bind(this)}
              />

              <label>Strength</label><input
                type="Number"
                value={this.state.fighter.strength}
                name="strength"
                onChange={this.handleChange.bind(this)}
              />

              <label>image_url</label><input
                type="text"
                value={this.state.fighter.image_url}
                name="image_url"
                onChange={this.handleChange.bind(this)}
              />
              <label>Bio</label><input
                type="textArea"
                value={this.state.fighter.bio}
                name="bio"
                onChange={this.handleChange.bind(this)}
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

//export default Fighter
export default withRouter(Fighter)
