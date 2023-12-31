import React from 'react';
import step3IMG from "../assets/step3.png";
import Step from '../components/Step';


function Starter({}){

  const data =[
    "  //learn-react is just folder name which will be created by this command \n \n  => npm create vite@latest learn-react " ,
   " //Go through options to select React and then Select Javascript , after that \n \n  => cd learn-react  " ,
   " => npm install  " ,
   " => npm run dev"

  ];

    return (
        <>
          <div className="flex flex-col w-auto mt-10  p-5 justify-start items-center ">
    <h1 className="text-3xl text-tertiary">
      Hello , Welcome to Learn-React
    </h1>
    <p className="text-md">Learn React as an absolute Beginner!</p>
  </div>
         <h2 className='text-2xl mt-10  text-center'>Starter</h2>
        <Step
        headingTitle={"Step 1"}
        descriptionContent={"Install Node.js from official Website"}
      />
      <Step
        headingTitle={"Step 2"}
        descriptionContent={"Install Visual Studio Code Editor"}
      />
      <Step
        headingTitle={"Step 3"}
        descriptionContent={
          "Open VS Code , then Select Terminal -> New Terminal , Input the following commands one-by-one in terminal: "
        }
        descriptionContentEnd={"\n npm run dev will start your app , it will be ready at localhost:5173 , you can go there and check the starting page"} 
      >


{ data.map((item)=>  <section className='border border-secondary bg-black rounded-lg w-full p-2 m-2'>
 <p className='ml-5 whitespace-pre-line text-tertiary text-sm'>{item}</p>
 </section>  )}

        </Step>
       

        <a className='cursor-pointer align-center flex flex-col items-center mb-4' href='/basics'>Next : Basics</a>

      
        </>    )
};
export default Starter;