/* Html components req for food app
1.Header section
Logo 
Nav items

2. body
 search b utton
 Conatiner(items)
   Cards - contasins items info-rest name , price, couisne , rating

3.Footer
  Copyright
  address



*/
//Lazy loading al;so called chuncking splitting app components dynamic or ondemand loading
 
//const React=require('react');
import React, { useEffect, useState } from 'react';
const ReactDOM=require('react-dom/client') ;

const Header=require('./components/header');
const Body=require('./components/body');
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import { About } from './components/About';
import Contact from './components/Contact';
import { Error } from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { Cart } from './components/Cart';
import UserContext from './util/UserContext';
//import Grocery from './components/Grocery';
// here RouterProvider  is a component provided by router where component is loaded based on roting
const Grocery=React.lazy(()=>import('./components/Grocery'));
import { Provider } from 'react-redux';
import appStore from './util/appStore';
const AppLayout=()=>{
   const [user,setUser]=useState();
   useEffect(()=>{
   const data={
    loggedInUser : 'Manoj',
   }
   setUser(data.loggedInUser)
   },[])
  
    return (
        <div className="app">
          <Provider store={appStore}>
          <UserContext.Provider value={{loggedInUser : user,setUser}}>
            <Header />
            <Outlet />
            </UserContext.Provider>
            </Provider>
            {console.log(<Outlet />)}

        </div>
    )
}

export const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<Body/>,
       
      },
      {
        path:'/about',
        element:<About/>,
       
      },
      {
        path:'/grocery',
        element:
        <React.Suspense fallback={<div> Loading...</div>}><Grocery /></React.Suspense>
      },
      {
        path:'/cart',
        element: <Cart/>

      },
      {
        path:'/contact',
        element: <Contact/>

      },
      {
        path:'/restaurants/:resid',
        element:<RestaurantMenu/>
      }

    ],
    errorElement:<Error/>
   
  },
  

])



const root=ReactDOM.createRoot(document.getElementById('root'));
//root.render(<AppLayout />);


root.render(<RouterProvider router={appRouter} />);
