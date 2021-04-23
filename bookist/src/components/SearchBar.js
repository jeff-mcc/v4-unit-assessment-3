import React, {Component} from 'react'

class SearchBar extends Component{
    constructor(){
        super()
        this.state = {
            userInput: ''
        }
    }

    handleChange = (input) => {
        // console.log('handle change')
        this.setState({userInput: input})
    }

    handleClick = () => {
        // console.log('handle click')
        this.props.filterBooks(this.state.userInput)
    }

    handleClear = (input) => {
        // console.log('handle clear')
        this.setState({userInput: input})
        this.props.reset()
    }

    render(){
        return(
            //two props are used
            // filterBooks: function,
            // reset: function
            <div className="searchbar">
                <input className="searchitems" value={this.state.userInput} onChange={e=>this.handleChange(e.target.value)}></input>
                <button className="searchitems" onClick={()=>this.handleClick()}>search</button>
                <button className="searchitems" onClick={()=>this.handleClear()}>clear search</button>
            </div>
        )
    }
}

export default SearchBar