import React,{ Component } from "react";
import http from"./AssignmentHttpservices";
class AssignmetleftPanel extends Component{
 state={
    products:[],
    shops:[],
 }


      
    async fetchData() {
        let resposne =await http.get(`/shops`);
        let {data}=resposne;

        this.setState({
            shops:data,
        })
    }
    async fetchData2() {
        let resposne =await http.get(`/products`);
        let {data}=resposne;

        this.setState({
            products:data,
        })
    }
    componentDidMount() {
        this.fetchData();
        this.fetchData2();
      }
    
    



    handleChange = (e) => {
        const { currentTarget: input } = e;
        let options = { ...this.props.options };
    
        if (input.name === "" || input.name === "product") {
            options[input.name] = this.updateCBs(
                options[input.name],
                input.checked,
                input.value
            );
        } else {
            options[input.name] = input.value;
        }
    
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
    
        return inpArr.join(",");
    };
    
  
    makeCheckboxes = (arr, values, name, label) => (
        <React.Fragment>
            <h4 className="form-check-label font-weight-bold border-top m-2">{label}</h4>
            {arr.map((opt, index) => (
                <div className="form-check m-2" key={index}>
                    <input
                        className="form-check-input"
                        value={opt.id}
                        type="checkbox"
                        name={name}
                        checked={values.includes(opt.id)}
                        onChange={this.handleChange}
                    />
                    <label className="form-check-label">{opt.name}</label>
                </div>
            ))}
        </React.Fragment>
    );
    
    makeRadios=(arr,values,name,label)=>(

        <React.Fragment>
            <h5 className="form-check-label font-weight-bold">{label}</h5>
            {arr.map((opt)=>(
                <div className="form-check m-2" key={opt.id}>
                    <input className="form-check-input" value={opt.id} type="radio" name={name}
                    checked={values===opt.id} onChange={this.handleChange}  />
                    <label className="form-check-label">{opt.name}</label>
                </div>
            ))}
        </React.Fragment>
    );

    makeDropdown = (arr, value, name, label,abc) => (
        <React.Fragment>
        <h6 className="form-check-label font-weight-bold">{abc}</h6>
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
                </React.Fragment>

    );
    
render (){
    const {sort="",shop="",product=""}=this.props.options;
    let {sorts}=this.props;
    const {products,shops}=this.state
    let prodarr = products.map((ele) => ({ name: ele.productname, id: 'pr'+ele.productid }));
    let shoarr = shops.map((ele) => ({ name: ele.name, id: 'st'+ele.shopid }));

   console.log("prodarr",prodarr,"shoarr",shoarr,shops);

    return (
        <div className="row  m-1">
            <div className="">
            {this.makeDropdown(sorts,sort.split(","),"sort"," Select Option","Sort By")}
            </div>
            <div className="">
            {this.makeRadios(shoarr,shop,"shop"," Shop")}
            </div>
            <div className="">
            {this.makeCheckboxes(prodarr,product.split(","),"product"," Product")}
            </div>
       
        </div>
    )

    }
    
}
export default AssignmetleftPanel;