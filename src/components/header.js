

import { useContext, useState } from 'react';
import {logo} from '../util/config'; // './' refres same directory or sub '../' refers 2 levels up
import { Link } from 'react-router-dom';
import useOnlineStatus from '../util/useOnlineStatus';
import UserContext from '../util/UserContext';
import { useSelector } from 'react-redux';


const Header=()=>{
  let btn='login';
  const [btnReact,setbtnReact]=useState('login');
  const {loggedInUser}=useContext(UserContext);
  const state= ()=>{
   btn= (btnReact=='login')? 'logout' :'login';
   return setbtnReact(btn); //basically this function returned by usestae will once agin render the entire header component function and all the vaaiable values will be reassigned as it it changes browser will referesh and reconsillation algorithm starts where react compares diffrence in child ele inside that function component
  }
//in tailwind we are just providing className i.e flex so whateever the child ele residesin those div which hav e flex calss will inherit dispaly:flex in it
// we are using useelector hook to subsribe to store to read part or slice of store that cart slice
const cartItems=useSelector((store)=>{
 return  store.cart.items;
})
    return (
        <div className="flex justify-between">  
            <div className='w-64'>
                <img  className="" src={logo}/>
            </div>
            <div className="flex items-center">
              <ul className='flex p-10'>
                <li className='px-2'>Online status{ (useOnlineStatus())? 'Yes':'No' }</li>
                <li className='px-2'><Link to='/'> Home </Link></li>
                <li className='px-2'><a href='/about'> About</a></li>
                <li className='px-2'><Link to='/contact'> Contact </Link></li>
                <li className='px-2'><Link to='/grocery'> Grocery</Link></li>
                <li className='px-2 font-bold text-lg'><Link to='/cart'>Cart-{cartItems.length} </Link></li>
                <li className='px-2'> {loggedInUser} </li>
                <button onClick={()=>{
                  state();
                }}> {btnReact}  </button>
              </ul>
            </div>

        </div>
    )
}

module.exports=Header;