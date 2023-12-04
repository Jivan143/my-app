let name="Jack";
let age=25;
let techs=["JS","Node","React"];

 function knowsTech(tech){
    console.log("In function knowsTech:",tech);
    return techs.find((t1)=>t1===tech)?true:false;
 }
 module.exports={name,age,techs};
 module.exports.fns={ knowsTech };
// module.exports.name=name;

// module.exports.age=age;
// module.exports.techs=techs;
// module.exports.hello="Hello";