import React from 'react'
import Die from './Die.js'

let counter = 0;
const box = document.getElementById("box")
const box1 = document.getElementById("box1")
const box2 = document.getElementById("box2")
const box3 = document.getElementById("box3")
const box4 = document.getElementById("box4")
const box5 = document.getElementById("box5")

class Dice extends React.Component {
  constructor (){
    super()
    this.state = {
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      num5: 0
    }
    
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick(){
    counter += 1;
    
    if (counter <= 3){      
          this.setState((prevState) => {   
                  return (                    
                  prevState.num1 = Math.floor(Math.random() * 6 + 1),                
                  prevState.num2 = Math.floor(Math.random() * 6 + 1),                
                  prevState.num3 = Math.floor(Math.random() * 6 + 1),                
                  prevState.num4 = Math.floor(Math.random() * 6 + 1),                
                  prevState.num5 = Math.floor(Math.random() * 6 + 1)
                  ) 
                }
          )
      
    } else if(counter > 3){
      counter = 0;
            this.setState((prevState) => {   
              return (
              prevState.num1 = 0,            
              prevState.num2 = 0,            
              prevState.num3 = 0,            
              prevState.num4 = 0,            
              prevState.num5 = 0
              )  
            }
      )
    }
  }
              
  

  render(){
      console.log(box)
      console.log(box1)
      console.log(box2)
      console.log(box3)
      console.log(box4)
      console.log(box5)


      return (
        <div className="die-box">
          <h1>DICE GAME</h1><br></br>
          <h3>Game Rules: Click button to Roll the Dice! <br></br> After three rolls, all die numbers will reset back to zero. Enjoy!</h3>
          <Die id="box1" handleClick={this.handleClick} num={this.state.num1}/>
          <Die id="box2" handleClick={this.handleClick} num={this.state.num2}/>
          <Die id="box3" handleClick={this.handleClick} num={this.state.num3}/>
          <Die id="box4" handleClick={this.handleClick} num={this.state.num4}/>
          <Die id="box5" handleClick={this.handleClick} num={this.state.num5}/>
          <button className="myButton" onClick={this.handleClick}>Click to Roll</button>
        </div>
      )    
  }    
}



export default Dice



