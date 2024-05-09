import React, { Component } from 'react'

export class Counterincdec extends Component {
    constructor(){
        super()
        this.state={
            number:0
        }
    }
  render() {
    return (
      <div style={{marginTop:"300px", marginLeft:"650px"}}>
        <h1>
            <button className='btn btn-success ' onClick={()=>this.setState({number:this.state.number +1}) }>increment</button>{'      '}
            {this.state.number}{'         '}
            <button className='btn btn-danger ' onClick={()=> {if(this.state.number>0){this.setState({number:this.state.number -1})}}}>decrement</button>
            
        </h1>
      </div>
    )
  }
}

export default Counterincdec