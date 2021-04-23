import React, {Component} from 'react'
import './App.css';
import data from './data'

class App extends Component{
  constructor(){
    super()
    const bookData = data;
    this.state = {
      books: [],
      shelf: []
    }
  }

  addToShelf(){
    console.log('add to shelf')
  }

  clearShelf(){
    console.log('clear shelf')
  }

  filterBooks(){
    console.log('filter books')
  }

  reset(){
    console.log('reset')
  }

  render(){
    return (
      <div className="App">
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;
