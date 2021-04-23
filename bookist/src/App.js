import React, {Component} from 'react'
import './App.css';
import data from './data'
import Header from './components/Header'
import BookList from './components/BookList'
import Shelf from './components/Shelf'
import SearchBar from './components/SearchBar'

class App extends Component{
  constructor(){
    super()
    const bookData = data;
    this.state = {
      books: bookData,
      shelf: [],
      origArr: bookData
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

  filterBooks = (input) => {
    // console.log('filter books')
    let filteredBooks = this.state.books.filter(e=>{
      if(e.title.includes(input) || e.author.includes(input)){
        return true
      } else{
        return false
      }
    })
    this.setState({books: filteredBooks})
  }

  reset = () => {
    // console.log('reset')
    this.setState({books: this.state.origArr})
  }

  render(){
    // console.log(this.state.books)
    return (
      <div className="App">
        <Header />
        <SearchBar filterBooks={this.filterBooks} reset={this.reset}/>
        <div className='maindisplay'>
          <BookList books={this.state.books} addToShelf={this.addToShelf}/>
          <Shelf shelf={this.state.shelf} clearShelf={this.clearShelf}/>
        </div>
      </div>
    );
  }
}

export default App;
