
// Message.js
import React, { Component } from "react";

class Message extends Component {

  render() {
    const { message, onBack, onDelete } = this.props;
    return (
      <div>
         <div className="row border">
            <i  className="col-6 fas fa-arrow-left" onClick={onBack}></i>
            <i className="col-6  fas fa-trash text-right" onClick={onDelete}></i>
        </div>
        <div className="row border">
          <div className="col p-2">
            <p>From: {message.from}</p>
            <p>To: {message.to}</p>
            <p>Subject: {message.subject}</p>
            {message.text.split("\n").map((line) => (
              <p >Message: {line}</p>
            ))}
            <p>Regards,</p>
            <p>{message.from.charAt(0).toUpperCase() + message.from.substring(1, 4)}</p>


          </div>
        </div>
      </div>
    );
  }
}

export default Message;
