import React from 'react';
import Step from '../components/Step';

function UseEffect(){
    const data = [{
        heading : ` \n Importing useEffect ` ,
        desc : `import React, { useState } from 'react';`
    } , 
    {
        heading : `You use useEffect by providing a function that represents the effect you want to run. This function will be executed after the component renders for the first time only` ,
        desc : `useEffect(() => {
            // Effect code here
          }, [] );`
    } , 
    {
        heading : `The second argument of useEffect " []" is dependency array. If a value is provided in it , useEffect will be triggered every time the value in depedency arrays changes , while still being executed when component renders for first time ` ,
        desc : `useEffect(() => {
            // Effect code here
          }, [value] );`
    } ,
    {
        heading : `Here's an example of useEffect in action for fetching data` ,
        desc : `import React, { useState, useEffect } from 'react';

        function DataFetcher() {
          const [data, setData] = useState([]);
        
          useEffect(() => {
            // Fetch data from an API when the component mounts
            fetch('https://api.example.com/data')
              .then((response) => response.json())
              .then((data) => {
                setData(data);
              });
          }, []); // The empty dependency array means this effect runs only once when the component mounts
        
          return (
            <div>
              <h2>Fetched Data</h2>
              <ul>
                {data.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            </div>
          );
        }
        
        export default DataFetcher;
        `
    }
]
    return (
<>
<h2 className="text-2xl mt-10  text-center">useEffect Hook</h2> 
 <Step descriptionContent={`useEffect is another important hook in React that allows you to perform side effects in your functional components. Side effects can include data fetching, DOM manipulation, and more. Here's a brief explanation of how useEffect works:

`}>
     {data.map((item)=> <>
            <p className='ml-5 whitespace-pre-line text-md '>{ item.heading}</p> 
          
          <section className='border border-secondary bg-black rounded-lg w-full p-2 m-2'>
            <p className='ml-5 whitespace-pre-line text-tertiary text-sm'>{item.desc}</p>
            </section>  
        </>)}
 </Step>
 <a className='cursor-pointer align-center flex flex-col items-center mb-4' href='/useref'> Next : useRef hook </a>
</>
    )
};

export default UseEffect;