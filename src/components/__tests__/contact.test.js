import { render ,screen} from "@testing-library/react";
import Contact from "../Contact";
import '@testing-library/jest-dom';

describe('Contact Us Test Page ', ()=>{
    test('Finding Contact Page renderd or Not',()=>{

        render(<Contact/>);
        const heading=screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
    
    })
    
    test('Finding button Contact Page renderd or Not',()=>{
    
        render(<Contact/>);
        const button=screen.getByRole('button');
        expect(button).toBeInTheDocument();
    
    })
    
    test('Finding button Contact Page renderd or Not',()=>{
    
        render(<Contact/>);
        const button=screen.getByText('Submit');
        expect(button).toBeInTheDocument();
        //console.log(button)  // this will return only single virtual object which is a button
    
    })
    
    test('Findingmultiple input elements Contact Page renderd or Not using All Method',()=>{
    
        render(<Contact/>);
        const inputelements=screen.getAllByRole('textbox'); //this will return array of holding virtual objects/jsx/react ele
        expect(inputelements.length).toBe(2)
       // console.log(inputelements)  // this will return only single virtual object which is a button
    
    })

})

