

import { useState } from 'react';
import {logo} from '../util/config'; // './' refres same directory or sub '../' refers 2 levels up
import { Link } from 'react-router-dom';


const Header=()=>{
  let btn='login';
  const [btnReact,setbtnReact]=useState('login');
  const state= ()=>{
   btn= (btnReact=='login')? 'logout' :'login';
   return setbtnReact(btn); //basically this function returned by usestae will once agin render the entire header component function and all the vaaiable values will be reassigned as it it changes browser will referesh and reconsillation algorithm starts where react compares diffrence in child ele inside that function component
  }
    return (
        <div className="header">
            <div className='logo'>
                <img  className="img" src={logo}/>
            </div>
            <div className="nav">
              <ul>
                <li><Link to='/'> Home </Link></li>
                <li><a href='/about'> About</a></li>
                <li><Link to='/contact'> Contact </Link></li>
                <li>Cart</li>
                <button onClick={()=>{
                  state();
                }}> {btnReact}  </button>
              </ul>
            </div>

        </div>
    )
}

module.exports=Header;