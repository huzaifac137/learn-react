import React from 'react';
import Step from '../components/Step';

function Forms(){
    const data = [  
          
        {
            heading : `Controlled inputs are the input fields where the state of the field is controlled by state variables. In other words, the value of the field is directly linked to the state of the component. Here's a simple example of a controlled input field: ` , 
            desc : `import React, { useState } from 'react';

            function App() {
              const [name, setName] = useState("");
            
              const handleInputChange = (e) => {
                setName(e.target.value);
              }
            
              return (
                <div>
                  <input type="text" value={name} onChange={handleInputChange} />
                </div>
              );
            }
            
            export default App;` ,
            end : `In this example, the name state variable is tied to the value of the input field through "value" property, and any change in the input field updates the state variable via the handleInputChange function assigned to "onChange" property which exposes "event" to containing function (handleInputChange) .
            Through this event object we can access multiple properties like actual value of input by event.target.value`
        } , 
        {
            heading : `Uncontrolled inputs are the ones where the state of the field is not controlled by any state variable. Instead, they maintain their own internal state. \n \n Here is an example using useRef:` ,
            desc : `import React, { useState } from 'react';

            function Input() {
              const nameRef = useRef(null);
            
              const showInputValue = (e) => {
                // to show value of input 
                console.log(nameRef.current.value);
              }
            
              return (
                <div>
                  <input type="text" ref={nameRef} />
                </div>
              );
            }
            
            export default Input;`
        }
   
];

const data2 = [{
   heading : `Here is full fledge-example of using react Form with controlled inputs to create a login form` ,
   desc : `import React, { useState } from 'react';

   const LoginForm = () => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
   
     const handleEmailChange = (event) => {
       setEmail(event.target.value);
     };
   
     const handlePasswordChange = (event) => {
       setPassword(event.target.value);
     };
   
     const handleSubmit = (event) => {
       event.preventDefault();
       
       // Perform login logic with email and password
  
     };
     
     return (
      <form onSubmit={handleSubmit}>
       
           
          <input
            type="email"
            placeholder="enter email"
            value={email}
            onChange={handleEmailChange}
          />
       
          
          <input
            type="password"
            placeholder="enter password"
            value={password}
            onChange={handlePasswordChange} 
          />
       
        <button> Login </button>
      </form>
    );
  };
  
  export default LoginForm;
  `
}]
    return (
<>
<h2 className="text-2xl mt-10  text-center"> Forms & Inputs </h2> 
 <Step headingTitle={"Input Field"} descriptionContent={`In React, input fields are a bit different from standard HTML input fields because they maintain an internal state behind the scene. They can be used independently outside forms. There are two types of inputs in react , "controlled" and "uncontrolled" input. \n \n A simple input field in react is as follow:`} 
 descriptionContentMiddle={` <input type='text' placeholder='username' />`} 
 descriptionContentEnd={`Different types of inputs can be handled in a similar way in React. The main difference lies in how the value and onChange props are used. For instance, for a checkbox or radio button, the checked prop is used instead of the value prop. Similarly, for a select input, the value prop is used to control the current selected option`}>

         {data.map((item)=> <>
            <p className='ml-5 whitespace-pre-line text-md '>{ item.heading}</p> 
          
          <section className='border border-secondary bg-black rounded-lg w-full p-2 m-2'>
            <p className='ml-5 whitespace-pre-line text-tertiary text-sm'>{item.desc}</p>
            </section>  
            <p className='ml-5 whitespace-pre-line text-tertiary text-sm'>{item.end}</p>

        </>)}

    </Step>

<Step headingTitle={"Form"} descriptionContent={`In React, forms are an essential part of building interactive web applications that collect and manage user input. React provides a way to create and manage forms using a combination of HTML form elements and React components \n\n following is an exampleof how you may use form in react`}
descriptionContentMiddle={`import React, { useState } from 'react';

function MyForm() {
   
 
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the form data
  };

  return (
    <form onSubmit={handleSubmit}>
      
    {/* Form fields and other things comes here */}
    <button> Submit </button>

    </form>
  );
};

export default myForm`}> 
  <p className='ml-5 whitespace-pre-line text-tertiary text-sm'> "onSubmit" property of form takes a function which is called when form is submitted via a button click</p>

  {data2.map((item)=> <>
            <p className='ml-5 whitespace-pre-line text-md '>{ item.heading}</p> 
          
          <section className='border border-secondary bg-black rounded-lg w-full p-2 m-2'>
            <p className='ml-5 whitespace-pre-line text-tertiary text-sm'>{item.desc}</p>
            </section>  
            <p className='ml-5 whitespace-pre-line text-tertiary text-sm'>{item.end}</p>

        </>)}

</Step>
 <a className='cursor-pointer align-center flex flex-col items-center mb-4' href=''> Next : Routing (Multiple Pages) </a>
</>
    )
};

export default Forms;