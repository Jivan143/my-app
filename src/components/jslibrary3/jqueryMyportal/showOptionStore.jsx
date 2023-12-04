import React,{Component} from "react";
class ShowOptionsStore extends Component{
    
    handleChange=(e)=>{
        const {currentTarget:input }=e;
        let options={...this.props.options};
        options[input.name]=input.value;
        this.props.onOptionChange(options);
        };
 render() {
    let {location=""}=this.props.options;
    let {data}=this.props;

    return (
        <div className="row">
            <div className="col-4">
                <div className="form-group">
                <select className="form-control" name="location" value={location} 
                onChange={this.handleChange} >
                    <option value="">Select Location</option>
                    {data.map((pr)=>(
                        <option>{pr}</option>
                    ))}

                    </select>
                </div>
            </div>

         

       


        </div>
    )
 }

 }
 export default ShowOptionsStore;

