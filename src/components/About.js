
import React from 'react';
import User from  './User';
import UserClass from './UserClass';
export class About extends React.Component {
    constructor(props){
        super(props);
        console.log('About Const')
    }

    componentDidMount(){
       // console.log('Parent component mount')
  }
    render () {
       // console.log('About render called')
        return (
            <div>
                <h1> Helo About to Food App</h1>
                <h2> Cool</h2>
                <UserClass name={"nadava"} location='Mangalore' />
            </div>
         )   
    }
    
}

// export const About = ()=>{
//  return (
//     <div>
//         <h1> Helo About to Food App</h1>
//         <h2> Cool</h2>
//         <UserClass name={"nadava"} location='Mangalore' />
//     </div>
//  )
// }

export default About;