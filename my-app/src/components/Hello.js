import React from 'react';

function Hello(props) {

    function Clickme() {
        alert("Button Is Clicked")
    }

    return (

        <div>

            <h1> My name is : {props.name}</h1>
            <button className = "btn btn-sucess" onClick = {Clickme}>Clicke ME</button>

        </div>

    )

}

export default Hello;