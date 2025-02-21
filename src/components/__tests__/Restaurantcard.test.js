import { render ,screen} from "@testing-library/react"
import { CardItems, productLabel} from "../CardItem"
const restaurantData = require("../MockData/MockData.json");
import "@testing-library/jest-dom"



test('Used to check whether restaurant card is renderd',()=>{
    render(<CardItems item={restaurantData}/>)
    const content=screen.getByText('Pizza Hut');
    expect(content).toBeInTheDocument();
})


test('Used to check whether Promoted label/enhanced card is renderd',()=>{

    const EnhansedComp=productLabel(CardItems); 
    render(<EnhansedComp item={restaurantData}/>)
    const content=screen.getByText('Promted');
    expect(content).toBeInTheDocument();
})