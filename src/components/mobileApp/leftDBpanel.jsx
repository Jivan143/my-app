import React,{ Component } from "react";
class LeftpaneDB extends Component{

    handleChange = (e) => {
        const { currentTarget: input } = e;
        let options = { ...this.props.options };
    
        if (input.name === "brand" || input.name === "ram" || input.name === "rom") {
            options[input.name] = this.updateCBs(
                options[input.name],
                input.checked,
                input.value
            );
        } else {
            options[input.name] = input.value;
        }
    
        console.log("OptionsCB", options);
        this.props.onOptionChange(options);
    };
    

    updateCBs = (inpValues, checked, value) => {
        let inpArr = inpValues ? inpValues.split(",") : [];
    
        if (checked) {
            inpArr.push(value);
        } else {
            let index = inpArr.findIndex((ele) => ele === value);
            if (index >= 0) {
                inpArr.splice(index, 1);
            }
        }
    
        console.log(inpValues, inpArr);
        return inpArr.join(",");
    };
    
  
    makeCheckboxes = (arr, values, name, label) => (
        <React.Fragment>
            <h4 className="form-check-label font-weight-bold border-top m-2">{label}</h4>
            {arr.map((opt, index) => (
                <div className="form-check m-2" key={index}>
                    <input
                        className="form-check-input"
                        value={opt}
                        type="checkbox"
                        name={name}
                        checked={values.includes(opt)}
                        onChange={this.handleChange}
                    />
                    <label className="form-check-label">{opt}</label>
                </div>
            ))}
        </React.Fragment>
    );
    
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

    makeDropdown = (arr, value, name, label) => (
        <div className="form-group">
            <select className="form-control"
                name={name}
                value={value}
                onChange={this.handleChange} >
                <option key="" value="">{label}</option>
                {arr.map((opt, index) => (
                    <option key={index} value={opt}>{opt}</option>
                ))}
            </select>
        </div>
    );
    
render (){
    const {brand="",ram="",rom=""}=this.props.options;
    let {brands,rams,roms}=this.props;

   

    return (
        <div className="row  m-1">
            <div className="">
            {this.makeCheckboxes(brands,brand.split(","),"brand"," Brand")}
            </div>
            <div className="">
            {this.makeCheckboxes(rams,ram.split(","),"ram"," RAM")}
            </div>
            <div className="">
            {this.makeCheckboxes(roms,rom.split(","),"rom"," ROM")}
            </div>
        </div>
    )

    }
    
}
export default LeftpaneDB;