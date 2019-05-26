import { testRecFun } from "pkg";

let p1 = testRecFun({one: '1'})
console.log(p1.result.one)
let p2 = p1.deeper({two: '2'})
console.log(p2.result.one, p2.result.two);
let p3 = p2.deeper({three: '3'})
console.log(p3.result.one, p3.result.two, p3.result.three)
