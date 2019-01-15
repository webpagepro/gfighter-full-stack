import React, { Component } from 'react';
import { Button} from 'reactstrap'


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



  handleChange = e => {
    let { name, value } = e.target
    this.setState({ [name]: value })

  }

  render() {   
    console.log("removeFighterFromList", this.props.fighter.id)

    return this.props.removeFighterFromList ?(

      <div className="leftColumn" style={leftColumn.styles}>
        <div className="title">{this.props.fighter.name}</div>
        <div className="author">{this.props.fighter.bio}</div>
        <div className="description">{this.props.fighter.image_url}</div>
 
        <div className="strength">{this.props.fighter.strength}
        </div>

        <div className="button"><Button onClick={() => this.props.removeFighterFromList(this.props.fighter.id)} style={sbutton.styles}>Remove Fighter {this.props.fighter.id}</Button></div>

      </div>
    ):(<div>loading</div>)
  }
}
export default Fighter