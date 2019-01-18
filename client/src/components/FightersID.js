import React, { Component } from 'react';
import { Button, Table, CardImg} from 'reactstrap'


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
      <div className="leftColumn" style={leftColumn.styles}>
     
    
     <Table striped>

   <tbody>
     <tr>
       <th scope="row"></th>
       <td>{this.props.fighter.name}</td>
       <td>{this.props.fighter.bio}</td>
       <td><CardImg src={this.props.fighter.image_url} alt="Card image" /></td>
       <td>{this.props.fighter.strength}</td>
     </tr>
   </tbody>
 </Table>
 
     

        <div className="button"><Button onClick={() => this.props.removeFighterFromList(this.props.fighter.id)} style={sbutton.styles}>Remove Fighter {this.props.fighter.id}</Button></div>

      </div>
    ):(<div>error loading props: FighterID</div>)
  }
}
export default Fighter