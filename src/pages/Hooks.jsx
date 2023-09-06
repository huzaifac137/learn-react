import React from 'react';
import Step from '../components/Step';

function Hooks(){
    return (
        <>
        <h2 className="text-2xl mt-10  text-center">Hooks</h2> 
        <Step descriptionContent={`Hooks allows you manipulate React state and lifecycle in function components. Hooks don't work inside classes. 
         \n Following are the mostly used hooks in React : `}  descriptionContentMiddle={`=> useState \n \n => useEffect \n \n => useRef \n \n  => useMemo 
         \n => useCallback \n \n => useContext \n`}
       descriptionContentEnd={`We will discuss first three in details in next portion and others also in some part of the course `} /> 
       <a className='cursor-pointer align-center flex flex-col items-center mb-4' href='/usestate'> Next : useState hook </a>
        </>
        
    )
};

export default Hooks;