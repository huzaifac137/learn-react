import React from 'react';
import Step from '../components/Step';

function Handlers(){
    const data = [  
  
    {
        heading : `You define event handlers as JavaScript functions within your React components. These functions are responsible for performing some action when a specific event occurs. ` ,
        desc : `function handleClick() {
            // Code to be executed when the button is clicked
          }
          
        `
    } ,
    {
        heading : `You attach event handlers to specific elements or components using JSX. For example, you can attach a click event handler to a button element like this:` ,
   desc : `<button onClick={handleClick}>Click Me</button> `
    } ,
     {
        heading : `In some cases, you might want to pass additional data or parameters to your event handlers. You can achieve this by using arrow functions or other techniques:` ,
        desc : `function handleItemClick(item) {
            // Code to handle the click event with the item data
          }
          
          <li onClick={() => handleItemClick(item)}>Item</li>
          
        `
     } ,
     {
        heading : `Functional Component Example:` ,
        desc : `import React from 'react';

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

        `
     }
]
    return (
<>
<h2 className="text-2xl mt-10  text-center">Handlers </h2> 
 <Step descriptionContent={`In React, "handlers" typically refer to functions or methods that are used to respond to user interactions or events within a component. These interactions or events can include things like clicking a button, submitting a form, hovering over an element, and more. Handlers play a crucial role in making React applications interactive and responsive.

Here's how handlers work in React and how you can use them

`}>
     {data.map((item)=> <>
            <p className='ml-5 whitespace-pre-line text-md '>{ item.heading}</p> 
          
          <section className='border border-secondary bg-black rounded-lg w-full p-2 m-2'>
            <p className='ml-5 whitespace-pre-line text-tertiary text-sm'>{item.desc}</p>
            </section>  
        </>)}
 </Step>
 <a className='cursor-pointer align-center flex flex-col items-center mb-4' href='/forms'> Next : Forms & Inputs </a>
</>
    )
};

export default Handlers;