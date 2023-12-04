import React,{Component} from "react";
class ShowOptions extends Component{
    
    handleChange=(e)=>{
        const {currentTarget:input }=e;
        let options={...this.props.options};
        options[input.name]=input.value;
        this.props.onOptionChange(options);
        };
 render() {
    let {minPrice="",maxPrice="",inStock=""}=this.props.options;
    let prices=[0,25,50,75,100];
    let stocks=[
        {display:"In Stock",valuue:"yes"},
        {display:"Out of Stock",valuue:"no"},
    ];
    return (
        <div className="row">
            <div className="col-4">
                <div className="form-group">
                <select className="form-control" name="minPrice" value={minPrice} 
                onChange={this.handleChange} >
                    <option value="">Select Min Price</option>
                    {prices.map((pr)=>(
                        <option>{pr}</option>
                    ))}

                    </select>
                </div>
            </div>

            <div className="col-4">
                <div className="form-group">
                <select className="form-control" name="maxPrice" value={maxPrice} 
                onChange={this.handleChange} >
                    <option value="">Select Max Price</option>
                    {prices.map((pr)=>(
                        <option>{pr}</option>
                    ))}

                    </select>
                </div>
            </div>

            <div className="col-4">
                <div className="form-group">
                <select className="form-control" name="inStock" value={inStock} 
                onChange={this.handleChange} >
                    <option value="">Select Stock Position</option>
                    {stocks.map((pr)=>(
                        <option value={pr.valuue}>{pr.display}</option>
                    ))}

                    </select>
                </div>
            </div>


        </div>
    )
 }

 }
 export default ShowOptions;

