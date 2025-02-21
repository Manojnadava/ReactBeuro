const { act } = require("react");
const restaurantData = require("../MockData/Restomenu.json");
 import RestaurantMenu from "../RestaurantMenu";
 import { fireEvent,screen, render} from "@testing-library/react";
 import "@testing-library/jest-dom"
 import { Provider } from "react-redux";
 import appStore from "../../util/appStore";
 const Header=require('../header.js')
 import {MemoryRouter} from 'react-router-dom';
import Cart from "../Cart";


global.fetch= jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(restaurantData) 
        }
    })
})


test('testing loading menu items ',async ()=>{

    await act(async ()=>{
       render
       (
         <MemoryRouter>
             <Provider store={appStore}>
            <Header/>
             <RestaurantMenu/>
             <Cart/>
        </Provider>
         </MemoryRouter>
       
       
       )
    });
   const menu=  await screen.findByText('Seafood');//this returns single object elememnt whom which we apply click but we if use getAllby we get array of obj
   console.log('menuio');
   //console.log(menu);
   expect(menu).toBeInTheDocument();
   fireEvent.click(menu);

   expect(screen.getAllByTestId('menus').length).toBe(3);

   const addbtn=screen.getAllByRole('button',{name:'add'})
   fireEvent.click(addbtn[0]);

   
   //console.log(cartdetail);

   expect(screen.getByText('Cart-1')).toBeInTheDocument();  //tried to check wether menu is added to cart or not

   expect(screen.getAllByTestId('menus').length).toBe(4);// checking whether added menu present in cart page or not

//diff between getByText and findByText
//getByText immediately searches for an element synchronously.
   fireEvent.click(screen.getByRole('button',{name:'remove'}));
   expect(screen.getAllByTestId('menus').length).toBe(3);

   

})