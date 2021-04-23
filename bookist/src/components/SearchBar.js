import React, {Component} from 'react'

class SearchBar extends Component{
    constructor(){
        super()
        this.state = {
            userInput: ''
        }
    }

    handleChange(){
        console.log('handle change')
    }

    handleClick(){
        console.log('handle click')
    }

    handleClear(){
        console.log('handle clear')
    }

    render(){
        return(
            //two props are used
            // filterBooks: function,
            // reset: function
            <div>
                <h4>SearchBar</h4>
            </div>
        )
    }
}

export default SearchBar