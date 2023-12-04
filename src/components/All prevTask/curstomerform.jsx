// CustomerForm.js
import React, { Component } from "react";

class CustomerForm extends Component {
  render() {
    const {name,age,email,isFormVisible,customers,handleInputChange,handleSubmit,toggleForm,handleEdit,}= this.props;

    return (
      <div>
        <div className="col  p-2 m-2">
        <button className=" btn btn-primary m-2" onClick={toggleForm}>
          {isFormVisible ? "Cancel" : "New Customer"}
        </button>
        <button  className=" btn btn-primary m-2" onClick={isFormVisible}>
          List of Customer
        </button>
       </div>
        {isFormVisible && (
            <div className="container p-2">
          <form onSubmit={handleSubmit}>
    
            <label>Name:</label>
              <input type="text" name="name" value={name} onChange={handleInputChange}
              />
     
            <br />
            <label>
              Age:<input type="text"name="age"value={age} onChange={handleInputChange}
              />
            </label>
            <br />
            <label>Email: 
              <input type="text" name="email" value={email} onChange={handleInputChange}/>
              </label>
            <div className="container">
            <button className=" btn btn-success tex-center" type="submit">Submit</button>
            </div>
          </form>
          </div>

        )}

        {customers.length === 0 ? (
          <h4>There are Zero customers</h4>
        ) : (
          <div>
            <h2>List of Customers</h2>
            <ul>
            <div className=" container">
                    <div className="row border bg-info ">
                    <div className="col-3">Name</div>
                    <div className="col-3 border">Age</div>
                    <div className="col-3">Email</div>
                    <div className="col-3">Email</div>
                    </div>
              {customers.map((customer, index) => (
                <div className="row  border bg-light">
                    <div className="col-3">{customer.name}</div>
                    <div className="col-3 border">{customer.age}</div>
                    <div className="col-3">{customer.email}</div>
                    <div className="col-3"><button className="btn btn-primary"onClick={() => handleEdit(index)}>Edit</button></div>
                    </div>
              ))}
                 </div>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default CustomerForm;
