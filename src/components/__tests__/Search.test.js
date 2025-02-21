import { fireEvent, render ,screen ,waitFor} from "@testing-library/react"
import { act } from "react";
import { MemoryRouter } from "react-router";
import "@testing-library/jest-dom"
const Body=require('../body');
const restaurantData = require("../MockData/Mockentire.json");

  beforeAll(() => {
    console.log('run this helper before all test case excecuted')
    global.fetch= jest.fn(()=>{
        return Promise.resolve({
            json: ()=>{
                return Promise.resolve(restaurantData) 
            }
        })
    })
  })

  beforeEach(() => {
    console.log("This runs before each test");
  });

  afterEach(() => {
    console.log("This runs before each test");
  });



test('loading body component with serach functionality', async ()=>{ 
     await act(async()=>{
        render(
            <MemoryRouter>
                <Body/>
            </MemoryRouter>
        
    );
    })
    // await waitFor(()=>{
    //     expect(screen.getByRole('button',{name:'Submit'}).toBeInTheDocument());
    // })
      //just rendering no operation on componnets
      const searchbtn=screen.getByRole('button',{name:'Top rated restaurant'});
      const btn=screen.getByRole('button',{name:'Submit'});
      expect(searchbtn).toBeInTheDocument();
      const searchinput=screen.getByTestId('search');
      fireEvent.change(searchinput,{target: {value:"burger"}})  //mimicking 
      fireEvent.click(btn);
      const cards=screen.getAllByTestId('resCard');
      console.log('lengthop')
      console.log(cards.length);
      expect(cards.length).toBe(8);



})