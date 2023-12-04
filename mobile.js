const mobiles =  [{id:1, brand:"Apple",model:"iPhone11",price:55000},
                {id:2, brand:"Xiaomi", model:"Poco F1",price:16000},
                {id:3, brand:"Apple", model:"iPhone12",price:71000},
                {id:4, brand:"Xiaomi", model:"Poco F2",price:19000},
                {id:5, brand:"Xiaomi", model:"Mi 11",price:21000},
                {id:6, brand:"Apple", model:"iPhoneXR",price:48500}];
const brands = ["Apple","Xiaomi"];
function getMobileByModel(obj){
    console.log("In function getMobileByModel:",obj);
    return mobiles.find((t1)=>t1.model===obj);
 }
 function getMobileById(obj){
    console.log("In function getMobileById:",obj);
    return mobiles.find((t1)=>t1.id===obj);
 }
 module.exports.fns={ getMobileByModel,getMobileById };

// module.exports={mobiles,brands};
