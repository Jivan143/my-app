import React, { Component } from "react";

class MyComp extends Component {
  state = {
 nums:[10,23,3,45,16,25]
  };
isPrime =(num) =>{
    for(let i=2;i<=num/2;i++){
        if(num %i ===0) return 'Not prime';
    }
    return 'Prime';
}
  shownumber=()=> {
    let { nums }=this.state;
    let nums1=nums;
    nums1.sort((n1,n2)=>n1-n2);
    return (
<ul>
    {nums.map((a1)=>
            <li>{a1}</li>

    )}
    <h5>After sorting</h5>
    {nums1.map((n1)=>(
        <li>{n1}</li>
    ))}
</ul>  
    );
  };
  
  render() {
    return <React.Fragment>{this.shownumber()}</React.Fragment> ;
  }
}

export default MyComp;
