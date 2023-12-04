import React,{ Component } from "react";
class OptionsCB1 extends Component{

    handleChange=(e)=>{
        const {currentTarget:input}=e;
        let options={...this.props.options};
        if(input.name==="city" || input.name==="company")
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

    makeDropdown = (arr, value, name,label) => (
        <div className="form-group">
            <select className="form-control"
                name={name}
                value={value}
                onChange={this.handleChange} >
                <option value="">{label}</option>
                {arr.map((opt)=>(
                    <option>{opt}</option>
                ))}

            </select>
        </div>
    );
    makeCheckboxes=(arr,values,name,label)=>(

        <React.Fragment>
            <label className="form-check-label font-weight-bold">{label}</label>
            {arr.map((opt)=>(
                <div className="form-check" key={opt}>
                    <input className="form-check-input" value={opt} type="checkbox" name={name}
                    checked={values.find((val)=>val===opt)} onChange={this.handleChange}  />
                    <label className="form-check-label">{opt}</label>
                </div>
            ))}
        </React.Fragment>
    );

render (){
    const {city="",company="",minAge="" }=this.props.options;
    let {cities,companies,ages}=this.props;
    return (
        <div className="row border bg-light">
            <div className="col-12">
            {this.makeCheckboxes(cities,city.split(","),"city","Select City")}
            </div>
            <div className="col-12">
                {this.makeCheckboxes(companies,company.split(","),"company","Select Company")}
            </div>
            <div className="col-12">
                {this.makeDropdown(ages, minAge,"minAge","Select minimum Age")}
            </div>

        </div>
    )

    }
    
}
export default OptionsCB1;