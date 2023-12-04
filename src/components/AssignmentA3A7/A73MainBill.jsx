import React, {Component} from "react";
class A73MainBill extends Component{
    state={
        billData:[
            {"code":"PEP221","prod":"Pepsi","price":12,"instock":"Yes","category":"Beverages"},
            {"code":"COK113","prod":"Coca Cola","price":18,"instock":"Yes","category":"Beverages"},
            {"code":"MIR646","prod":"Mirinda","price":15,"instock":"No","category":"Beverages"},
            {"code":"SLI874","prod":"Slice","price":22,"instock":"Yes","category":"Beverages"},
            {"code":"MIN654","prod":"Minute Maid","price":25,"instock":"Yes","category":"Beverages"},
            {"code":"APP652","prod":"Appy","price":10,"instock":"No","category":"Beverages"},
            {"code":"FRO085","prod":"Frooti","price":30,"instock":"Yes","category":"Beverages"},
            {"code":"REA546","prod":"Real","price":24,"instock":"No","category":"Beverages"},
            {"code":"DM5461","prod":"Dairy Milk","price":40,"instock":"Yes","category":"Chocolates"},
            {"code":"KK6546","prod":"Kitkat","price":15,"instock":"Yes","category":"Chocolates"},
            {"code":"PER5436","prod":"Perk","price":8,"instock":"No","category":"Chocolates"},
            {"code":"FST241","prod":"5 Star","price":25,"instock":"Yes","category":"Chocolates"},
            {"code":"NUT553","prod":"Nutties","price":18,"instock":"Yes","category":"Chocolates"},
            {"code":"GEM006","prod":"Gems","price":8,"instock":"No","category":"Chocolates"},
            {"code":"GD2991","prod":"Good Day","price":25,"instock":"Yes","category":"Biscuits"},
            {"code":"PAG542","prod":"Parle G","price":5,"instock":"Yes","category":"Biscuits"},
            {"code":"MON119","prod":"Monaco","price":7,"instock":"No","category":"Biscuits"},
            {"code":"BOU291","prod":"Bourbon","price":22,"instock":"Yes","category":"Biscuits"},
            {"code":"MAR951","prod":"MarieGold","price":15,"instock":"Yes","category":"Biscuits"},
            {"code":"ORE188","prod":"Oreo","price":30,"instock":"No","category":"Biscuits"}],
            Categorys:['Beverages','Chocolates','Biscuits'],
            Instocks:['Yes','No'],
            Pricerange:['<10','10-20','>20'],
            billItems: [],
            count: 0,
            Totalamount: 0,
            totalquantity: 0,
            filterCategory: "",
            filterStock: "",
            filterPrice: "", 
            view:1, 
            sortColumn: null,
            isSortAscending: true,

     

       
    }
    increaseQuantity = (itemId) => {
        const { billItems } = this.state;
        const item = billItems.find((item) => item.id === itemId);
    
        if (item) {
          item.quantity += 1;
          item.value += item.price;
          this.setState({
            totalquantity: this.state.totalquantity + 1,
            Totalamount: this.state.Totalamount + item.price,
          });
        }
      };
    
      decreaseQuantity = (itemId) => {
        const { billItems } = this.state;
        const item = billItems.find((item) => item.id === itemId);
    
        if (item && item.quantity > 1) {
          item.quantity -= 1;
          item.value -= item.price;
          this.setState({
            totalquantity: this.state.totalquantity - 1,
            Totalamount: this.state.Totalamount - item.price,
          });
        } else {
          this.removeItem(itemId);
        }
      };
    
      removeItem = (itemId) => {
        const { billItems } = this.state;
        const itemIndex = billItems.findIndex((item) => item.id === itemId);
    
        if (itemIndex !== -1) {
          const item = billItems[itemIndex];
          this.setState({
            totalquantity: this.state.totalquantity - item.quantity,
            Totalamount: this.state.Totalamount - item.value,
          });
    
          billItems.splice(itemIndex, 1);
          this.setState({ billItems });
        }
      };
    
      addTobill = (code) => {
        const { billData } = this.state;
        let index=billData.findIndex((ele)=>ele.code===code);
        const selectedItem = billData[index];
        console.log(selectedItem);
        const existingItem = this.state.billItems.find(
          (item) => item.code === selectedItem.code
        );
    
        if (existingItem) {
          existingItem.quantity += 1;
          existingItem.value += selectedItem.price;
          this.setState({
            totalquantity: this.state.totalquantity + 1,
            Totalamount: this.state.Totalamount + selectedItem.price,
          });
        } else {
          selectedItem.quantity = 1;
          selectedItem.id = this.state.count;
          selectedItem.value = selectedItem.price;
          this.setState({
            billItems: [...this.state.billItems, selectedItem],
            totalquantity: this.state.totalquantity + 1,
            Totalamount: this.state.Totalamount + selectedItem.price,
            count: this.state.count + 1,
          });
        }
      };
    
      clearItem = () => {
        const confirmClear = window.confirm(
          "Are you sure you want to clear the Bill items?"
        );
    
        if (confirmClear) {
          this.setState({
            billItems: [],
            totalquantity: 0,
            Totalamount: 0,
          });
        }
      };
    
      filterChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
          case "filterCategory":
            this.setState({
              filterCategory: value === "Select Category" ? "" : value,
            });
            break;
          case "filterStock":
            this.setState({
              filterStock: value === "Select Stock" ? "" : value,
            });
            break;
          case "filterPrice":
            this.setState({
              filterPrice: value === "Select Price Range" ? "" : value,
            });
            break;
        }
      };
      

    showBill=()=>{
        this.setState({
            billItems: [],
            count: 0,
            Totalamount: 0,
            totalquantity: 0,
            filterCategory: "",
            filterStock: "",
            filterPrice: "", 
            view:0, 
            sortColumn: null,
            isSortAscending: true,

        })

        
    }
     sort=(col)=>{
        const { sortColumn, isSortAscending } = this.state;
        let s1 = { ...this.state };
    
        if (col === sortColumn) {
          s1.isSortAscending = !isSortAscending;
        } else {
          s1.sortColumn = col;
          s1.isSortAscending = true;
        }
            switch(col){
            case 0 :s1.billData.sort((p1,p2)=>p1.code.localeCompare(p2.code));
            break;
            case 1 :s1.billData.sort((p1,p2)=>p1.prod.localeCompare(p2.prod));
            break;
            case 2: s1.billData.sort((p1,p2)=>p1.category.localeCompare(p2.category));
            break;
            case 3: s1.billData.sort((p1,p2)=>(+p1.price)-(+p2.price));
            break;
            case 4: s1.billData.sort((p1,p2)=>p1.instock.localeCompare(p2.instock));
            break;
               }
            
            this.setState(s1);

            }


    render(){
        const {billData,Categorys,Instocks,Pricerange,billItems,totalquantity,
            Totalamount,filterCategory,filterStock,filterPrice,view,sortColumn, isSortAscending,} = this.state;

        const filteredData = billData.filter((item) => {
            if (filterCategory && item.category !== filterCategory) {
                return false;
            }
            if (filterStock && item.instock !== filterStock) {
                return false;
            }
            if (filterPrice) {
                if (filterPrice == '<10' && item.price >= 10) {
                    return false;
                }
                if (filterPrice == '10-20' && (item.price < 10 || item.price > 20)) {
                    return false;
                }
                if (filterPrice == '>20' && item.price <= 20) {
                    return false;
                }
            }
            return true;
        });
        const getSortIndicator = (col) => {
            if (col === sortColumn) {
              return  "(X)" ;
            }
            return "";
          };



        return  (
           <div>
        <nav className="navbar navbar-expand navbar-light bg-dark">
            <a className="navbar-brand text-white" href="#">Billing System</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link text-white" onClick={this.showBill}>New Bill</a>
                    </li>
                </ul>
            </div>
        </nav>
       { view===0?(
            <div>
        <div id="container" className="container">
            <h3>Details of Current Bill</h3>
            <div className="row">
            <p className="col h5" >
                Items:{billItems.length}, Quantity:{totalquantity}, Amount:{Totalamount}</p>

            </div>
            <div className="row">
                {billItems.length>0?(
                    <div >{billItems.map((ele)=>(
                        <div className="row">
                            <div className="col-7 h5">
                            {ele.code},{ele.prod},Price: {ele.price} ,Quaantity: {ele.quantity}, Value: {ele.value}
                            </div>
                            <div className="col-5">
                            <button className="btn btn-success m-1" onClick={()=>this.increaseQuantity(ele.id)} >+</button>
                            <button className="btn btn-warning  m-1" onClick={()=>this.decreaseQuantity(ele.id)} >-</button>
                            <button className="btn btn-danger m-1" onClick={()=>this.removeItem(ele.id)} >X</button>
                            </div>
                        </div>


                    ))}
                    <div className="col">
                        <button className="btn btn-primary" onClick={()=>this.clearItem()} >Close Bill</button>
                        </div>

                    </div>
                ):(
                    <div className="row"></div>
                )}
      


            </div>

        </div>
        <div className="container">
            <h3 className="text-center">Prodiuct List</h3>
            <div className=" row">
            <div className="form-group row">
  <div className="form-group col-3">
    <strong>Filter Product by : </strong>
  </div>
  <div className="form-group col-3">
    <select name="filterCategory"className="form-control"value={filterCategory}
      onChange={this.filterChange}
    >
      <option value="">Select Category</option>
      {Categorys.map((category) => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  </div>
  <div className="form-group col-3">
    <select name="filterStock" className="form-control"value={filterStock}
      onChange={this.filterChange}
    >
      <option value="">Select Stock</option>
      {Instocks.map((stock) => (
        <option key={stock} value={stock}>{stock}</option>
      ))}
    </select>
  </div>
  <div className="form-group col-3">
    <select name="filterPrice" className="form-control" value={filterPrice} onChange={this.filterChange}>
      <option value="">Select Price Range</option>
      {Pricerange.map((price) => (
        <option key={price} value={price}>{price}</option>
      ))}
    </select>
  </div>
</div>

            </div>
            <div className="row bg-dark text-white border pl-4">
            <div className="col-2" onClick={()=>this.sort(0)}>Code{getSortIndicator(0)}</div>
            <div className="col-3" onClick={()=>this.sort(1)}>Product{getSortIndicator(1)}</div>
            <div className="col-2" onClick={()=>this.sort(2)}>Category{getSortIndicator(2)}</div>
            <div className="col-1" onClick={()=>this.sort(3)}>Price{getSortIndicator(3)}</div>
            <div className="col-2" onClick={()=>this.sort(4)}>In Stock{getSortIndicator(4)}</div>
            <div className="col-2"></div>
            </div>
                {filteredData.map((ele,index)=>(
                    <div className="row border" key={index}>
                             <div className="col-2">{ele.code}</div>
                             <div className="col-3">{ele.prod}</div>
                             <div className="col-2">{ele.category}</div>
                             <div className="col-1">{ele.price}</div>
                             <div className="col-2">{ele.instock}</div>
                             <div className="col-2"><button className="btn btn-secondary btn-sm" onClick={()=>this.addTobill(ele.code)}>Add to Bill</button></div>

                             </div>


                ))}


        </div>
      
                
    </div>
        ):("")}
    </div>
                
        );
        }
    }
export default A73MainBill;