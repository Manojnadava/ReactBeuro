//import { sum } from "../sum.js";

const sum = require("../sum"); 

test("sum of two numbers", () => {
  const result = sum(4, 3);
  expect(result).toBe(7);
});
