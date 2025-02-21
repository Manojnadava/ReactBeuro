import { fireEvent, render,screen } from "@testing-library/react"
import { Provider } from "react-redux"
import appStore from "../../util/appStore.js"
const Header=require('../header.js')
import {MemoryRouter} from 'react-router-dom';
import "@testing-library/jest-dom"




test('Checking heading is renderd with login button  or not',()=>{
    render(
        <MemoryRouter>
            <Provider store={appStore}>
           <Header/>
        </Provider>
        </MemoryRouter>
    )
//querying the virtual dom mounted or generated
const loginbutton=screen.getByRole('button',{name:'login'})
expect(loginbutton).toBeInTheDocument();
})

test('Checking heading is renderd with login button  or not',()=>{
    render(
        <MemoryRouter>
            <Provider store={appStore}>
           <Header/>
        </Provider>
        </MemoryRouter>
    )
//querying the virtual dom mounted or generated
const loginbutton=screen.getByRole('button',{name:'login'})
expect(loginbutton).toBeInTheDocument();
})

it('Checking  Cart in heading is renderd  ',()=>{
    render(
        <MemoryRouter>
            <Provider store={appStore}>
           <Header/>
        </Provider>
        </MemoryRouter>
    )
//querying the virtual dom mounted or generated
const login=screen.getByText(/cart/i)
expect(login).toBeInTheDocument();
})

test('Checking while clicking login button content is chnaged to logout',()=>{
    render(
        <MemoryRouter>
            <Provider store={appStore}>
           <Header/>
        </Provider>
        </MemoryRouter>
    )
//querying the virtual dom mounted or generated
const loginbutton=screen.getByRole('button',{name:'login'})
fireEvent.click(loginbutton); //it will click the button
const logoutbutton=screen.getByRole('button',{name:'logout'})
expect(logoutbutton).toBeInTheDocument();
})