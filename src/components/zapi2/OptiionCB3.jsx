import React, { Component } from "react";

class OptionsCB3 extends Component {
//   handleChange = (e) => {
//     const { currentTarget: input } = e;
//     const { name, value, checked } = input;
//     let options = { ...this.props.options };

//     if (name === "country") {
//       if (checked) {
//         // Add the selected value to the options array
//         options[name] = options[name] ? [...options[name], value] : [value];
//       } else {
//         // Remove the deselected value from the options array
//         options[name] = (options[name] || []).filter((item) => item !== value);
//       }
//     }

//     console.log("OptionsCB", options);
//     this.props.onOptionChange(options);
//   };
  handleChange=(e)=>{
    const {currentTarget:input}=e;
    let options={...this.props.options};
    if(input.name==="country")
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
    console.log("inpValuesinpValues",inpValues,inpArr);
    return inpArr.join(",");
};


  makeCheckboxes = (arr, selectedValues, name, label) => (
    <React.Fragment>
      <h5 className="form-check-label font-weight-bold">{label}</h5>
      {arr.map((opt) => (
        <div className="form-check m-2" key={opt}>
          <input
            className="form-check-input"
            value={opt}
            type="checkbox"
            name={name}
            checked={selectedValues.includes(opt)}
            onChange={this.handleChange}
          />
          <label className="form-check-label">{opt}</label>
        </div>
      ))}
    </React.Fragment>
  );

  render() {
    const { country = "" } = this.props.options;
    let { countries } = this.props;
    return (
      <div className="row border">
        <p>Left Comp!</p>
        <h5>Options</h5>
        <h5 className="border-bottom"></h5>

      
        <div className="col-12">
                {this.makeCheckboxes(countries,country.split(","),"country","Select Company")}
            </div>
      </div>
    );
  }
}

export default OptionsCB3;
