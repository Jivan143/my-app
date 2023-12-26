import React, { Component } from "react";

class OptionCBook extends Component {
  handleChange = (e) => {
    const { currentTarget: input } = e;
    let options = { ...this.props.options };
    options[input.name] = input.value;
    console.log("OptionsCB", options);
    this.props.onOptionChange(options);
  };

  updateCBs = (inpValues, checked, value) => {
    let inpArr = inpValues ? inpValues.split(",") : [];
    if (checked) inpArr.push(value);
    else {
      let index = inpArr.findIndex((ele) => ele === value);
      if (index >= 0) inpArr.splice(index, 1);
    }
    console.log(inpValues, inpArr);
    return inpArr.join(",");
  };

  makeRadios = (arr, value, name, label) => (
    <React.Fragment>
      <h5 className="form-check-label font-weight-bold">{label}</h5>
      {arr.map((opt) => (
        <div className="form-check m-2 border" key={opt}>
          <input
            className="form-check-input"
            value={opt}
            type="radio"
            name={name}
            checked={value === opt}
            onChange={this.handleChange}
          />
          <label className="form-check-label">{opt}</label>
        </div>
      ))}
    </React.Fragment>
  );

  makeDropdown = (arr, value, name, label) => (
    <div className="form-group">
      <select
        className="form-control"
        name={name}
        value={value}
        onChange={this.handleChange}
      >
        <option key="" value="">
          {label}
        </option>
        {arr.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
  makeRadios1 = (arr, value, name, label) => (
    <React.Fragment>
      <h5 className="form-check-label font-weight-bold">{label}</h5>
      {arr.map((opt) => (
        <div className="form-check m-2 border" key={opt}>
          <input
            className="form-check-input"
            value={opt.substring(0, 2)}
            type="radio"
            name={name}
            checked={value === opt.substring(0, 2)}
            onChange={this.handleChange}
          />
          <label className="form-check-label">{opt}</label>
        </div>
      ))}
    </React.Fragment>
  );
  
  render() {
    const { langRestrict= "", filter = "", printType = "", orderBy = "" } =
      this.props.options;
    let { languages, filters, Printtypes, orderBys,settings } = this.props;

    return (
      <div className="row border ">
       { settings.languages?<div className="">{this.makeRadios1(languages, langRestrict, "langRestrict", "Languages")}</div>:""}
       { settings.filter?  <div className="">{this.makeRadios(filters, filter, "filter", "Filter")}</div>:""}
       { settings.printType?  <div className="">{this.makeRadios(Printtypes, printType, "printType", "Print Type")}</div>:""}
       { settings.orderBy?  <div className="">{this.makeDropdown(orderBys, orderBy, "orderBy", "Order By")}</div>:""}
      </div>
    );
  }
}

export default OptionCBook;
