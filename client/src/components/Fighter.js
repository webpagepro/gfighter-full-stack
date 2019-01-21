import React, { Component } from 'react';
import { Button, Table} from 'reactstrap'
import { Link } from 'react-router-dom'

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



    return this.props.removeFighterFromList ?(
      <div className="none" style={leftColumn.styles}>
     
    
     <Table striped>

   <tbody>    

     <tr className="list">
       <th scope="row">{this.props.fighter.id}</th>
       <td className="name-list"><Link to={`fighters/${this.props.fighter.id}`} >{this.props.fighter.name}</Link></td>
       <td className="bio-list">{this.props.fighter.bio}</td>
       {/*<td><CardImg width='50' src={this.props.fighter.image_url} alt="Card image" /></td> */}
       <td className="strength-list">{this.props.fighter.strength}</td>
     </tr>
   </tbody>
 </Table>
 
     

        <div className="button"><Button onClick={() => this.props.removeFighterFromList(this.props.fighter.id)} style={sbutton.styles}>Remove Fighter {this.props.fighter.id}</Button></div>

      </div>
    ):(<div>Figher.js error loading</div>)
  }
}
export default Fighter