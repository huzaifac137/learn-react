import React from 'react';
import Step from '../components/Step';

function UseRef(){
    const data = [  
    {
        heading : `The useRef hook is a fundamental part of React's hooks API that allows you to create and interact with mutable references to DOM elements or values that persist across renders without causing re-renders themselves. It is often used for accessing and manipulating DOM elements directly, managing focus, or storing values that shouldn't trigger a re-render when they change.

        Here's how to use the useRef hook:` ,
        desc : `import React, { useRef } from 'react';
        `
    } , 
    {
        heading : `Create a ref variable using useRef(): ` ,
        desc : `const myRef = useRef(null);
        `
    } ,
    {
        heading : `You can optionally provide an initialValue as an argument, which is the initial value of the ref. This initialValue is not a default value like in useState, but rather a way to initialize the ref with some value if needed.
        
You can attach the myRef to a DOM element using the ref attribute. This allows you to access and manipulate the DOM element directly:` ,
        desc : `<div ref={myRef}>This is a DOM element</div>

        `
    } ,
     {
        heading : `To access the current value of the ref, you use myRef.current. This property always holds the latest value of the ref.` ,
        desc : `console.log(myRef.current); // Access the current value
        `
     } ,
     {
        heading : `Unlike state variables, changing the ref's value doesn't trigger a re-render. You can directly update it by assigning a new value to myRef.current.` ,
        desc : `myRef.current = newValue;

        `
     }
]
    return (
<>
<h2 className="text-2xl mt-10  text-center">useRef Hook</h2> 
 <Step >
     {data.map((item)=> <>
            <p className='ml-5 whitespace-pre-line text-md '>{ item.heading}</p> 
          
          <section className='border border-secondary bg-black rounded-lg w-full p-2 m-2'>
            <p className='ml-5 whitespace-pre-line text-tertiary text-sm'>{item.desc}</p>
            </section>  
        </>)}
 </Step>
 <a className='cursor-pointer align-center flex flex-col items-center mb-4' href='/handlers'> Next : Handlers </a>
</>
    )
};

export default UseRef;