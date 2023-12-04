import React,{Component} from "react";
class A72Mainprod extends Component{
    state={
        products:[
            {code: "A101", price : 150},
            {code: "A452", price : 450},
            {code: "B671", price : 52},
            {code: "H887" ,price : 17},
            {code: "V693", price : 188},
            {code: "A645", price : 306},
            {code: "J034", price : 109},
            {code: "N299", price : 75},
            {code: "M472", price : 250},
            {code: "R077", price : 300},
            {code: "B297", price : 150},
            {code: "A489", price : 160},
            {code: "A507", price : 25},
            {code: "K563", price : 45},
            {code: "M833", price : 80},
            {code: "T672", price : 100},
            {code: "B934", price : 200},
        ],
        filterCondition: "",
    filteredProducts: [],
    great:"",
    less:"",
    between:"",
        
    }
    handleFilterChange = (e) => {
        const selectedFilter = e.target.value;
        const { products } = this.state;

        console.log(selectedFilter)
            const filteredProducts = this.filterProducts(selectedFilter, products);
    
        this.setState({
          filterCondition: selectedFilter,
          filteredProducts,

        });
      };
      filterProducts = ( conditionString, products) => {
        console.log(conditionString)
        return products.filter((product) => {
            if (conditionString[0]==">"){
                let value = parseFloat(conditionString.substr(1));

                return product.price>value;
            }
             else if (conditionString[0]=="<"){
                let value = parseFloat(conditionString.substr(1));

                return product.price<value;
            }
            else if (conditionString.includes("-")) {
                const values = conditionString.split("-").map(parseFloat);
                if (values.length === 2) {
                    const value1 = values[0];
                    const value2 = values[1];
                    return product.price >= value1 && product.price <= value2;
                }

            }

       
          return true; 
        });
      };
    
    
    render (){
        const { great,less,between,filteredProducts } = this.state;
        let greatvalue=[ {value:100,display:">100"}, {value:9,display:">9"}, {value:1200,display:">1200"} ];
        let lessvalue=[ {value:95,display:"<95"}, {value:160,display:"<160"}, {value:100,display:"<1000"}];
        let betweenvalue=[{value1:35,value2:85,display:"30-85"},{value1:0,value2:240,display:"0-240"},{value1:156,value2:4100,display:"156-4100"}];
        return(
            <div className="container">
         <div>
        <div className="row text-center">
          <label>Filter by:</label>
          <div className="col-4">
          <div className="row">

          <select value={great} onChange={this.handleFilterChange}>

            <optgroup label="Greater Than">
            <option value="">Select Greter then</option>
              {greatvalue.map((condition, index) => (
                <option key={index} value={">"+condition.value}>
                  {condition.display}
                </option>
              ))}
            </optgroup>
            </select>
            </div>
            </div>
            <div className="col-4">
            <div className="row">

            <select value={less} onChange={this.handleFilterChange}>
            <option value="">Select less then</option>

            <optgroup label="Less Than">
              {lessvalue.map((condition, index) => (
                <option key={index} value={"<"+condition.value}>
                  {condition.display}
                </option>
              ))}
            </optgroup>
            </select>
            </div>
            </div>
            <div className="col-4">
            <div className="row">
            <select value={between} onChange={this.handleFilterChange}>
            <option value="">Select Betwwen them</option>

            <optgroup label="Between">
              {betweenvalue.map((condition, index) => (
                <option key={index} value={condition.value1 +"-"+ condition.value2}>
                  {condition.display}
                </option>
              ))}
            </optgroup>
            </select>
            </div>
            </div>
          </div>
        </div>
        <div>
        <h2>Filtered Products</h2>

            {filteredProducts.length>0?
             <div className="container">
          <div className="row border bg-dark text-light">
          <div className="col border">Product Code</div>
          <div className="col border">Product Price</div>
          </div>

            {filteredProducts.map((product, index) => (
              <div className="row border">
                <div className="col border " key={index}>
                {product.code}
              </div>
              <div className="col border" key={index}>
                {product.price}
              </div>
              </div>
            ))}
          </div>
          :
          <div className="row">
         <div className="col">
          <h2 className=" m-2 bg-info">No Filterd Data</h2>
          </div>
          </div>
          }
        </div>


            </div>
        );
    }
}
export default A72Mainprod;
