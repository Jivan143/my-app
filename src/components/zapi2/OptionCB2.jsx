import React,{ Component } from "react";
class OptionsCB2 extends Component{

    handleChange = (e) => {
        const { currentTarget: input } = e;
        let options = { ...this.props.options };
        if (input.name === "country") {
          options[input.name] = input.value;
        } else {
          options[input.name] = input.value;
        }
        console.log("OptionsCB", options);
        this.props.onOptionChange(options);
      };
    

    // updateCBs =(checked,value)=>{
    //     let inpArr="";
    //     if(checked) inpArr=value;
      
    //     console.log("inpValues",inpArr);
    //     return inpArr;
    // };


    makeRadios=(arr,values,name,label)=>(

        <React.Fragment>
            <h5 className="form-check-label font-weight-bold">{label}</h5>
            {arr.map((opt)=>(
                <div className="form-check m-2" key={opt}>
                    <input className="form-check-input" value={opt} type="radio" name={name}
                    checked={values.includes(opt)} onChange={this.handleChange}  />
                    <label className="form-check-label">{opt}</label>
                </div>
            ))}
        </React.Fragment>
    );

render (){
    const {country="" }=this.props.options;
    let {countries}=this.props;
    return (
        <div className="row border ">
            <p>Left Comp!</p>
            <h5 >Options</h5>
            <h5 className="border-bottom "></h5>


            <div className="col-12">
            {this.makeRadios(countries,country.split(","),"country","Countries")}
            </div>
            
           

        </div>
    )

    }
    
}
export default OptionsCB2;