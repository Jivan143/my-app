const orders =  [{orderNo:134, mobileId:1, quantity:2},
                {orderNo:156, mobileId:2, quantity:1},
                {orderNo:188, mobileId:4, quantity:3},
                {orderNo:291, mobileId:2, quantity:4},
                {orderNo:322, mobileId:4, quantity:4},
                {orderNo:215, mobileId:3, quantity:1}];
  
    function getMobileById(obj){
        console.log("In function salesById:",obj);
        return orders.find((t1)=>t1.mobileId===obj);
        }
     module.exports.fns={ getMobileById };
