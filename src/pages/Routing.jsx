import React from 'react';
import Step from '../components/Step';
import { createBrowserRouter, useNavigate } from 'react-router-dom';

function Routing(props) {

  const navigate =  useNavigate();
  
    const data = [{
        heading : ` \n To get started with routing in React, you need to install a routing library like React Router. You can do this using npm or yarn in your terminal:` ,
        desc : `npm install react-router-dom `
    },
  {
    heading : `The core component provided by React Router is createBrowserRouter. You wrap your entire application with it. For each route you will create an object with "path" and "element" property. At path specify the url and at element specify the component to render. Here is the complete example: ` ,
     desc : `import { useState } from "react";

     import {createBrowserRouter } from "react-router-dom";
 
     
       const router = createBrowserRouter([
         {
           path :"/" ,
           element : <Starter/>
         } ,
         {
           path :"/basics" ,
           element : <Basics/>
         } ,
         {
           path :"/hooks" ,
           element : <Hooks/>
         } 
       ])

     `
  } ,
{
  heading : `For the routing to work , you have to assign the browserRouter instance you just created to RouterProvider component provided by react-router-dom library. \n \n 
  Here is the complete code example for routing implementation ` ,
  desc : `import { useState } from "react";

  import Starter from "./pages/Starter";
  import Basics from "./pages/Basics";
  import { RouterProvider, createBrowserRouter } from "react-router-dom";
  import Hooks from "./pages/Hooks";

  
  
  function App() {
  
    const router = createBrowserRouter([
      {
        path :"/" ,
        element : <Starter/>
      } ,
      {
        path :"/basics" ,
        element : <Basics/>
      } ,
      {
        path :"/hooks" ,
        element : <Hooks/>
      } ,
    
    ]);
  
    return (
    
        <RouterProvider router={router} />
  
    );
  }
  
  export default App;
  `
} ];

const data2=[
  {
    heading : `You can also use NavLink provided the library to navigate , it is just anchor tag behind the scenes :` ,
    desc : `import React from 'react';
    import { NavLink} from 'react-router-dom';
    
    function Practice(props) {
    
        return (
            <NavLink to="/basics">Go to Basics</NavLink>
        );
    }
    
    export default Practice;`
  }
]

    return (
        <>
        <h2 className="text-2xl mt-10  text-center"> Routing (Multiple pages) </h2> 
        <Step descriptionContent={`Routing in React is the process of managing the navigation and rendering of different components or views based on the URL of your web application. It allows you to create single-page applications (SPAs) where the content dynamically changes without a full page reload. React doesn't come with built-in routing capabilities, but there are popular third-party libraries like React Router that make implementing routing in React applications straightforward.`}>

            {data.map((item)=> <>
            <p className='ml-5 whitespace-pre-line text-md '>{ item.heading}</p> 
          
          <section className='border border-secondary bg-black rounded-lg w-full p-2 m-2'>
            <p className='ml-5 whitespace-pre-line text-tertiary text-sm'>{item.desc}</p>
            </section>  
            <p className='ml-5 whitespace-pre-line text-tertiary text-sm'>{item.end}</p>

        </>)}
    
    
        </Step>
        <Step headingTitle={`Navigation`} descriptionContent={`To progamatically navigate from one route to another , react-router-dom provides hook called useNavigate() , \n Here is a complete example : `} 
        descriptionContentMiddle={`import React from 'react';
        import { useNavigate } from 'react-router-dom';
        
        function Practice(props) {
        
            const navigate = useNavigate();
        
            const handleNavigation=()=>{
        
                // pass the path of route to destination route
                  navigate("/basics");
            };
        
        
            return (
                <div>
                     <button onClick={handleNavigation} >Navigate </button>
                </div>
            );
        }
        
        export default Practice;`}>

{data2.map((item)=> <>
            <p className='ml-5 whitespace-pre-line text-md '>{ item.heading}</p> 
          
          <section className='border border-secondary bg-black rounded-lg w-full p-2 m-2'>
            <p className='ml-5 whitespace-pre-line text-tertiary text-sm'>{item.desc}</p>
            </section>  
            <p className='ml-5 whitespace-pre-line text-tertiary text-sm'>{item.end}</p>

        </>)}

        </Step>


        </>
    );
}

export default Routing;