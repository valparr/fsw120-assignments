import React from "react"
import './App.css';
import MyList from "./MyList"

class App extends React.Component {
  constructor(){
    super ()
    this.state = {
      name: "",
      list: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event){
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
    event.preventDefault();
  }

  handleClick(event){
    this.setState(prevState => ({
        list: [...prevState.list, this.state.name]
      })
    )
    event.preventDefault();
    console.log(this.state.list)
  }
 
  render(){
    const user = this.state.list.map(x => <MyList name={x}/>)
    return (
      <div>
        <form>
          <h1>NAME REGISTRY</h1>
          <p>Please enter your name to be added to the Name Registry.</p>
          <input id="inputField" type="text" name="name" placeholder="Enter Name" onChange={this.handleChange}/>
          <button className="myButton" onClick={this.handleClick}>Submit Name</button>
          <h1>{this.state.name}</h1>
          {user}
        </form>
      </div>
    )
  } 
}

export default App