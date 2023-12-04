import React,{ Component } from "react";
class OptionsCBbook extends Component{

    handleChange=(e)=>{
        const {currentTarget:input}=e;
        let options={...this.props.options};
        if(input.name==="bestseller" || input.name==="language")
        options[input.name]=this.updateCBs(
        options[input.name],
        input.checked,
        input.value
    );
    else options[input.name]=input.value;
    console.log("OptionsCB",options);
    this.props.onOptionChange(options);
    };

    updateCBs =(inpValues,checked,value)=>{
        let inpArr=inpValues?inpValues.split(","):[];
        if(checked) inpArr.push(value);
        else{
            let index=inpArr.findIndex((ele)=> ele===value);
            if(index >=0) inpArr.splice(index,1);
        }
        console.log(inpValues,inpArr);
        return inpArr.join(",");
    };

  
    makeCheckboxes=(arr,values,name,label)=>(
   
        <React.Fragment>
            <h4 className="form-check-label font-weight-bold border-top m-2">{label}</h4>
            {arr.map((opt,index)=>(
                <div className="form-check m-2" key={opt}>
                    <input className="form-check-input" value={opt.refineValue} type="checkbox" name={name}
                    checked={values.find((val)=>val===opt.refineValue)} onChange={this.handleChange}  />
                    <label className="form-check-label">{opt.refineValue}({opt.totalNum})</label>
                </div>
            ))}
        </React.Fragment>
    );

render (){
    const {bestseller="",language="" }=this.props.options;
    let {languages,bestsellers}=this.props;
   

    return (
        <div className="row ">
            <div className="col">
            {this.makeCheckboxes(bestsellers,bestseller.split(","),"bestseller","BestSeller")}
            </div>
            <div className="col">
                {this.makeCheckboxes(languages,language.split(","),"language","Language")}
            </div>
 
        </div>
    )

    }
    
}
export default OptionsCBbook;