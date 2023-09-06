import React from 'react';
import Step from '../components/Step';

function UseState(){

    const data = [{
        heading : ` \n Here's a brief explanation of how useState works: \n
        import it from the React library like this: ` ,
        desc : `import React, { useState } from 'react';`
    } , 
{ 
    heading : `You declare a state variable using the useState function. It takes an initial value as an argument and returns an array containing two elements: the current state value and a function to update that value.` ,
    desc : `const [state, setState] = useState(initialValue)`
} , 
{
    heading : `You can use the state variable in your component's JSX to display its value, and you can use setState to change the value of the state variable when needed.
    When you call setState, React will re-render your component with the new state value, and any changes to the state will be reflected in your component's UI.` ,
    desc : ` return (
        <div>
          <p>Current State: {state}</p>
          <button onClick={() => setState(newValue)}>Update State</button>
        </div>
      );`
}  , {
    heading :" Here is full example of useState hook in react functional component" ,
    desc : `import React, { useState } from 'react';

    function Counter() {
      const [count, setCount] = useState(0);
    
      const increment = () => {
        setCount(count + 1);
      };
    
      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={increment}>Increment</button>
        </div>
      );
    }
    
    export default Counter;`
}]
    return (
        <>
        <h2 className="text-2xl mt-10  text-center">useState Hook</h2> 
        <Step descriptionContent={`useState is a function in React, that allows you to add state to your functional components. State is a way to manage and store data that can change over time .
        useState also affects the behaviour of the component , i.e how it renders `}  
       descriptionContentEnd={`This is how useState works. `} > 
         
        {data.map((item)=> <>
            <p className='ml-5 whitespace-pre-line text-md '>{ item.heading}</p> 
          
          <section className='border border-secondary bg-black rounded-lg w-full p-2 m-2'>
            <p className='ml-5 whitespace-pre-line text-tertiary text-sm'>{item.desc}</p>
            </section>  
        </>)}

       </Step> 
       <a className='cursor-pointer align-center flex flex-col items-center mb-4' href='/useeffect'> Next : useEffect hook </a>
        </>
        
    )
};

export default UseState;