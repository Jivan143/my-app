import React,{Component} from "react";
class LeftPanelOptions extends Component{
 handleChange=(e)=>{
    let {currentTarget:input}=e;
    let options={...this.props.options};
    options[input.name]=input.value;
    this.props.onOptionChange(options)

 }

 makeDropdown=(arr,value,name,label)=>(
    <div className="form-group">
        <select className="form-control" name={name} value={value} onChange={this.handleChange}>
            <option value="">{label}</option>
            {arr.map((opt)=>(
                <option>{opt}</option>
            ))}
        </select>
    </div>
 );
 render() {
    let {brand,ram,processor,hardDisk,rating}=this.props.options;
    let {allOptions}=this.props;
    return (
    <div className="row border bg-light">
        <div className="col-12 text-center">
            <button className="btn btn-primary btn-sm mt-2 mb-2" onClick={()=>this.props.onOptionChange({})}>Clear  All Options</button>
        </div>
        <div className="col-12">
            {this.makeDropdown(allOptions.brand,brand,"brand","Select Brand")}
        </div>
        <div className="col-12">
            {this.makeDropdown(allOptions.ram,ram,"ram","Select RAM")}
        </div>
        <div className="col-12">
            {this.makeDropdown(allOptions.processor,processor,"processor","Select Processor")}
        </div>
        <div className="col-12">
            {this.makeDropdown(allOptions.hardDisk,hardDisk,"hardDisk","Select hardDisk")}
        </div>
        <div className="col-12">
            {this.makeDropdown(allOptions.rating,rating,"rating","Select Rating")}
        </div>
    </div>

    )

 }
}
export default LeftPanelOptions;