import React from 'react';
import Heading from './Heading';
import Description from './Description';

function Step({headingTitle , descriptionContent ,descriptionContentMiddle,  descriptionContentEnd, children}){
    return  (
        <>
        <Heading title={headingTitle}/>
        <Description content={descriptionContent} contentMiddle={descriptionContentMiddle} contentEnd={descriptionContentEnd} > {children} </Description>
        </>
    )
};

export default Step;