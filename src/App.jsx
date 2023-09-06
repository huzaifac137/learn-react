import { useState } from "react";

import Starter from "./pages/Starter";
import Basics from "./pages/Basics";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Hooks from "./pages/Hooks";
import UseState from "./pages/UseState";
import UseEffect from "./pages/UseEffect";
import UseRef from "./pages/UseRef";
import Handlers from "./pages/Handlers";
import Forms from "./pages/Forms";


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
    {
      path :"/usestate" ,
      element : <UseState/>
    } ,
    {
      path :"/useeffect" ,
      element : <UseEffect/>
    } , 
    {
      path :"/useref" ,
      element : <UseRef/>
    } ,
    {
      path :"/handlers" ,
      element : <Handlers/>
    },
    {
      path :"/forms" ,
      element : <Forms/>
    }
  ])

  return (
  
      <RouterProvider router={router} />

  );
}

export default App;
