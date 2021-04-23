import React from 'react'

function BookList(props){
    //Booklist has two props
    // books: array,
    // addToShelf: function
    // console.log(props)
    const compWidth = '200px';
    let mappedBooks = props.books.map(e=>{
        return(
            <div className="bookdisplay">
                <img src={e.img} alt={e.title} style={{width: compWidth, height:  "auto"}} onClick={()=>props.addToShelf(e.title)}/>
                <h4 style={{width: compWidth, marginBottom: 0, marginTop: "8px"}}>{e.title}</h4>
                <p style={{width: compWidth, marginTop: 0, marginBottom: "25px"}}>By: {e.author}</p>
            </div>
        )
    })
    return(
        <div className="mappedbooks">
            {mappedBooks}
        </div>
    )
}

export default BookList

//onClick={props.addToShelf}