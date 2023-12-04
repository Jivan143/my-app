import React, { Component} from "react";
class LeftPanelForm extends Component{

    handleChange=(e)=>{
        let s1={...this.props.optionsSel};
        let {currentTarget:input}=e;
        input.name==="brand" 
        ? (s1.brand = this.updateCBs(input.checked,input.value,s1.brand)) 
        :input.name==="ram"
        ? (s1.ram = this.updateCBs(input.checked,input.value,s1.ram)) 
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
         <h4>Choose Options</h4>
         <button className="btn btn-warning btn-sm" onClick={this.props.onClear}>
            Clear All
         </button>  <br />
         {this.showCheckboxes("Brand",optionsArray.brand,"brand",optionsSel.brand)}
         {this.showCheckboxes("RAM",optionsArray.ram,"ram",optionsSel.ram)}
         {this.showRadios("Processor",optionsArray.processor ,"processor",optionsSel.processor)}
         {this.showRadios("Ratings",optionsArray.rating ,"rating",optionsSel.rating)}
         {this.showDropdown("hardDisk",optionsArray.hardDisk ,"hardDisk",optionsSel.hardDisk)}

  
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
    showRadios=(label,arr,name,selVal)=>{
        return <React.Fragment>
        <label className="form-check-label h6">{label}</label>
        {arr.map((opt) => (
        
        <div className="form-check">
        
        <input className="form-check-input"
        value={opt} type="radio" name={name}
        
        checked={selVal === opt}
        onChange={this.handleChange}
        />
        
        <label className="form-check-label">{opt}</label>
        </div>
         ))}
        </React.Fragment>
    }
  
    showDropdown=(label,arr,name,selVal)=>{
        return (
            <React.Fragment>
              <label className="form-check-label h6">{label}</label>
              <select
                className="form-control" value={selVal} name={name} onChange={this.handleChange}
              >
                  <option value="">Select HardDisk</option>
                {arr.map((opt, index) => (
                  <option key={index} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </React.Fragment>
          );
    }
}
export default LeftPanelForm;