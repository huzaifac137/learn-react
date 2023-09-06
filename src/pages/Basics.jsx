import React from "react";
// import step3IMG from "../assets/step3.png";
import Step from "../components/Step";

function Basics({}) {
  return (
    <>
      <h2 className="text-2xl mt-10  text-center">Basics</h2>
      <Step
        headingTitle={"Creating a React component"}
        descriptionContent={`React Component is a part of overall UI that can be created and then re-used in multiple places by importing it.
         It's syntax is described as JSX.`}
        descriptionContentMiddle={ ` \n import React from react; \n \n function ComponentA() { 
            \n return (
                <div> 
                <h1> Hey this is componentA </h1>
                </div>
             )
        }
       \n export default ComponentA; `}
       descriptionContentEnd={` \n React Component must be declared in file with extensions such as js , jsx , ts , tsx  \n 
          File name should start with a capital letter so react can recognize it and translate into javacsript for browser`}
      />

<Step
        headingTitle={"Importing and using component"}
        descriptionContent={`We can import any react component into another file and call it , this will become a part of UI of the parent component.
        \n Using the above example component ComponentA :`}
        descriptionContentMiddle={ ` \n import React from react;
           import ComponentA from "./ComponentA.js' \n \n function App() { 
            \n return (
                 \n <ComponentA /> \n
             )
        }
       \n export default App; `}
       descriptionContentEnd={` \n Make sure Component is imported from right file .`}
      />

<Step
        headingTitle={"Props (properties)"}
        descriptionContent={`We can pass different objects , strings , booleans , arrays as properties to react components and
          access them in the component itself by destructing props from function parameters .
           This allows us to re-use same component but by giving different values without having to write the same code again and again `}
        descriptionContentMiddle={ ` \n import React from react;
           import ComponentA from "./ComponentA.js' \n \n function App() { 
            \n return (
                 \n <ComponentA name="huzaifa" age="23" /> \n
             )
        }
       \n export default App; `}
       
       descriptionContentEnd={` \n name and age is to passed to componentA in above code and then accessed in the componentA ,
       to show it inside html element we used curly brackets`}
      >
        <section className='border border-secondary bg-black rounded-lg w-full p-2 m-2'>
             <p className='ml-5 whitespace-pre-line text-tertiary text-sm'> {`import React from react;
            \n \n function ComponentA({name , age}) { 
            \n return (
                 \n <h3>  {name} </h3> 
                   <h4>   {age} </h4>  
        }
       \n export default ComponentA;`} </p>
             </section>
        </Step>





      
    

      <a className="cursor-pointer align-center flex flex-col items-center mb-4 " href="/hooks">
        Next : Hooks
      </a>
    </>
  );
}
export default Basics;
