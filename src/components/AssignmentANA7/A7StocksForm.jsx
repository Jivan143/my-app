import React, {Component} from "react";
class A7StocksForm extends Component{
    state={
        code:"", 
        quantity:0,
        date:0,
        year:0,
        month:0,
         months:[{display:"Jan",value:1},{display:"Feb",value:2},{display:"March",value:3},
         {display:"Apr",value:4},{display:"May",value:5},{display:"Jun",value:6},
         {display:"Jul",value:7},{display:"Aug",value:8},{display:"Sep",value:9},
         {display:"Oct",value:10},{display:"Nov",value:11},{display:"Dec",value:12},],
         

    }


    validateForm = () => {
      const { code, quantity, date, year, month } = this.state;
  
      if (!code) {
        alert("Please select a code");
        return false;
      }
  
      if (!quantity  || quantity <= 0) {
        alert("Please Enter  quantity");
        return false;
      }
  
      if (!year || !month || !date) {
        alert("Please select a valid date");
        return false;
      }
  
      return true;
    };

    handleSubmit = () => {
      if (this.validateForm()) {
        let { quantity, code } = this.state;
        const newstock = {
          code,
          quantity: +quantity,
        };
        this.props.Addquantity(newstock);
        this.setState({
          code: "",
          quantity: "",
          date: 0,
          year: 0,
        });
        this.props.onCancel();
      }
    };
 makeDateArray=(year, month)=> {
    console.log(month,year);
  let dates = [];
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  if (year === currentYear && month === currentMonth) {
    dates.push(currentDate);
  }
  for (let i = 1; i <= 31; i++) {
    const date = new Date(year, month - 1, i);
    console.log("dgs",date.getFullYear(),"=",year);
    console.log("dms",date.getMonth(),"=",month);

    if (date.getFullYear() == year && date.getMonth() == month ) {
      console.log("date",date);
        break;
    }
    dates.push(i);

    console.log("dates",dates);


  }
  console.log("dates",dates)
  return dates;
}



    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };
    render(){
        const {quantity,code,Products}=this.props;
        const{months, date,year,month}=this.state;
        let codes=Products.map((ele)=>ele.code);

       let dates=  (month>0 && year>0 )? this.makeDateArray(year, month):[]
console.log(dates);
        let years1=[];
        for(let i=1900;i<=2025;i++){
            years1.push(i);
        }

        return (
        <div className="container">
            
            <div className="row m-2">
        <h6>Code</h6>

             <select
             name="code"
             value={code}
             onChange={this.handleInputChange}
           >
         <option value="">Select Brand</option>
         {codes.map((ele)=>(
        <option value={ele}>{ele}</option>
        ))}

         </select>
         </div>
       <div  className="row m-2">
        <h6>Stocks Received</h6>
          <input type="text" name="quantity"value={quantity}onChange={this.handleInputChange}/>
        </div>



 

<div className="col-12">

        <select
             name="year"
             value={year}
             onChange={this.handleInputChange}
             className="col-3 m-1"
                >
                <option  >Select Year</option>
                {years1.map((ele)=>(
                <option value={ele}>{ele}</option>
                ))}

         </select>
         
        <select
            name="month"
            value={month}
            onChange={this.handleInputChange}
            className="col-3 m-1"

            >
            <option >Select Month</option>
            {months.map((ele)=>(
            <option value={ele.value}>{ele.display}</option>
            ))}

        </select>

        

             <select
             name="date"
             value={date}
             onChange={this.handleInputChange}
             className="col-3 m-1 "

           >
         <option value="">Select Date</option>
         {dates.map((ele)=>(
        <option value={ele}>{ele}</option>
        ))}

         </select>
         
        </div>
        <div className="col text-center m-2">
        <button className=" btn btn-primary" onClick={this.handleSubmit}>Submit</button>
        </div>
        <div className="col text-center m-2">
        <button className=" btn btn-primary" onClick={this.props.onCancel}>Go Back Home Page</button>
        </div>

        </div>
        )
    }
}
export default A7StocksForm;