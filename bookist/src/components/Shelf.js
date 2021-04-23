import React from 'react'

function Shelf(props){
    //Shelf needs two props
    // shelf: array,
    // clearShelf: function

    // if(props.shelf.length>0){ 
    //     let mappedTitles = props.shelf.map(e=>{
    //         return(
    //             <p>{e}</p>
    //             )
    //     });
    //     return mappedTitles
    // } else{
    //     let mappedTitles = ['Click on a book to add it to your shelf'];
    //     return mappedTitles
    // }
    let mappedTitles = shelfTextDisplay(props.shelf);

    return(
        <div className="shelf">
            <h2>Your Shelf</h2>
            <button className="btn" onClick={()=>props.clearShelf()}>clear shelf</button>
            <div>{mappedTitles}</div>
        </div>
    )
}

function shelfTextDisplay(prop){
    if(prop.length>0){ 
        let titles = prop.map(e=>{
            return(
                <p>{e}</p>
                )
        });
        return titles
    } else{
        let titles = <p>Click on a book to add it to your shelf</p>;
        return titles
    }
}

export default Shelf

//id='shelfdisplay' 