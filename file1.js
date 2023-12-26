let fs =require("fs");
const { data } = require("jquery");


function getStat(filename){
    console.log('Stat',filename);
    fs.stat(filename,function(err,content){
        if(err) console.log(err);
        else console.log(content);
    });
}
function checkAccess(filename){
    console.log('checkAccess',filename);
    fs.access(filename,function (err){
        err?console.log("Does not exist") :console.log("Exist")
    })

}
 function readFile(filename){
    console.log('readfile:',filename);
    fs.readFile(filename,"utf8",function(err,data){
        if(err) console.log(err);
        else console.log(data);
    });
 }
function writeFile(filename,data){
    console.log('writeFile:',filename);
    fs.writeFile(filename,data,function (err){
        if(err) console.log(err);
    });
}
function appendFile(filename,data){
    console.log('writeFile:',filename);
    fs.appendFile(filename,data,function (err){
        if(err) console.log(err);
    });
}
let fname="app.js";
// getStat(fname);
// checkAccess(fname);
readFile(fname);
appendFile(fname,"AbcdABCD");
readFile(fname);
writeFile(fname,"XYZxyz");
readFile(fname);
 
