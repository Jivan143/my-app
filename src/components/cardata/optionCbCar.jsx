import React,{ Component } from "react";
class OptionsCBCar extends Component{

    handleChange=(e)=>{
        const {currentTarget:input}=e;
        let options={...this.props.options};
        if(input.name==="city")
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

  

    
    makeRadios=(arr,values,name,label)=>(

        <React.Fragment>
            <h5 className="form-check-label font-weight-bold  border ">{label}</h5>
            {arr.map((opt)=>(
                <div className="form-check border" key={opt}>
                    <input className="form-check-input" value={opt} type="radio" name={name}
                    checked={values.includes(opt)} onChange={this.handleChange}  />
                    <label className="form-check-label">{opt}</label>
                </div>
            ))}
        </React.Fragment>
    );

  
    
render (){
    const {fuel="",type="", sort=""}=this.props.options;
    let {fuels,sortbys,types}=this.props;

   

    return (
        <div className="row">
          
            
            <div className=" border ">
                {this.makeRadios(fuels,fuel.split(","),"fuel","Fuel")}
            </div>
            <div className=" border">
                {this.makeRadios(types,type.split(","),"type","Type")}
            </div>
            <div className=" border ">
                {this.makeRadios(sortbys,sort.split(","),"sort","Sort")}
            </div>


        </div>
    )

    }
    
}
export default OptionsCBCar;