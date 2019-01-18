import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            bio: "",
            image_url:"",
            power: 100
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    
    render() {
        return (
            <form>
                <input 
                    type="text" 
                    value={this.state.name} 
                    name="name" 
                    placeholder="Search fighters here..." 
                    onChange={this.handleChange} 
                />
                <br />
                <input 
                    type="textarea" 
                    value={this.state.bio} 
                    name="bio" 
                    placeholder="bio" 
                    onChange={this.handleChange} 
                />
                 <br />
                <input 
                    type="textarea" 
                    value={this.state.strength} 
                    name="strength" 
                    placeholder="strength" 
                    onChange={this.handleChange} 
                />

               
            </form>
        )
    }
}

export default App
                
                    /**{
                     * Other useful form elements:
                     * 
                     *  <textarea /> element
                     *  <input type="checkbox" />
                     *  <input type="radio" />
                     *  <select> and <option> elements
                      }*/
               



