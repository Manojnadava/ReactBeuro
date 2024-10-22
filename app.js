
const React=require('react');
const ReactDOM=require('react-dom/client') ;
//import React from 'react' ;
//import ReactDOM  from 'react-dom';
//react.createElement is object =>renderd html ele
const heading =React.createElement('h1',{id:'heading'},"Namasthe react");
console.log(heading);
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(heading); //thids rendering react element only not components

const ele=<span> Nesting react ele inside react ele</span>
//Need o use JSX esasier to create recat elemet instead of object prototype and it is not htnl in JS it is a html like structure
//const jsxheading=`<h1 id='heading'> Namaste React using JSX</h1>`;
const jsxheading=(
    <h1 className='heading' tabIndex='0'> 
    {ele}
    <HeadingComponentt3 />

    Namaste React using  functional component JSX
    </h1>
); // this jsxheading becoes react ele or obj

console.log(jsxheading);

root.render(jsxheading);
//JSX is transpiled or converted to virtual dom for react from parcel through babel
//JSX code=> React.createElement => Js object virtual Dom => HTML DOM


//React Components
//class based componernts and functional components as we create based on 2 ways
const num=1000;
const xss= "<script>alert('XSS');</script>";

const HeadingComponent=() =>{
    return <h1 className='heading' tabIndex='0'> 
    Namaste React using JSX
    </h1>;  //this will return jsx ele when called or renderd or js function which returns react element
}

const HeadingComponentt=() =>{
    ( <div>
        <h1 className='heading' tabIndex='0'> Namaste React using JSX func comp
        </h1>
    </div>
    )   //this will return jsx ele when called or renderd or js function which returns react element
}

var HeadingComponentt3=() =>
    ( <div>
        <Title />  //this is called component composition
        <h2> {num+2} </h2> //curly to include js code
        {jsxheading}
        {  HeadingComponent()}//calling functional component
        <h1 className='heading' tabIndex='0'> Namaste React using JSX
        </h1>
    </div>
    )   //this will return jsx ele when called or renderd or js function which returns react element
// all syntaxess are same


const Title=()=> {
    return <h1>Hello bvc </h1>
}

root.render(jsxheading); //calling ele