import React from 'react';

function Practice(props) {
    const handleForm=()=>{
        // action to perfrom on Click of button
    };

    // can also write handler like this
    // function handleForm(){
    //     // action to perfrom on Click of button
    // };


    return (
        <div>
             <button onClick={handleForm} >Submit form</button>
        </div>
    );
}

export default Practice;