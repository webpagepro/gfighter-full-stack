import React, { Component } from 'react';
import { Button, Table, CardImg} from 'reactstrap'
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
  state={
    fighter: {}
  }


  handleChange = e => {
    let { name, value } = e.target
    this.setState({ [name]: value })
  }

componentDidMount(){
   
  // let getFighter = id => {
   axios.get(`http://localhost:8000/fighters/${this.props.id}`)
   .then(res => {  
                   this.setState({fighter: res.data})
   })
}

  render() {   
  console.log(this.props.id)
     
 return(

   <div>  
 <Table striped>
   <tbody>
     <tr>
       <th scope="row"></th>
      <td className="name-single">{this.state.fighter.name}</td>
      <td className="bio-single">{this.state.fighter.bio}</td>
      <td className="image_url-single"><CardImg src={this.state.fighter.image_url} alt={this.state.fighter.name}/></td>
      <td className="power-single">{this.state.fighter.strength}</td>
     </tr>
   </tbody>
 </Table>
      <div className="button"><Button onClick={() => this.state.removeFighterFromList(this.state.fighter.id)} style={sbutton.styles}>Remove Fighter {this.state.fighter.id}</Button></div>
 </div> 
  )   
 }

}
export default Fighter