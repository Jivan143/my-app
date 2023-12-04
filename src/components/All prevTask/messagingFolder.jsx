
import React, { Component } from "react";
import Message from "./message";

class MessagingFolder extends Component {

    
  render() {
    const { messages, selectedMessageId, onSelectMessage,onDelete } = this.props;

    return (
      <div>
        {selectedMessageId !== null ? (
          <Message
            message={messages.find((message) => message.id === selectedMessageId)}
            onBack={() => onSelectMessage(null)}
            onDelete={() => onDelete(selectedMessageId)} // Pass selectedMessageId


          />
        ) : (
          messages.map((message) => (
            <div
              className="row border"
              onClick={() => onSelectMessage(message.id)}
            >
              <div
                className={"col-2 pl-2 " + (message.read ? "fa fa-envelope-open-o" : "fa fa-envelope-o")}
              ></div>
              <div className="col-4 pl-2">
                {message.read ? (
                  <span>{message.from}</span>
                ) : (
                  <strong>{message.from}</strong>
                )}
              </div>
              <div className="col-6 pl-2">
                {message.read ? (
                  <span>{message.subject}</span>
                ) : (
                  <strong>{message.subject}</strong>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default MessagingFolder;
