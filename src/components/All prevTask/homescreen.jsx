import React, { Component } from "react";
import CustomerForm from "./curstomerform";

class HomeScreen extends Component {
  state = {
    name: "",
    age: "",
    email: "",
    customers: [],
    isFormVisible: false,
    editingIndex: null,
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleEdit = (index) => {
    const { customers } = this.state;
    const editedCustomer = customers[index];

    this.setState({
      name: editedCustomer.name,
      age: editedCustomer.age,
      email: editedCustomer.email,
      isFormVisible: true,
      editingIndex: index,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, age, email, customers, editingIndex } = this.state;

    if (editingIndex !== null) {
      const updatedCustomers = [...customers];
      updatedCustomers[editingIndex] = { name, age, email };

      this.setState({
        customers: updatedCustomers,
        name: "",
        age: "",
        email: "",
        isFormVisible: false,
        editingIndex: null,
      });
    } else if (name && age && email) {
      const newCustomer = { name, age, email };
      this.setState((ele) => ({
        customers: [...ele.customers, newCustomer],
        name: "",
        age: "",
        email: "",
        isFormVisible: false,
      }));
    }
  };

  toggleForm = () => {
    this.setState((prevState) => ({
      isFormVisible: !prevState.isFormVisible,
      editingIndex: null,
    }));
  };

  render() {
    const { name, age, email, isFormVisible, customers } = this.state;

    return (
      <div>
        <CustomerForm
          name={name}
          age={age}
          email={email}
          isFormVisible={isFormVisible}
          customers={customers}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          toggleForm={this.toggleForm}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}

export default HomeScreen;
