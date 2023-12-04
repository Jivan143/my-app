import React, { Component } from "react";

class LeftStoreRadioForm extends Component {
  handleChange = (e) => {
    const { optionsSel } = this.props;
    const s1 = { ...optionsSel };
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      s1[name] = checked ? [...s1[name], value] : s1[name].filter((item) => item !== value);
    } else {
      s1[name] = value;
    }

    this.props.onChangeOption(s1);
  };

  render() {
    const { optionsArray, optionsSel } = this.props;

    return (
      <div className="container">
        {this.showCheckboxes("Category", optionsArray.category, "category", optionsSel.category)}
        {this.showRadios("Stock Status", optionsArray.stock, "stock", optionsSel.stock)}
      </div>
    );
  }

  showRadios = (label, arr, name, selVal) => {
    return (
      <React.Fragment>
        <label className="form-check-label h6">{label}</label>
        {arr.map((opt) => (
          <div className="form-check" key={opt}>
            <input
              className="form-check-input"
              type="radio"
              name={name}
              value={opt}
              checked={selVal === opt}
              onChange={this.handleChange}
            />
            <label className="form-check-label">{opt}</label>
          </div>
        ))}
      </React.Fragment>
    );
  };

  showCheckboxes = (label, arr, name, selArr) => {
    return (
      <React.Fragment>
        <label className="form-check-label h6">{label}</label>
        {arr.map((opt) => (
          <div className="form-check" key={opt}>
            <input
              className="form-check-input"
              type="checkbox"
              name={name}
              value={opt}
              checked={selArr.includes(opt)}
              onChange={this.handleChange}
            />
            <label className="form-check-label">{opt}</label>
          </div>
        ))}
      </React.Fragment>
    );
  };
}

export default LeftStoreRadioForm;
