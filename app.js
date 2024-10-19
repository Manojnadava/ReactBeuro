/* 

i want structure like this
<div  id='parent'> 
<div id='child'> 
<h1> I am bossd </h1>
 <?div>

</div>

*/
const React=require('react');
const ReactDOM=require('react-dom') ;
//import React from 'react' ;
//import ReactDOM  from 'react-dom';
const parent= React.createElement('div',{id:'parent'},[
    React.createElement('div',{id:'child1'},
        [React.createElement('h1',{},'I am h1' ),React.createElement('h2',{},'I am h2' )]  
      ),
      React.createElement('div',{id:'child2'},
        [React.createElement('h1',{},'I am h1' ),React.createElement('h2',{},'I am h2' )]  
      )
]
    
)



const heading=React.createElement('h1',
    {id:'heading'},
    'Hello BVC');

    console.log(parent);
        const root=ReactDOM.createRoot(document.getElementById('root'));//these used to cerate base ment put react elemets
        //console.log(root);
       // root.render(heading);
       root.render(parent);// now here react object converts to html ele