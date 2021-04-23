import React from 'react'

function Shelf(props){
    //Shelf needs two props
    // shelf: array,
    // clearShelf: function
    let mappedTitles = props.shelf.map(e=>{
        return(
            <p>{e}</p>
        )
    });
    return(
        <div className="shelf">
            <h2>Your Shelf</h2>
            <button onClick={()=>props.clearShelf()}>clear shelf</button>
            <div>{mappedTitles}</div>
        </div>
    )
}

export default Shelf

//id='shelfdisplay' 