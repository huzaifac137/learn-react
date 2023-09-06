import React from "react";

function Heading({title}){
    return (
        <>
       {title ? <h2 className='text-xl ml-4 mt-8 font-semibold text-tertiary'>{title}:</h2>  : null}
        </>
    )
};

export default Heading;