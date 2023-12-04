import React, { Component} from "react";
class LeftStoreForm extends Component{

    handleChange=(e)=>{
        let s1={...this.props.optionsSel};
        let {currentTarget:input}=e;
        input.name==="name" 
        ? (s1.name = this.updateCBs(input.checked,input.value,s1.name)) 
        :(s1[input.name]=input.value);
        this.props.onChangeOption(s1);

    };
    updateCBs =(checked,value,arr) =>{
        if(checked) arr.push(value);
        else{
            let index=arr.findIndex((ele)=> ele ===value);
            if (index >=0) arr.splice(index,1);
        }
        return arr;

    }

    render(){
        const {optionsArray,optionsSel}=this.props;

    return ( <div className="container">
         {this.showCheckboxes("Name",optionsArray.name,"name",optionsSel.name)}
         
    </div>
     );
    }
    showCheckboxes= (label, arr, name,selArr) => {

        return (
        <React.Fragment>
        <label className="form-check-label h6">{label}</label>
         {arr.map((opt, index) => (
        
        <div className="form-check">
        
        <input className="form-check-input"
        value={opt} type="checkbox"
        name={name}
        checked={selArr.findIndex((sel)=> sel=== opt) >= 0}
        onChange={this.handleChange}
        />
        
        <label className="form-check-label">{opt}</label>
        </div>
         ))}
        </React.Fragment>
        );  
    };

  
 
}
export default LeftStoreForm;