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
      <td>{this.state.fighter.name}</td>
     </tr>
   </tbody>
 </Table>
 </div> 
  )   
 }

}
export default Fighter