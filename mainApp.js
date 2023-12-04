let xyz=require("./mobile.js");
let abc=require("./sales.js");
let price=xyz.fns.getMobileByModel("iPhone12");
let id=abc.fns.getMobileById("iPhone12");
// console.log(xyz.mobiles);
// console.log(xyz.brands);
function getabc(obj){
    let prc=xyz.fns.getMobileById(obj);
let qty=abc.fns.getMobileById(obj);

    return qty.quantity*prc.price;
}
console.log("matching By Model:",getabc(1));
// console.log("matching By Id:",xyz.fns.getMobileById(4));
