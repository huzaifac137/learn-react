import React from 'react';

function Description({content  , contentMiddle, contentEnd , children}){
    return (
           <div className='w-11/12 ml-4 sm:w-3/4  mt-6  md:ml-12 bg-transparent border border-b-secondary border-t-0 border-r-0 border-l-0
             flex flex-col items-start justify-evenly p-5 mb-4 '>
          
          
          { content ?  <p className='ml-5 whitespace-pre-line text-md '>{content}</p> : null  }
          
         {contentMiddle ?   <section className='border border-secondary bg-black rounded-lg w-full p-2 m-2'>
             <p className='ml-5 whitespace-pre-line text-tertiary text-sm'>{contentMiddle}</p>
             </section>  : null}

             {children}
             <p className='ml-5 whitespace-pre-line text-sm'>{contentEnd}</p> 
              
           </div>
    )
};

export default Description;