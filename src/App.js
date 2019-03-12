import React, { Component } from 'react'
import './App.css'
import {connect} from 'react-redux';
import * as actionCreator from './store/actions/action'
import logo from './logo.svg'

class App extends Component {
  render() {
    return (
      <div>
        <div>{this.props.age}</div>
        <button onClick={this.props.onageUp} > Add </button>
        <button onClick={this.props.onageDown}>Down</button>
        {this.props.loading && <img src={logo} className="App-logo" />}
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    age: state.age,
    loading:state.loading
   
  }
}

const mapDispatchToProps = (dispatch) =>{
  
  return{
    onageUp: () => dispatch(actionCreator.ageUp(1)),
    onageDown: () => dispatch(actionCreator.ageDown(1)),
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)