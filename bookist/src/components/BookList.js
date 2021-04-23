import React from 'react'

function BookList(props){
    //Booklist has two props
    // books: array,
    // addToShelf: function
    console.log(props)
    const compWidth = '200px';
    let mappedBooks = props.books.map(e=>{
        return(
            <div class="bookdisplay">
                <img src={e.img} alt={e.title} style={{width: compWidth, height:  "auto"}} onClick={()=>props.addToShelf(e.title)}/>
                <h4 style={{width: compWidth, marginBottom: 0}}>{e.title}</h4>
                <p style={{width: compWidth, marginTop: 0}}>By: {e.author}</p>
            </div>
        )
    })
    return(
        <div class="mappedbooks">
            {mappedBooks}
        </div>
    )
}

export default BookList

//onClick={props.addToShelf}