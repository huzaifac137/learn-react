import React from 'react';
import Step from '../components/Step';

function Forms(){
    const data = [  
  
   
]
    return (
<>
<h2 className="text-2xl mt-10  text-center"> Forms & Inputs </h2> 
 <Step descriptionContent={`In React, forms are an essential part of building interactive web applications that collect and manage user input. React provides a way to create and manage forms using a combination of HTML form elements and React components

`}>
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

export default Forms;