import React, {Component} from 'react'
import './App.css';
import data from './data'
import Header from './components/Header'
import BookList from './components/BookList'
import Shelf from './components/Shelf'

class App extends Component{
  constructor(){
    super()
    const bookData = data;
    this.state = {
      books: bookData,
      shelf: []
    }
  }

  addToShelf = (newTitle) => {
    // console.log('add to shelf')
    if(!this.state.shelf.includes(newTitle)){
      let updateShelf = [...this.state.shelf,newTitle]
      this.setState({shelf: updateShelf})
    }
  }

  clearShelf = () =>{
    this.setState({shelf: []})
  }

  filterBooks(){
    console.log('filter books')
  }

  reset(){
    console.log('reset')
  }

  render(){
    // console.log(this.state.books)
    return (
      <div className="App">
        <Header />
        <div className='maindisplay'>
          <BookList books={this.state.books} addToShelf={this.addToShelf}/>
          <Shelf shelf={this.state.shelf} clearShelf={this.clearShelf}/>
        </div>
      </div>
    );
  }
}

export default App;
